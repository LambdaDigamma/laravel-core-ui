<?php

namespace Inventas\LaravelCoreUi\Facades;

use Illuminate\Support\Facades\Facade;

/**
 * @see \Inventas\LaravelCoreUi\LaravelCoreUi
 */
class LaravelCoreUi extends Facade
{
    protected static function getFacadeAccessor()
    {
        return 'laravel-core-ui';
    }
}
