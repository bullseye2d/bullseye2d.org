<?php
define('BASE_DIRECTORY', __DIR__ . '/..');
define('TEMPLATE_DIRECTORY', BASE_DIRECTORY . '/templates');
define('APP_URL', ($_SERVER['REQUEST_SCHEME'] ?? 'http') . '://' . $_SERVER['HTTP_HOST']);

require __DIR__ . '/../vendor/autoload.php';

use AltoRouter;
use Bullseye2D\Checkout;

use Bullseye2D\ErrorHandler;
use Bullseye2D\Exception\NotFoundException;

ErrorHandler::register('dev', 'Bullseye2D Website', APP_URL, '/', BASE_DIRECTORY . '/logs/error.log');

$config = loadConfig();
$page = $config->page ?? new \stdClass();

ErrorHandler::updateEnvironment($config->environment ?? 'prod');

$router = new AltoRouter();

$router->map('GET', '/', function ($pageId) use ($page) {
    $page->sourceCodeExamplesData = '<script>window.sourceCodeExamples = ' . loadExamples() . '</script>';
    return page('pages/home.phtml', $page);
}, 'home');

$router->map('GET', '/docs', null, 'docs');
$router->map('GET', '/demos', null, 'demos');
$router->map('GET', '/bullseye2d-demos', null, 'bullseye2d-demos');
$router->map('GET', '/boing-demo', null, 'boing-demo');
$router->map('GET', '/download', null, 'download');
$router->map('GET', '/imprint', null, 'imprint');
$router->map('GET', '/terms', null, 'terms');
$router->map('POST', '/checkout/create-session/[*:productId]', function ($pageId, $productId) use ($config) {
    return Checkout::createSession($productId, $config);
}, 'checkout-create-session');

$router->map('GET', '/checkout/success/[*:checkoutSessionId]', function ($pageId, $checkoutSessionId) use ($config) {
    return Checkout::success($checkoutSessionId, $config);
}, 'checkout/success');

$router->map('GET|POST|PATCH|PUT|DELETE', '/webhooks/stripe', function ($pageId) use ($config) {
    return Checkout::webhook($config);
}, 'webhooks-stripe');

$match = $router->match();
$page = $config->page;

if ($match) {
    $match['params']['pageId'] = $match['name'];
    $page->title .= ' - ' . ucfirst($match['name']);
    if (is_callable($match['target'])) {
        echo call_user_func_array($match['target'], $match['params']);
        exit();
    }
} else {
    throw new NotFoundException();
}

echo page('pages/' . $match['name'] . '.phtml', $page);
