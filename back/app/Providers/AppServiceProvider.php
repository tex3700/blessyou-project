<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Actions\RegisterUserAction;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register() 
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
    public function boot()
    {
        //
    }
}
