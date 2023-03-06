<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Patient;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PatientRelativeController extends Controller
{
    /**
     * @LRDparam name string|nullable
     * @LRDparam surname string|nullable
     * @LRDparam patronymic string|nullable
     * @LRDparam birthday string|nullable
     *
     * @LRDresponses responses 201
     *
     * @lrd:start
     * {Для работы с SEND необходимо добавить api/ в начало заапроса!}
     *
     * Принимает id юзера (именно юзера!) связанного с пациентом из личного кабинета которого идет запрос
     *
     * Регистрирует и связывает с user авторизированного пациента,
     * в db сохраняет: patients: 'name': 'string', 'surname': 'string', 'patronimyc': 'string',
     * 'birthday': 'date', 'user_id': id user авторизированного пациента
     *
     * Возвращает: 'message' => 'Пациент успашно добавлен',
     * "id": int //(юзера авторизированного пациента),
     * 'status' => 201.
     * @lrd:end
     */
    public function store(Request $request, User $user): JsonResponse
    {
//        if (Auth::check()) {
//            $user = Auth::user();

        $patient = Patient::create($request->all());
        $user->patient()->save($patient);

        return response()->json([
            'message' => 'Пациент успашно добавлен',
            'id' => $user->id,
            'status' => 201], 201);
//        }
//        return response()->json([
//            'message' => 'Пользователь не авторизоваан',
//            'status' => 401], 401);
    }

    /**
     * @lrd:start
     * {Для работы с SEND необходимо добавить api/ в начало заапроса!}
     *
     * Принимает id юзера (именно юзера!) связанного с пациентом из личного кабинета которого идет запрос
     *
     * Возвращает: всех пациентов связаных с авторизованным в данный момент пациентом:
     * patients: {id,name,surname,patronymic,birthday}
     * ['data' => $patientsAnother, 'status' => 200]
     *
     * Если нет данных о связанных пациентах:
     * ['message' => "Не найдено связанных записей", 'status' => 204]
     * @lrd:end
     *
     * @LRDresponses responses 200,204
     */
    public function show(User $user): JsonResponse
    {
//        if (Auth::check()) {
//            $user = Auth::user();

        $patients = $user->patient()->get();

        $patientsAnother = $patients->except($patients->first()->id);

        return !empty($patientsAnother)
            ? response()->json(['data' => $patientsAnother, 'status' => 200])
            : response()->json(['message' => "Не найдено связанных записей", 'status' => 204], 204);
//        }
//        return response()->json([
//            'message' => 'Пользователь не авторизоваан',
//            'status' => 401], 401);
    }

    /**
     * @LRDresponses responses 200
     *
     * @lrd:start
     * {Для работы с SEND необходимо добавить api/ в начало заапроса!}
     *
     * Принимает {id} - id связанного пациента
     *
     * Возвращает: данные связанного пациента: patients: {id,name,surname,patronymic,birthday}(для редактированаия)
     * @lrd:end
     */
    public function edit(Patient $patient): JsonResponse
    {
        return response()->json(['data' => $patient, 'status' => 200]);
    }

    /**
     * @LRDresponses responses 200
     *
     * @lrd:start
     * {Для работы с SEND необходимо добавить api/ в начало заапроса!}
     *
     * Принимает {id} - id связанного пациента и измененные/неизмененные данные
     * data : { 'name': 'string', 'surname': 'string', 'patronymic': 'string', 'birthday': 'date', }
     *
     * Обновляет данные в таблице patients: {name,surname,patronymic,birthday}
     * @lrd:end
     */
    public function update(Request $request, Patient $patient): JsonResponse
    {
        $patient->update($request->all());

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
     * Принимает {id} - id связанного пациента
     *
     * Удаляет данные в таблице patients:
     * {name,surname,patronymic,email,phone,birthday}
     * @lrd:end
     */
    public function destroy(Patient $patient): JsonResponse
    {
        $patient->delete();

        return response()->json([
            'message' => 'Пациент удален',
            'status' => 204], 204);
    }
}
