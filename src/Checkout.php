<?php

namespace Bullseye2D;

use Bullseye2D\Exception\NotFoundException;
use Bullseye2D\Mail;
use Exception;
use Stripe\Charge as StripeCharge;
use Stripe\Exception\ApiErrorException;
use Stripe\Event as StripeEvent;

class Checkout
{
    const ADMIN_NOTIFICATION_MAIL = 'mail/admin_event_notification.phtml';
    const CUSTOMER_CHECKOUT_COMPLETED_MAIL = 'mail/customer_checkout_completed.phtml';

    public static function webhook($config)
    {
        if (!isset($config->stripe) || !is_object($config->stripe) || !isset($config->stripe->apiKey) || empty($config->stripe->apiKey)) {
            throw new \RuntimeException("Stripe API key is not configured for the current environment (" . ($config->environment ?? 'unknown') . ").");
        }

        $stripe = new \Stripe\StripeClient($config->stripe->apiKey);

        $payload = @file_get_contents('php://input');
        $sigHeader = $_SERVER['HTTP_STRIPE_SIGNATURE'];
        $event = null;

        try {
            $event = \Stripe\Webhook::constructEvent($payload, $sigHeader, $config->stripe->cliEndpointSecret ?? '');
        } catch (\UnexpectedValueException $e) {
            http_response_code(400);
            exit();
        } catch (\Stripe\Exception\SignatureVerificationException $e) {
            http_response_code(400);
            exit();
        }

        $stripeConfigItems = $config->stripe->items ?? (object)[];
        $pageConfig = $config->page ?? (object)[];
        $customerName = 'Valued Customer';
        $customerMail = '';

        switch ($event->type) {
            case 'checkout.session.completed':
                $session = $event->data->object;

                if ($session->payment_status === 'paid') {
                    $customerMail = $session->customer_details->email ?? 'N/A';
                    $customerName = $session->customer_details->name ?: $customerMail;

                    $lineItems = null;
                    try {
                        $lineItems = $stripe->checkout->sessions->allLineItems($session->id, ['limit' => 1]);
                    } catch (ApiErrorException $e) {
                        error_log("Error fetching line items for session {$session->id}: " . $e->getMessage());
                    }

                    if ($lineItems && !empty($lineItems->data) && isset($lineItems->data[0]->price->id)) {
                        $priceId = $lineItems->data[0]->price->id;
                        $productDetails = self::findProductDetailsByPriceId($stripeConfigItems, $priceId);
                    } else {
                        if (isset($session->metadata->product_id)) {
                            $productDetails = self::findProductDetailsByProductId($stripeConfigItems, $session->metadata->product_id);
                        }
                        if (!$productDetails) {
                            error_log("Could not retrieve product details.");
                        }
                    }

                    $productName = $productDetails->name ?? 'Unknown Product';
                    $message = $productDetails->mail->checkoutCompleted ?? "Your support for Bullseye2D is greatly appreciated.";

                    $amountFormatted = self::formatStripeAmount($session->amount_total, $session->currency);

                    $receiptUrl = null;
                    $invoiceUrl = null;

                    if ($session->payment_intent) {
                        try {
                            $pi = $stripe->paymentIntents->retrieve($session->payment_intent, ['expand' => ['latest_charge']]);
                            if ($pi->latest_charge && $pi->latest_charge instanceof StripeCharge) {
                                $receiptUrl = $pi->latest_charge->receipt_url;
                            }
                        } catch (ApiErrorException $e) {
                            error_log("Error retrieving payment intent {$session->payment_intent}: " . $e->getMessage());
                        }
                    }
                    if ($session->invoice) {
                        try {
                            $inv = $stripe->invoices->retrieve($session->invoice);
                            $invoiceUrl = $inv->hosted_invoice_url ?: $inv->invoice_pdf;
                        } catch (ApiErrorException $e) {
                            error_log("Error retrieving invoice {$session->invoice}: " . $e->getMessage());
                        }
                    }

                    // Customer Email
                    $subject = "Thank you for your Bullseye2D order!";
                    $data = [
                        'pageConfig' => $pageConfig,
                        'currentYear' => $pageConfig->currentYear,
                        'customerName' => $customerName,
                        'productName' => $productName,
                        'message' => $message,
                        'amountFormatted' => $amountFormatted,
                        'orderDate' => date('Y-m-d H:i:s T', $session->created),
                        'receiptUrl' => $receiptUrl,
                        'invoiceUrl' => $invoiceUrl,
                        'emailTitle' => 'Order Confirmation'
                    ];

                    Mail::sendEmail($config->mail, $customerMail, $subject, self::CUSTOMER_CHECKOUT_COMPLETED_MAIL, $data);

                    self::sendAdminNotificationMail($config, $event);
                } else {
                    error_log("Checkout session {$session->id} completed but payment_status is '{$session->payment_status}'. No emails sent.");
                }
                break;

            case 'invoice.payment_succeeded':
                $invoice = $event->data->object;

                if (in_array($invoice->billing_reason, ['subscription_cycle', 'subscription_update'])) {
                    self::sendAdminNotificationMail($config, $event);
                }
                break;

            case 'charge.refunded':
            case 'charge.dispute.funds_withdrawn':
            case 'customer.subscription.deleted':
            case 'customer.subscription.paused':
            case 'customer.subscription.resumed':
            case 'customer.subscription.updated':
                self::sendAdminNotificationMail($config, $event);
                break;

            default:
                error_log("Event ${event->type} not handled. Skipping..");
        }
        http_response_code(200);
    }


