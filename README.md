# 🎯 bullseye2d.org - The Official Website

This is the official website of [Bullseye2D](https://github.com/bullseye2d/bullseye2d) (a 2D game library for Dart). It was build with a straightforward approach, avoiding frameworks for simplicity and lightweightness.

## Getting Started

Follow these instructions to get a local copy of the website up and running for development or contribution.

### Prerequisites

*   **PHP:** Version 8.2.0 or higher recommended
*   **Composer:** The PHP dependency manager. [Install Composer](https://getcomposer.org/download/).
*   **Git:** For cloning the repository.

### 1. Clone the Repository

```bash
git clone https://github.com/bullseye2d/bullseye2d.org.git
cd bullseye2d.org

# Install Dependencies
composer install
```

### 2. Setup Configuration

Website settings are loaded from a base file and then overridden by environment-specific files. For production set the environment variable `APP_ENV` to `prod`. Dev environment is used by default or if `APP_ENV` is set to `dev`.

*   **`config.php`**:
    *   This file is loaded by the application as the **base configuration**.

*   **`config.dev.php`**:
    *   This file is for **development-specific settings**.
    *   You will need to **create and customize this file** in the root directory. You can use the structure of `config.php` as a starting point.
    *   It should contain all your development API keys (e.g., Stripe test keys), mail server settings for development, and any other settings specific to your local development environment.
    *   Settings in `config.dev.php` will recursively merge with and override those from `config.php`

*   **`config.prod.php`**:
    *   This file is for **production-specific settings**.
    *   Similar to `config.dev.php`, you will need to **create and populate this file** for your production deployment.
    *   It must contain your live API keys, production mail server settings, etc.
    *   Its settings will recursively merge with and override those from `config.php`

### 3. Run the Development Server

This website is built with PHP and can be served locally using PHP's built-in web server.

```bash
php -S localhost:8000 -t public
```

You can then access the website in your browser at `http://localhost:8000`.

## 🎨 Technologies & Assets Used

This website utilizes several great open-source technologies and assets:

*   **[AltoRouter](https://github.com/dannyvankooten/AltoRouter)**: A lightweight and fast PHP routing library for handling URL requests.
*   **[HighlightJS](https://highlightjs.org/)**: An awesome Javascript syntax highlighter.
*   **[PHPMailer](https://github.com/PHPMailer/PHPMailer)**: The classic email sending library for PHP
*   **[Stripe](https://github.com/stripe/stripe-php)**: PHP library for the Stripe API.

### Fonts
We make use of the following beautiful and functional fonts to enhance readability and aesthetics:
*   **[Fira Code](https://github.com/tonsky/FiraCode)**
*   **[Inter](https://fonts.google.com/specimen/Inter)**: A variable font family carefully crafted & designed for computer screens.

### Support
If you want to support me, please checkout the options on my [website](https://bullseye2d.org/#licensing)
