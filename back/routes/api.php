<?php

use App\Http\Controllers\API\EmployeeController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::controller(EmployeeController::class)->group(function () {
    Route::get('/employees', 'index');
    Route::post('/add-employee', 'store');
    Route::get('/edit-employee/{id}', 'edit');
    Route::put('/update-employee/{employee}', 'update');
    Route::delete('/delete-employee/{employee}', 'destroy');
});

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});
