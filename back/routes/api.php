<?php

use App\Http\Controllers\API\{
    EmployeeController,
    DoctorController,
    PatientController,
    PatientRelativeController,
    SpecialityController,
    DepartmentController,
    ScheduleController,
    RecordController,
    MailController,
};

use App\Http\Controllers\Auth\LoginController;
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
Route::controller(RecordController::class)->group(function(){
   Route::post('/records/add', 'store');
    Route::post('/records/all/possible', 'getPossibleDate');
    Route::get('/records', 'index');
   // Route::get('/schedules/{id}', 'getShedulebyDoctor');
});

Route::controller(ScheduleController::class)->group(function(){
    Route::post('/schedule/add', 'store');
    Route::get('/schedules', 'index');
    Route::get('/schedules/{id}', 'getShedulebyDoctor');
});

Route::controller(MailController::class)->group(function(){
    Route::post('/mail/send', 'send');
});

Route::controller(EmployeeController::class)->group(function () {
    Route::get('/employees', 'index');
    Route::get('/employee-private/{id}', 'show')->name('employee.private');
    Route::post('/add-employee', 'store');
    Route::get('/edit-employee/{id}', 'edit');
    Route::put('/update-employee/{employee}', 'update');
    Route::delete('/delete-employee/{employee}', 'destroy');
});

Route::controller(DoctorController::class)->group(function () {
    Route::get('/doctors', 'index');
    Route::post('/doctors/add', 'add')->middleware('validated:Doctor');
     Route::post('/doctors/update', 'update')->middleware('validated:Doctor');
    Route::post('/doctors/get/specialities', 'getDoctorSpecialities');
     Route::post('/doctors/get/departments', 'getDoctorDepartments');
    Route::post('/doctors/add/speciality', 'addDoctorToSpecialities');
    Route::delete('/doctors/delete/speciality', 'deleteDoctorToSpecialities');
});

Route::controller(PatientController::class)->group(function () {
    Route::post('/patient-register', 'register')->name('patient.register');
    Route::get('patients', 'index');
    Route::get('/patient-private/{id}', 'show')->name('patient.private');
    Route::post('/add-patient', 'store');
    Route::get('/edit-patient/{id}', 'edit');
    Route::put('/update-patient/{patient}', 'update');
    Route::delete('/delete-patient/{patient}', 'destroy');
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

Route::controller(LoginController::class)->group(function () {
    Route::post('/patient-login', 'login')
        ->middleware('isPatient')->name('patient.login');
    Route::post('/staff-login', 'login')
        ->middleware('isStaff')->name('staff.login');
    Route::post('/logout', 'logout');
});

Route::controller(PatientRelativeController::class)->group(function () {
    Route::get('/patient-relatives', 'show')->name('patient.private');
    Route::post('/add-relative', 'store');
    Route::get('/edit-relative/{patient}', 'edit');
    Route::put('/update-relative/{patient}', 'update');
    Route::delete('/delete-relative/{patient}', 'destroy');
});

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});
