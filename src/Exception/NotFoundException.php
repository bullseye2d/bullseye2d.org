<?php

namespace Bullseye2D\Exception;

class NotFoundException extends \Exception
{
    public string $title;

    public function __construct($title = "Page not found", $message = "The requested page could not be found. Perhaps it's in another castle!", $code = 404, \Throwable $previous = null)
    {
        parent::__construct($message, $code, $previous);
        $this->title = $title;
    }
}
