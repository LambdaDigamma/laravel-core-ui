<?php

namespace Inventas\LaravelCoreUi;

use Spatie\LaravelPackageTools\Package;
use Spatie\LaravelPackageTools\PackageServiceProvider;
use Inventas\LaravelCoreUi\Commands\LaravelCoreUiCommand;

class LaravelCoreUiServiceProvider extends PackageServiceProvider
{
    public function configurePackage(Package $package): void
    {
        /*
         * This class is a Package Service Provider
         *
         * More info: https://github.com/spatie/laravel-package-tools
         */
        $package
            ->name('laravel-core-ui')
            ->hasConfigFile()
            ->hasViews()
            ->hasMigration('create_laravel-core-ui_table')
            ->hasCommand(LaravelCoreUiCommand::class);
    }
}
