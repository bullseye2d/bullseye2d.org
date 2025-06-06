<?php

namespace Bullseye2D;

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception as PHPMailerException;

class Mail
{
    public static function canSendEmail(object $config): bool
    {
        return !empty($config->host) && !empty($config->username) && !empty($config->password);
    }

    public static function sendEmail(object $config, string $to, string $subject, string $templateFile, array $templateData): bool
    {
        if (!self::canSendEmail($config)) {
            error_log("Mail configuration is incomplete. Cannot send email to {$to} with subject '{$subject}'.");
            return false;
        }

        if (!filter_var($to, FILTER_VALIDATE_EMAIL)) {
            error_log("Cannot send mail to $to. Invalid E-Mail Address!");
            return false;
        }

        $templateData['subject'] = $subject;
        $fullTemplatePath = TEMPLATE_DIRECTORY . '/' . $templateFile;

        if (!file_exists($fullTemplatePath)) {
            error_log("Could not find email template: $fullTemplatePath");
            return false;
        }

        $template = new Template($fullTemplatePath, $templateData);
        $htmlBody = $template->render();

        $mail = new PHPMailer(true);
        try {
            $mail->isSMTP();
            $mail->Host       = $config->host;
            $mail->SMTPAuth   = $config->auth ?? true;
            $mail->Username   = $config->username;
            $mail->Password   = $config->password;
            $mail->SMTPSecure = $config->secure ?? PHPMailer::ENCRYPTION_STARTTLS;
            $mail->Port       = $config->port ?? 587;

            $fromName = $config->name ?? 'Bullseye2D System';
            $mail->setFrom($config->username, $fromName);
            $mail->addReplyTo($config->username, $fromName);

            $mail->addAddress($to);

            $mail->isHTML(true);
            $mail->Subject = $subject;
            $mail->Body    = $htmlBody;
            $mail->AltBody = $mail->html2text($htmlBody);
            $mail->CharSet = 'UTF-8';

            $mail->send();

            return true;
        } catch (PHPMailerException $e) {
            error_log("Message could not be sent. Mailer Error: {$mail->ErrorInfo}. To: {$to}, Subject: {$subject}");
            return false;
        }
    }
}
