<?php


use App\Http\Controllers\API\EmployeeController;
use App\Http\Controllers\API\DoctorController;
use App\Http\Controllers\API\SpecialityController;
use App\Http\Controllers\API\DepartmentController;
use App\Http\Controllers\API\MailController;
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

<<<<<<<<< Temporary merge branch 1
//Route::middleware("auth:api")->get('/test', function (){
//    return "some";
//});
//Route::get('/user', function (Request $request){
//    return "123";
//})->middleware("auth:sanctum");
//Route::post('/put', function (Request $request) {
//    $fileContents = $request->avatar;
//    Storage::put('avatars/1', $fileContents);
//    return csrf_token(); 
//
//});
Route::controller(MailController::class)->group(function(){
    Route::post('/mail/send', 'send');
});
=========
Route::controller(EmployeeController::class)->group(function () {
    Route::get('/employees', 'index');
    Route::get('/employee-private/{id}', 'show')->name('employee.private');
    Route::post('/add-employee', 'store');
    Route::get('/edit-employee/{id}', 'edit');
    Route::put('/update-employee/{employee}', 'update');
    Route::delete('/delete-employee/{employee}', 'destroy');
});

>>>>>>>>> Temporary merge branch 2
Route::controller(DoctorController::class)->group(function () {
    Route::get('/doctors', 'index');
    Route::post('/doctors/add', 'add')->middleware('validated:Doctor');
     Route::post('/doctors/update', 'update')->middleware('validated:Doctor');
    Route::post('/doctors/get/specialities', 'getDoctorSpecialities');
     Route::post('/doctors/get/departments', 'getDoctorDepartments');
    Route::post('/doctors/add/speciality', 'addDoctorToSpecialities');
    Route::delete('/doctors/delete/speciality', 'deleteDoctorToSpecialities');
});

Route::controller(SpecialityController::class)->group(function () {
    Route::get('/specialities', 'index');
    Route::post('/specialities/add', 'store');
    Route::post('/specialities/update', 'update');
    Route::post('/specialities/show', 'show');
});

Route::controller(DepartmentController::class)->group(function () {
    Route::get('/departments', 'index');
    Route::post('/departments/add', 'add')->middleware('validated:Department');
    Route::post('/departments/update', 'update')->middleware('validated:Department');
    Route::post('/departments/get/doctors', 'getDoctorDepartment');
    Route::post('/departments/add/doctors', 'addDoctorToDepartment');
     Route::delete('/departments/delete/doctors', 'deleteDoctorToDepartment');
});

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});
