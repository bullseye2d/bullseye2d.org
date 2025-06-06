<?php

namespace Bullseye2D;

use Bullseye2D\Exception\NotFoundException;
use ErrorException; // For converting PHP errors to exceptions
use Throwable; // For type hinting

class ErrorHandler
{
    private static bool $isDevEnvironment = false;
    private static string $pageTitlePrefix = 'Error';
    private static string $homeUrl = '/'; // This will be base_path relative
    private static string $logFilePath = '';
    private static string $appUrl = ''; // e.g., http://localhost
    private static string $basePath = ''; // e.g., /bullseye or empty if root

    /**
     * Registers the error and exception handlers.
     *
     * @param string $environment 'dev' or 'prod'
     * @param string $pageTitlePrefix Prefix for the error page titles
     * @param string $appUrl The application's full base URL (e.g., http://localhost)
     * @param string $basePath The application's base path (e.g., /myapp, or empty if root)
     * @param string $logFilePath Absolute path to the error log file for production
     */
    public static function register(string $environment, string $pageTitlePrefix = 'Error', string $appUrl = '', string $basePath = '/', string $logFilePath = '')
    {
        self::$pageTitlePrefix = $pageTitlePrefix ?: 'Error';
        self::$appUrl = rtrim($appUrl, '/'); // Ensure no trailing slash
        self::$basePath = $basePath ?: ''; // Store as is, might be empty
        // Home URL should be relative to the base path correctly
        self::$homeUrl = rtrim(self::$basePath, '/') . '/';


        if ($logFilePath) {
            self::$logFilePath = $logFilePath;
        } else {
            self::$logFilePath = dirname(__DIR__) . '/../logs/error.log';
        }

        self::updateEnvironment($environment);
    }

    public static function updateEnvironment(string $environment)
    {
        self::$isDevEnvironment = ($environment === 'dev');

        if (!self::$isDevEnvironment && self::$logFilePath && !is_dir(dirname(self::$logFilePath))) {
            @mkdir(dirname(self::$logFilePath), 0775, true);
        }

        set_error_handler([self::class, 'handleError']);
        set_exception_handler([self::class, 'handleException']);
        register_shutdown_function([self::class, 'handleShutdown']);
    }

    // ... handleError, handleShutdown, logError, getSeverityString, html methods remain the same ...
    public static function handleError(int $severity, string $message, string $file, int $line): bool
    {
        if (!(error_reporting() & $severity)) {
            return false;
        }
        throw new ErrorException($message, 0, $severity, $file, $line);
    }

    public static function handleException(Throwable $exception): void
    {
        while (ob_get_level() > 0) {
            ob_end_clean();
        }

        $statusCode = 500;
        $errorTitleForPage = 'Application Error'; // For display on page
        $errorTitleForHeader = 'Application Error'; // For <title> tag

        if ($exception instanceof NotFoundException) {
            $statusCode = 404;
            $errorTitleForPage = $exception->title;
            $errorTitleForHeader = $exception->title;
        }

        http_response_code($statusCode);

        if (!self::$isDevEnvironment) {
            self::logError($exception, $statusCode);
        }

        try {
            if (self::$isDevEnvironment) {
                self::renderDevErrorPage($exception, $statusCode, $errorTitleForHeader);
            } else {
                self::renderProdErrorPage($exception, $statusCode, $errorTitleForPage, $errorTitleForHeader);
            }
        } catch (Throwable $e) {
            $criticalMessage = "Critical error in ErrorHandler: " . $e->getMessage() . "\nOriginal exception: " . $exception->getMessage() . "\nOriginal trace: " . $exception->getTraceAsString();
            if (self::$logFilePath) {
                @file_put_contents(self::$logFilePath, date('[Y-m-d H:i:s]') . " [CRITICAL] " . $criticalMessage . "\n", FILE_APPEND);
            } elseif (ini_get('log_errors') && ini_get('error_log')) {
                error_log("[CRITICAL] " . $criticalMessage);
            }
            echo "A critical error occurred. Please contact support.";
        }
        exit();
    }

    public static function handleShutdown(): void
    {
        $error = error_get_last();
        if ($error !== null && in_array($error['type'], [E_ERROR, E_CORE_ERROR, E_COMPILE_ERROR, E_USER_ERROR, E_PARSE])) {
            $exception = new ErrorException($error['message'], 0, $error['type'], $error['file'], $error['line']);
            if (!headers_sent()) {
                self::handleException($exception);
            } else {
                self::logError($exception, 500);
            }
        }
    }

