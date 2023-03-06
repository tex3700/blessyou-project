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

    /**
     * @lrd:start
     * {Для работы с SEND необходимо добавить api/ в начало заапроса!}
     *
     * Возвращает всех докторов все поля таблицы doctors и поля из связаной таблицы user
     * ['data' => $doctors, 'status' => 200]
     * @lrd:end
     *
     * @LRDresponses responses 200
     */
    public function index(): JsonResponse
    {
        $doctors = $this->model->get();

        return response()->json(['data' => $doctors, 'status' => 200]);
    }

    /**
     * @lrd:start
     * {Для работы с SEND необходимо добавить api/ в начало заапроса!}
     *
     * Принимает id связанного с доктором юзера
     *
     * Возвращает доктора все поля таблицы doctors и поля из связаной таблицы users
     * ['data' => $doctor, 'status' => 200]
     * @lrd:end
     *
     * @LRDresponses responses 200
     */
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

    /**
     * @LRDparam email required|string
     * @LRDparam phone string|nullable
     * @LRDparam name string|nullable
     * @LRDparam surname string|nullable
     * @LRDparam patronymic string|nullable
     * @LRDparam avatar_path string|nullable
     * @LRDparam photo_path string|nullable
     * @LRDresponses responses 201
     *
     * @lrd:start
     * {Для работы с SEND необходимо добавить api/ в начало заапроса!}
     *
     * Создает запись в таблице users и таблице doctors
     *
     * Возвращает: 'message' => 'Успешно сохранено', 'status' => 201.
     * @lrd:end
     */
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

    /**
     * @LRDresponses responses 200
     *
     * @lrd:start
     * {Для работы с SEND необходимо добавить api/ в начало заапроса!}
     *
     * Принимает {id} (на фронте ${id}) - id доктора
     *
     * Возвращает: данные доктора и связаного юзера(для редактированаия):
     * doctors: {id,name,surname,patronymic,email,phone,avatar_path,photo_path}
     * @lrd:end
     */
    public function edit($id): JsonResponse
    {
        $doctor = $this->model->get()->find($id);

        return response()->json(['data' => $doctor, 'status' => 200]);
    }

    /**
     * @LRDresponses responses 200
     *
     * @lrd:start
     * {Для работы с SEND необходимо добавить api/ в начало заапроса!}
     *
     * Принимает {id} - id доктора и измененные/неизмененные данные
     * data :
     * {'email'-string, 'phone'-string, 'name'-string, 'surname'-string, 'patronymic'-string,
     * 'avatar_path'-string, 'photo_path'-string,}
     *
     * Обновляет данные в таблице doctors и users:
     * {name,surname,patronymic,email,phone,avatar_path,photo_path}
     * @lrd:end
     */
    public function update(Request $request, Doctor $doctor): JsonResponse
    {
        $doctor->update($request->all());
        $doctor->user()->update($request->all());

        return response()->json([
            'message' => 'Данные успешно обновлены',
            'status' => 200]);
    }

    /**
     * @LRDresponses responses 204
     *
     * @lrd:start
     * {Для работы с SEND необходимо добавить api/ в начало заапроса!}
     *
     * Принимает {id} - id доктора
     *
     * Удаляет данные в таблице doctors и users:
     * {name,surname,patronymic,email,phone,avatar_path,photo_path}
     * @lrd:end
     */
    public function destroy(Doctor $doctor): JsonResponse
    {
        $doctor->delete();
        $doctor->user()->delete();

        return response()->json([
            'message' => 'Сотрудник удален',
            'status' => 204], 204);
    }

    /**
     * @lrd:start
     * {Для работы с SEND необходимо добавить api/ в начало заапроса!}
     * @lrd:end
     */
    public function getDoctorSpecialities(Request $request): JsonResponse
    {
        if ($request->has('id')) {
            $specialities = Doctor::find($request->id)->speciality;
            return response()->json($specialities);
        }
        return response()->json("id not found");
    }

    /**
     * @lrd:start
     * {Для работы с SEND необходимо добавить api/ в начало заапроса!}
     * @lrd:end
     */
    public function getDoctorDepartments(Request $request): JsonResponse
    {
        if ($request->has('id')) {
            $department = Doctor::find($request->id)->department;
            return response()->json($department);
        }
        return response()->json("id not found");
    }

    /**
     * @lrd:start
     * {Для работы с SEND необходимо добавить api/ в начало заапроса!}
     * @lrd:end
     */
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
    /**
     * @lrd:start
     * {Для работы с SEND необходимо добавить api/ в начало заапроса!}
     * @lrd:end
     */
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

    /**
     * @LRDresponses responses 200
     *
     * @lrd:start
     * {Для работы с SEND необходимо добавить api/ в начало заапроса!}
     *
     * Возвращает:  id доктора, название отделения доктора, ближашую доступную дату записи на прием
     *  [{id,department,date}]
     * @lrd:end
     */
    public function doctorsNextRecords(): JsonResponse
    {
        $doctorsAvailable = array_unique(Schedule::query()->pluck('doctor_id')->all());
        sort($doctorsAvailable);
        $getNextRecordsData = new GetNextRecordsDataAction;

        $doctorsRecordsNext = array_map( fn($value) => $getNextRecordsData($value), array_unique($doctorsAvailable));

        return response()->json($doctorsRecordsNext);
    }

}
