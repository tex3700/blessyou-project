<?php

namespace App\Providers;

use Illuminate\Support\Facades\Schema;
use Illuminate\Support\ServiceProvider;
use App\Actions\RegisterUserAction;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */

    public function register(): void
    {
        $this->app->bind('App\Contracts\RegistersActionContract', function ($app) {
            return new RegisterUserAction();
        });
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot(): void
    {
        //Schema::defaultStringLength(255);
    }
}
