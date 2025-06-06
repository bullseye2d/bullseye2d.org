<?php

namespace Bullseye2D;

#[\AllowDynamicProperties]
class Template
{
    /**
     * @var string
     */
    public $templateFileName;

    /**
     * @var string
     */
    public $templateContent = '{content}';

    /**
     * @var string
     */
    public $content = array();


    public function __construct(string $tpl = '', array|\stdClass $data = [])
    {
        $this->templateFileName = $tpl;

        foreach ($data as $key => $value) {
            $this->{$key} = $value;
        }
    }

    public function renderArray($element)
    {
        $content = '';

        // NOTE: Nested callables are not handled and should not be used
        if (is_callable($element) && !is_string($element)) {
            $element = $element();
        }

        if ($element instanceof Template) {
            $content .= $element->render();
        } else if (is_string($element)) {
            $content .= $element;
        } else if (is_array($element)) {
            foreach ($element as $key => &$value) {
                $content .= $this->renderArray($value);
            }
        } else if (!is_null($element)) {
            $content .= (string) $element;
        }

        return $content;
    }

    public function getContent($output)
    {
        $output = preg_replace_callback(
            '/{([a-zA-Z0-9_]+(?:\.[a-zA-Z0-9_]+)*)}/',
            function ($matches) {
                $value = $matches[0];
                $path = $matches[1];

                $parts = explode('.', $path);
                $current = $this;

                foreach ($parts as $part) {
                    if (is_object($current) && property_exists($current, $part)) {
                        $current = $current->{$part};
                    } elseif (is_array($current) && array_key_exists($part, $current)) {
                        $current = $current[$part];
                    } elseif ($current instanceof \ArrayAccess && isset($current[$part])) {
                        $current = $current[$part];
                    } else {
                        return $value;
                    }
                }

                return $this->renderArray($current);
            },
            $output
        );


        return $output;
    }

    public function render()
    {
        if ($this->templateFileName) {
            ob_start();
            include $this->templateFileName;
            $output = ob_get_contents();
            ob_end_clean();
        } else {
            $output = $this->templateContent;
        }

        $output = $this->getContent($output);
        return $output;
    }
}