    public static function createSession($productId, $config)
    {
        if (!isset($config->stripe) || !is_object($config->stripe) || empty($config->stripe->apiKey ?? '')) {
            throw new \RuntimeException("Stripe API key is not configured for the current environment (" . ($config->environment ?? 'unknown') . ").");
        }

        $stripe = new \Stripe\StripeClient($config->stripe->apiKey);

        $item = $config->stripe->items->{$productId} ?? null;

        if (!$item) {
            throw new NotFoundException("Not found", "Product with ID '{$productId}' not found in configuration.");
        }

        if (empty($item->price)) {
            throw new NotFoundException("Invalid Price ID", "Price ID not set for product '{$productId}'.");
        }
        try {
            $line_item = [
                'price' => $item->price, // Use the Stripe Price ID directly.
                'quantity' => 1,
                /*
                'adjustable_quantity' => ['enabled' => false] // As per original code
                */
            ];

            $line_item['dynamic_tax_rates'] = $config->stripe->taxRates ?? [];


            $params = [
                'line_items' => [$line_item],
                'mode' => $item->mode ?? 'payment',
                'success_url' => APP_URL . '/checkout/success/{CHECKOUT_SESSION_ID}',
                'cancel_url' => APP_URL . '/',
                'metadata' => [
                    'product_id' => $productId
                ],
                'tax_id_collection' => ['enabled' => true],
                'billing_address_collection' => 'auto',
            ];

            $checkout_session = $stripe->checkout->sessions->create($params);

            header("HTTP/1.1 303 See Other");
            header("Location: " . $checkout_session->url);
            exit();
        } catch (ApiErrorException $e) {
            throw new \RuntimeException("Payment gateway error: Could not create checkout session. Please try again later. Details: " . $e->getMessage(), 0, $e);
        } catch (Exception $e) {
            throw new \RuntimeException("An unexpected error occurred while preparing your checkout. Please try again. Details: " . $e->getMessage(), 0, $e);
        }
    }

    public static function success($checkoutSessionId, $config)
    {
        if (!isset($config->stripe) || !is_object($config->stripe) || empty($config->stripe->apiKey ?? '')) {
            throw new \RuntimeException("Stripe API key is not configured for the current environment (" . ($config->environment ?? 'unknown') . ") for success page.");
        }

        $stripe = new \Stripe\StripeClient($config->stripe->apiKey);
        try {
            $session = $stripe->checkout->sessions->retrieve($checkoutSessionId);
            $config->page->customer =  $session->customer_details ?? [];
            return
                page('pages/checkout_success.phtml', $config->page);
        } catch (ApiErrorException $e) {
            throw new \RuntimeException("Payment gateway error: Could not retrieve checkout session details. " . $e->getMessage(), 0, $e);
        } catch (Exception $e) {
            throw new \RuntimeException("An error occurred while processing your successful payment. " . $e->getMessage(), 0, $e);
        }
    }

