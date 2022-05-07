
[<img src="https://github-ads.s3.eu-central-1.amazonaws.com/support-ukraine.svg?t=1" />](https://supportukrainenow.org)

# Laravel Core UI

[![GitHub Tests Action Status](https://img.shields.io/github/workflow/status/lambdadigamma/laravel-core-ui/run-tests?label=tests)](https://github.com/lambdadigamma/laravel-core-ui/actions?query=workflow%3Arun-tests+branch%3Amain)
[![GitHub Code Style Action Status](https://img.shields.io/github/workflow/status/lambdadigamma/laravel-core-ui/Check%20&%20fix%20styling?label=code%20style)](https://github.com/lambdadigamma/laravel-core-ui/actions?query=workflow%3A"Check+%26+fix+styling"+branch%3Amain)

My personal shared user interfaces

## Installation

You can install the package via composer:

```bash
composer require inventas/laravel-core-ui
```

You can publish and run the migrations with:

```bash
php artisan vendor:publish --tag="laravel-core-ui-migrations"
php artisan migrate
```

You can publish the config file with:

```bash
php artisan vendor:publish --tag="laravel-core-ui-config"
```

This is the contents of the published config file:

```php
return [
];
```

Optionally, you can publish the views using

```bash
php artisan vendor:publish --tag="laravel-core-ui-views"
```

## Usage

## Changelog

Please see [CHANGELOG](CHANGELOG.md) for more information on what has changed recently.

## Contributing

Please see [CONTRIBUTING](https://github.com/spatie/.github/blob/main/CONTRIBUTING.md) for details.

## Security Vulnerabilities

Please review [our security policy](../../security/policy) on how to report security vulnerabilities.

## Credits

- [Lennart Fischer](https://github.com/LambdaDigamma)
- [All Contributors](../../contributors)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