    private static function logError(Throwable $exception, int $statusCode): void
    {
        if (!self::$logFilePath) return;
        $logMessage = sprintf(
            "[%s] [%d] %s: %s in %s on line %d\nStack trace:\n%s\n",
            date('Y-m-d H:i:s'),
            $statusCode,
            get_class($exception),
            $exception->getMessage(),
            $exception->getFile(),
            $exception->getLine(),
            $exception->getTraceAsString()
        );
        if (isset($_SERVER['REQUEST_METHOD']) && isset($_SERVER['REQUEST_URI'])) {
            $logMessage .= sprintf("Request: %s %s\n", $_SERVER['REQUEST_METHOD'], $_SERVER['REQUEST_URI']);
        }
        // ... rest of logError ...
        $logMessage .= "--------------------------------------------------\n";
        @file_put_contents(self::$logFilePath, $logMessage, FILE_APPEND);
    }


    private static function getSeverityString(int $severity): string
    {
        // ... (same as before)
        switch ($severity) {
            case E_ERROR:
                return 'Fatal Error';
            case E_WARNING:
                return 'Warning';
            case E_PARSE:
                return 'Parse Error';
            case E_NOTICE:
                return 'Notice';
            case E_CORE_ERROR:
                return 'Core Error';
            case E_CORE_WARNING:
                return 'Core Warning';
            case E_COMPILE_ERROR:
                return 'Compile Error';
            case E_COMPILE_WARNING:
                return 'Compile Warning';
            case E_USER_ERROR:
                return 'User Error';
            case E_USER_WARNING:
                return 'User Warning';
            case E_USER_NOTICE:
                return 'User Notice';
            case E_STRICT:
                return 'Strict Standards';
            case E_RECOVERABLE_ERROR:
                return 'Recoverable Error';
            case E_DEPRECATED:
                return 'Deprecated';
            case E_USER_DEPRECATED:
                return 'User Deprecated';
            default:
                return 'Unknown Error Type (' . $severity . ')';
        }
    }

    private static function html(string $string): string
    {
        return htmlspecialchars($string, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
    }


    private static function renderDevErrorPage(Throwable $exception, int $statusCode, string $errorTitleForHeader): void
    {
        $errorTypeDisplay = get_class($exception);
        if ($exception instanceof ErrorException) {
            $errorTypeDisplay = self::getSeverityString($exception->getSeverity());
        }
        $message = self::html($exception->getMessage());
        $file = self::html($exception->getFile());
        $line = $exception->getLine();

        $traceItems = $exception->getTrace();
        $traceString = "#0 {$file}({$line})\n   {$errorTypeDisplay}: {$message}\n\n";
        foreach ($traceItems as $i => $item) {
            $num = $i + 1;
            $traceString .= "#{$num} ";
            if (isset($item['file'])) $traceString .= self::html($item['file']);
            if (isset($item['line'])) $traceString .= "(" . self::html((string)$item['line']) . ")";
            $traceString .= "\n   ";
            if (isset($item['class'])) $traceString .= self::html($item['class']);
            if (isset($item['type'])) $traceString .= self::html($item['type']);
            if (isset($item['function'])) $traceString .= self::html($item['function']) . "()\n\n";
            else $traceString .= "[internal function]\n\n";
        }

        $pageTitle = self::html(self::$pageTitlePrefix . ' - ' . $errorTitleForHeader);
        $cssPath = self::html(self::$appUrl . self::$basePath . '/css/styles.css?v=errordev' . time());
        $homeUrl = self::html(self::$homeUrl);
        $currentYear = date('Y');
        require('../templates/error/dev.phtml');
    }

    private static function renderProdErrorPage(Throwable $exception, int $statusCode, string $errorTitleForPage, string $errorTitleForHeader): void
    {
        $pageTitle = self::html(self::$pageTitlePrefix . ' - ' . $errorTitleForHeader);
        $cssPath = self::html(self::$appUrl . self::$basePath . '/css/styles.css?v=errorprod' . time());
        $homeUrl = self::html(self::$homeUrl);
        $currentYear = date('Y');

        $userMessage = self::html($exception->getMessage());

        // Default for 500 type errors
        $displayTitle = self::html($errorTitleForPage); // e.g., "Application Error"
        $displayDetails = "<p>We're sorry, but an unexpected error occurred. Our team has been notified.</p>";

        if ($exception instanceof NotFoundException) {
            $displayTitle = $exception->title;
            $displayDetails = "<p>" . $exception->getMessage() . "</p>";
        }

        require('../templates/error/prod.phtml');
    }
}
