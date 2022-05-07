<?php

namespace Inventas\LaravelCoreUi\Commands;

use Illuminate\Console\Command;

class LaravelCoreUiCommand extends Command
{
    public $signature = 'laravel-core-ui';

    public $description = 'My command';

    public function handle(): int
    {
        $this->comment('All done');

        return self::SUCCESS;
    }
}
