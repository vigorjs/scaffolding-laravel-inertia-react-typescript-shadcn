<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //share data role
        Inertia::share('role', function () {
            // Periksa apakah pengguna telah diautentikasi
            if (Auth::check()) {
                // Ambil dan kembalikan data role pengguna jika tersedia
                return Auth::user()->getRoleNames()->first();
            }
            return null; // Mengembalikan null jika pengguna tidak diautentikasi
        });
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