    private static function getAdminNotificationTexts(string $eventType, string $productName = 'N/A', string $status = ''): array
    {
        $subject = "Bullseye2D Stripe Event: {$eventType}";
        $emailTitle = 'Stripe Event Notification';

        switch ($eventType) {
            case 'checkout.session.completed':
                $subject = "New Bullseye2D Sale: {$productName}";
                $emailTitle = 'New Sale Notification';
                break;
            case 'invoice.payment_succeeded':
                $subject = "Bullseye2D Subscription Renewal/Update: {$productName}";
                $emailTitle = 'Subscription Payment Succeeded';
                break;
            case 'charge.refunded':
                $subject = "Bullseye2D Refund Processed: {$productName}";
                $emailTitle = 'Refund Processed';
                break;
            case 'customer.subscription.deleted':
            case 'customer.subscription.paused':
            case 'customer.subscription.resumed':
            case 'customer.subscription.updated':
                $actualStatus = $status ?: ucfirst(str_replace('customer.subscription.', '', $eventType));
                $subject = "Bullseye2D Subscription {$actualStatus}: {$productName}";
                $emailTitle = "Subscription {$actualStatus}";
                break;
            default:
                if (strpos($eventType, 'payment_intent.payment_failed') === 0) {
                    $subject = "Bullseye2D Payment Failed: {$productName}";
                    $emailTitle = 'Payment Failed Notification';
                } elseif (strpos($eventType, 'dispute.') === 0) {
                    $subject = "Bullseye2D Dispute Opened: {$eventType}";
                    $emailTitle = 'Dispute Notification';
                } elseif (strpos($eventType, 'review.') === 0) {
                    $subject = "Bullseye2D Review: {$eventType}";
                    $emailTitle = 'Review Notification';
                }
                break;
        }
        return ['subject' => $subject, 'emailTitle' => $emailTitle];
    }

    private static function sendAdminNotificationMail(object $config, StripeEvent $event): void
    {
        $eventType = $event->type;
        $eventData = $event->data->object;
        $pageConfig = $config->page ?? (object)[];
        $stripeConfigItems = $config->stripe->items ?? (object)[];

        $customerName = null;
        $customerEmail = null;
        $productName = null;
        $amountFormatted = null;
        $status = ucfirst(str_replace('customer.subscription.', '', $eventType)) ?: null;

        $customerEmail = $eventData->customer_details->email ?? $eventData->customer_email ?? $eventData->billing_details->email ?? 'N/A';
        $customerName = $eventData->customer_details->name ?? $eventData->customer_name ?? $eventData->billing_details->name ?? 'N/A';

        $productDetails = self::findProductDetailsByProductId($stripeConfigItems, $eventData->metadata->product_id ?? 'Unknown Product');
        $productName = $productDetails->name ?? $eventData->metadata->product_id ?? 'Unknown Product';

        $amountFormatted = self::formatStripeAmount($eventData->amount_total ?? $eventData->amount_paid ?? $eventData->amount_refunded ?? 0, $eventData->currency ?? '');
        $status = $eventData->payment_status ?? $eventData->status ?? ($eventData->paid ? 'Paid' : $status);

        $notificationTexts = self::getAdminNotificationTexts($eventType, $productName ?? 'Unknown Product', $status ?: '-');

        $mailData = [
            'pageConfig' => $pageConfig,
            'currentYear' => $pageConfig->currentYear ?? date('Y'),
            'emailTitle' => $notificationTexts['emailTitle'],
            'eventType' => $eventType,
            'eventDate' => date('Y-m-d H:i:s T', $event->created),
            'customerName' => $customerName,
            'customerEmail' => $customerEmail,
            'productName' => $productName,
            'status' => $status,
            'eventStripeObject' => $eventData,
            'amountFormatted' => $amountFormatted
        ];

        Mail::sendEmail($config->mail, $config->admin, $notificationTexts['subject'], self::ADMIN_NOTIFICATION_MAIL, $mailData);
    }

    public static function formatStripeAmount(int $amount, string $currency): string
    {
        $divisor = 100;
        if (in_array(strtolower($currency), ['jpy', 'krw', 'vnd'])) {
            $divisor = 1;
        }
        return number_format($amount / $divisor, 2) . ' ' . strtoupper($currency);
    }

    public static function findProductDetailsByPriceId(object $stripeConfigItems, string|null $priceId): ?object
    {
        foreach ($stripeConfigItems as $itemDetails) {
            if (isset($itemDetails->price) && $itemDetails->price === $priceId) {
                return $itemDetails;
            }
        }
        return null;
    }

    public static function findProductDetailsByProductId(object $stripeConfigItems, string|null $productId): ?object
    {
        if (isset($stripeConfigItems->{$productId})) {
            return $stripeConfigItems->{$productId};
        }
        return null;
    }
}
