<?php

namespace App\Http\Controllers\API;

use App\Actions\GetNextRecordsDataAction;
use App\Http\Controllers\Controller;
use App\Models\Department;
use App\Models\Doctor;
use App\Models\DoctorDepartment;
use App\Models\DoctorSpeciality;
use App\Models\Schedule;
use App\Models\Speciality;
use App\Models\User;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;

class DoctorController extends Controller {

    private Builder $model;

    public function __construct()
    {
        $this->model = User::query()
            ->join('doctors', 'doctors.user_id', '=', 'users.id');
    }

    public function index(): JsonResponse
    {
        $doctors = $this->model->get();

        return response()->json(['data' => $doctors, 'status' => 200]);
    }

    public function show($id): JsonResponse
    {
        //        if (Auth::check()) {
//            $id = Auth::id();

        $doctor = $this->model->where('user_id', '=', $id)->first();

        return response()->json(['data' => $doctor, 'status' => 200]);

//        }
//        return response()->json([
//            'message' => 'Пользователь не авторизоваан',
//            'status' => 401], 401);
    }

    public function store(Request $request): JsonResponse
    {
        $user = User::create([
            'email' => $request->email,
            'phone' => $request->phone,
            'is_doctor' => '1',
        ]);

        $doctor = Doctor::create($request->all());

        $user->doctor()->save($doctor);

        return response()->json( [
            'message' => 'Успешно сохранено',
            'status' => 201], 201 );
    }

    public function edit($id): JsonResponse
    {
        $doctor = $this->model->get()->find($id);

        return response()->json(['data' => $doctor, 'status' => 200]);
    }

    public function update(Request $request, Doctor $doctor): JsonResponse
    {
        $doctor->update($request->all());
        $doctor->user()->update($request->all());

        return response()->json([
            'message' => 'Данные успешно обновлены',
            'status' => 200]);
    }

    public function destroy(Doctor $doctor): JsonResponse
    {
        $doctor->delete();
        $doctor->user()->delete();

        return response()->json([
            'message' => 'Сотрудник удален',
            'status' => 204], 204);
    }

    public function getDoctorSpecialities(Request $request): JsonResponse
    {
        if ($request->has('id')) {
            $specialities = Doctor::find($request->id)->speciality;
            return response()->json($specialities);
        }
        return response()->json("id not found");
    }

    public function getDoctorDepartments(Request $request): JsonResponse
    {
        if ($request->has('id')) {
            $department = Doctor::find($request->id)->department;
            return response()->json($department);
        }
        return response()->json("id not found");
    }

    public function addDoctorToSpecialities(Request $request): bool
    {
        if($request->has('doctor_id') && $request->has('speciality_id')){
            $doctor = Doctor::find($request->doctor_id);
            $speciality = Speciality::find($request->speciality_id);
            $doctor->speciality()->attach($speciality->id);
            return true;
        }
        return false;
    }
    public function deleteDoctorToSpecialities(Request $request): bool
    {

        if($request->has('doctor_id') && $request->has('speciality_id')){
            $doctor = Doctor::find($request->doctor_id);
            $speciality = Speciality::find($request->speciality_id);
            $doctor->speciality()->detach($speciality->id);
            return true;
        }
        return false;
    }

    public function doctorsNextRecords(): JsonResponse
    {
        $doctorsAvailable = array_unique(Schedule::query()->pluck('doctor_id')->all());
        sort($doctorsAvailable);
        $getNextRecordsData = new GetNextRecordsDataAction;

        $doctorsRecordsNext = array_map( fn($value) => $getNextRecordsData($value), array_unique($doctorsAvailable));

        return response()->json($doctorsRecordsNext);
    }

}
