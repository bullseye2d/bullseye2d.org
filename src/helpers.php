<?php

use Bullseye2D\Template;

function tpl($templateFile, $data)
{
    $tpl = new Template(TEMPLATE_DIRECTORY . '/' . $templateFile, $data);
    return $tpl->render();
}

function page($template, $params)
{
    return tpl('layout/header.phtml', $params) .
        tpl($template, $params) .
        tpl('layout/footer.phtml', $params);
}

function loadConfig()
{
    $configFile = BASE_DIRECTORY . '/config.php';
    $config = file_exists($configFile) ? require($configFile) : [];
    $env = getenv('APP_ENV') ?: 'dev';
    if ($env !== 'dev' && $env !== 'prod') {
        throw new Exception("Invalid Environment set: $env");
    }
    $config['environment'] = $env;

    if ($env === 'dev') {
        $devConfigFile = BASE_DIRECTORY . '/config.dev.php';
        $devConfig = file_exists($devConfigFile) ? require($devConfigFile) : [];
        $config = array_replace_recursive($config, $devConfig);
    } else {
        $prodConfigFile = BASE_DIRECTORY . '/config.prod.php';
        $prodConfig = file_exists($prodConfigFile) ? require($prodConfigFile) : [];
        $config = array_replace_recursive($config, $prodConfig);
    }

    return json_decode(json_encode($config));
}

function dd(...$vars)
{
    while (ob_get_level() > 0) {
        ob_end_clean();
    }

    $appUrl = defined('APP_URL') ? rtrim(APP_URL, '/') : '';
    $basePath = '';
    if (isset($_SERVER['SCRIPT_NAME'])) {
        $scriptNamePath = dirname($_SERVER['SCRIPT_NAME']);
        if ($scriptNamePath === '/' || $scriptNamePath === '\\' || $scriptNamePath === '.') {
            $basePath = '';
        } else {
            $basePath = $scriptNamePath;
        }
    }
    $cssPath = $appUrl . $basePath . '/css/styles.css?v=dump' . time();

    $pageTitle = 'Debug Dump';
    $currentYear = date('Y');

    // Prepare JSON representation for objects to be logged to console
    $jsonForConsole = [];
    foreach ($vars as $var) {
        if (is_object($var) || is_array($var)) {
            // JSON_PARTIAL_OUTPUT_ON_ERROR allows to continue encoding if an error (like recursion) occurs,
            // outputting null for the problematic part.
            $json = json_encode($var, JSON_PARTIAL_OUTPUT_ON_ERROR | JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT);
            if (json_last_error() !== JSON_ERROR_NONE && json_last_error() !== JSON_ERROR_RECURSION && json_last_error() !== JSON_ERROR_UNSUPPORTED_TYPE) {
                // If major error other than partial output, mark as false
                $jsonForConsole[] = false; // Indicates failure to serialize that's not just partial
            } else if (json_last_error() === JSON_ERROR_RECURSION || json_last_error() === JSON_ERROR_UNSUPPORTED_TYPE) {
                // If recursion or unsupported type led to partial output, mark as null to inform user in JS
                $jsonForConsole[] = null;
            } else {
                $jsonForConsole[] = $json;
            }
        } else {
            $jsonForConsole[] = false; // Not an object, no JSON needed for console log
        }
    }

    $data = [
        'dumpedVariables' => $vars,
        'pageTitle'       => $pageTitle,
        'cssPath'         => $cssPath,
        'currentYear'     => $currentYear,
        'jsonForConsole'  => $jsonForConsole
    ];

    $backtrace = debug_backtrace(DEBUG_BACKTRACE_IGNORE_ARGS, 2);
    $caller = $backtrace[0] ?? null;
    if ($caller && isset($caller['file']) && isset($caller['line'])) {
        $data['callerFile'] = $caller['file'];
        $data['callerLine'] = $caller['line'];
    }

    if (!defined('TEMPLATE_DIRECTORY')) {
        $templateDir = __DIR__ . '/../templates';
        if (defined('BASE_DIRECTORY')) {
            $templateDir = BASE_DIRECTORY . '/templates';
        }
    } else {
        $templateDir = TEMPLATE_DIRECTORY;
    }

    $tpl = new \Bullseye2D\Template($templateDir . '/error/dump.phtml', $data);
    echo $tpl->render();
    exit();
}

function isEmpty($value): bool
{
    if (empty($value)) {
        return true;
    }
    if (is_string($value) && trim($value) === '') {
        return true;
    }
    if (is_object($value) && count(get_object_vars($value)) === 0) {
        return true;
    }
    return false;
}

function removeEmptyProperties(mixed $data): mixed
{
    if (is_object($data)) {
        $cleanedObject = new stdClass();
        foreach ($data as $key => $value) {
            $cleanedValue = removeEmptyProperties($value);
            if (!isEmpty($cleanedValue)) {
                $cleanedObject->$key = $cleanedValue;
            }
        }
        return count(get_object_vars($cleanedObject)) === 0 ? null : $cleanedObject;
    } elseif (is_array($data)) {
        $cleanedArray = [];
        foreach ($data as $key => $value) {
            $cleanedValue = removeEmptyProperties($value);
            if (!isEmpty($cleanedValue)) {
                $cleanedArray[$key] = $cleanedValue;
            }
        }
        return count($cleanedArray) === 0 ? null : $cleanedArray;
    } else {
        return isEmpty($data) ? null : $data;
    }
}

function loadExamples()
{
    $examplesData = [];
    $examplesDir = __DIR__ . '/../static/examples/';

    if (!is_dir($examplesDir)) {
        return json_encode([]);
    }

    $files = scandir($examplesDir);
    if ($files) {
        foreach ($files as $file) {
            if ($file === '.' || $file === '..') {
                continue;
            }

            $filePath = $examplesDir . $file;
            if (is_file($filePath)) {
                $content = file_get_contents($filePath);
                if ($content === false) {
                    continue;
                }
                $pathInfo = pathinfo($file);
                $id = $pathInfo['filename'];
                $extension = $pathInfo['extension'] ?? '';

                $title = preg_replace('/^\d+_/', '', $id);
                $title = str_replace(['_', '-'], ' ', $title);
                $title = ucwords($title);

                $lang = 'text';
                switch (strtolower($extension)) {
                    case 'dart':
                        $lang = 'dart';
                        break;
                    case 'sh':
                    case 'bash':
                        $lang = 'bash';
                        break;
                    case 'js':
                        $lang = 'javascript';
                        break;
                }

                $examplesData[] = [
                    'id' => $id,
                    'title' => $title,
                    'lang' => $lang,
                    'src' => $content,
                ];
            }
        }
    }
    return json_encode($examplesData);
}
