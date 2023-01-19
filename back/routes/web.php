<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\User;

/*
  |--------------------------------------------------------------------------
  | Web Routes
  |--------------------------------------------------------------------------
  |
  | Here is where you can register web routes for your application. These
  | routes are loaded by the RouteServiceProvider within a group which
  | contains the "web" middleware group. Now create something great!
  |
 */

Route::get('/', function () {
    return "Test 4";
});
Route::get('/greeting', function () {
    return 'Hello World';
});
Route::prefix('/user')->group(function () {
    Route::get('/', [User\UserController::class, 'index']);
    Route::get('/get/{user}', [User\UserController::class, 'getUser']);
    Route::get('/template/{user}', [User\UserController::class, 'template']);
});
require __DIR__ . '/auth.php';
