<?php

use App\Http\Controllers\API\DoctorController;
use App\Http\Controllers\API\SpecialityController;
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

Route::controller(DoctorController::class)->group(function () {
    Route::get('/doctors', 'index');
    Route::post('/doctors/update/name', 'changeName');
    Route::post('/doctors/add', 'add')->middleware('validated:Doctor');
     Route::post('/doctors/update', 'update')->middleware('validated:Doctor');
    Route::post('/doctors/get/specialities', 'getDoctorSpecialities');
    Route::post('/doctors/add/speciality', 'addDoctorToSpecialities');
    Route::delete('/doctors/delete/speciality', 'deleteDoctorToSpecialities');
    
});
Route::controller(SpecialityController::class)->group(function () {
    Route::get('/specialities', 'index');
    Route::post('/specialities/add', 'store');
    Route::post('/specialities/update', 'update');
    Route::post('/specialities/show', 'show');
});

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});
