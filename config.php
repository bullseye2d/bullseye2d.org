<?php
return [
    'page' => [
        'title' => 'Bullseye 2D xx',
        'author' => 'Jochen Heizmann',
        'keywords' => 'game, dev, indie, game development, engine, library, 2d, gl, webgl, opengl, dart',
        'description' => 'A 2D Game Engine for Dart.',
        'links' => [
            'youtube' => 'https://www.youtube.com/@midnight_coder',
            'discord' => 'https://discord.gg/NdVtXedr4M',
            'github' => 'https://github.com/bullseye2d/bullseye2d'
        ],
        'currentYear' => date('Y'),
        'baseHrefUrl' => '/'
    ],
    'stripe' => [
        'apiKey' => '',
        'cliEndpointSecret' => '',
        'taxRates' => [],
        'items' => [
            'supporter' => [
                'name' => 'Bullseye 2D Supporter (Test)',
                'mode' => 'payment',
                'price' => '',
                'mail' => [
                    'checkoutCompleted' => "Thank you so much for supporting Bullseye2D. Your support helps keep the project going and is a great motivator for me to keep building and imporving. I will contact you soon regarding your early access to the Premium Edition."
                ],
            ],
            'gold' => [
                'name' => 'Bullseye 2D Gold (Test)',
                'mode' => 'subscription',
                'price' => '',
                'mail' => [
                    'checkoutCompleted' => 'Welcome as a Bullseye2D Gold Sponsor! Your generous support helps us grow and improve the engine. I will contact you soon, so we can get your logo on the website as soon as possible. You will also then get early access to the premium edition.'
                ],
            ],
            'platinum' => [
                'name' => 'Bullseye 2D Platinum (Test)',
                'mode' => 'subscription',
                'price' => '',
                'mail' => [
                    'checkoutCompleted' => 'A huge thank you for becoming a Bullseye2D Platinum Sponsor! Your top-tier support is invaluable. I will contact you soon to get your logo on the Bullseye2D website as soon as possible. You will also get early access to the Premium Edition as well.'
                ],
            ]
        ]
    ],
    // Let the loadConfig script in src/helpers.php figure out the environment
    'environment' => null,
    'mail' => [
        'username' => '',

        'name' => 'Bullseye2D Support',
        'password' => '',
        'host' => '',
        'secure' => PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_STARTTLS,
        'port' => 587,
        'auth' => true
    ],
    'admin' => 'ADMIN_MAIL_ADDRESS'
];
