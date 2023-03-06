<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\Controller;
use App\Models\Patient;
use App\Models\User;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class PatientController extends Controller
{
    private Builder $model;

    public function __construct()
    {
        $this->model = User::query()
            ->join('patients', 'patients.user_id', '=', 'users.id');
    }

    /**
     * @lrd:start
     * {Для работы с SEND необходимо добавить api/ в начало заапроса!}
     *
     * Возвращает всех пациентов все поля таблицы patients и поля из связаной таблицы user
     * ['data' => $patients, 'status' => 200]
     * @lrd:end
     *
     * @LRDresponses responses 200
     */
    public function index(): JsonResponse
    {
        $patients = $this->model->get();

        return response()->json(['data' => $patients, 'status' => 200]);
    }

    /**
     * @LRDparam email required|string
     * @LRDparam password string|nullable
     * @LRDparam name string|nullable
     * @LRDparam surname string|nullable
     * @LRDparam patronymic string|nullable
     *
     * @LRDresponses responses 201,422
     *
     * @lrd:start
     * {Для работы с SEND необходимо добавить api/ в начало заапроса!}
     *
     * Регистрирует и авторизует user, в db сохраняет:
     * users: 'email', 'password',
     * patients: 'name', 'surname', 'patronymic',
     *
     * Возвращает: { "message": "Пациент успашно добавлен", "id": зарегестрированого юзера, status: 201 }
     *
     * Возможные ошибки:
     * -Ошибка валидации : 422, возможный ответ:("Значение поля email должно быть действительным электронным адресом.")
     *
     * -Сбой : ['message' => 'Произошла ошибка при регистрации или авторизации пользователя','status' => 422]
     * @lrd:end
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function register(
        Request $request,
        RegisteredUserController $registeredUser
    ): JsonResponse
    {
        try {
            $registeredUser->store($request);
        } catch (ValidationException $exception) {
            return response()->json($exception->getMessage(), 422);
        }

        if (Auth::check()) {
            $user = Auth::user();
            $user->is_patient = '1';
            $user->save();

            $patient = Patient::create($request->all());
            $user->patient()->save($patient);

            return response()->json([
                'message' => 'Пациент успашно добавлен',
                'id' => $user->id,
                'status' => 201], 201);
        }
        return response()->json([
            'message' => 'Произошла ошибка при регистрации или авторизации пользователя',
            'status' => 422], 422);
    }

     /**
      * @LRDparam email required|string
      * @LRDparam phone string|nullable
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
      * Создает запись в таблице users и таблице patients
      *
      * Возвращает: 'message' => 'Успешно сохранено', 'status' => 201.
      * @lrd:end
      */
    public function store(Request $request): JsonResponse
    {
        $user = User::create([
            'email' => $request->email,
            'phone' => $request->phone,
            'is_patient' => '1',
        ]);

        $patient = Patient::create($request->all());

        $user->patient()->save($patient);

        return response()->json( [
            'message' => 'Успешно сохранено',
            'status' => 201], 201 );
    }

    /**
     * @lrd:start
     * {Для работы с SEND необходимо добавить api/ в начало заапроса!}
     *
     * Принимает id связанного с пациентом зарегистрированного(залогиненного) юзера
     *
     * Возвращает пациента все поля таблицы patients и поля из связаной таблицы users
     * ['data' => $patient, 'status' => 200]
     * @lrd:end
     *
     * @LRDresponses responses 200
     */
    public function show($id): JsonResponse
    {
//        if (Auth::check()) {
//            $id = Auth::id();

        $patient = $this->model->where('user_id', '=', $id)->first();

        return response()->json(['data' => $patient, 'status' => 200]);

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
     * Принимает {id} - id пациента
     *
     * Возвращает: данные пациента и связаного юзера(для редактированаия):
     * patients: {id,name,surname,patronymic,email,phone,birthday}
     * @lrd:end
     */
    public function edit($id): JsonResponse
    {
        $patient = $this->model->get()->find($id);

        return response()->json(['data' => $patient, 'status' => 200]);
    }

    /**
     * @LRDresponses responses 200
     *
     * @lrd:start
     * {Для работы с SEND необходимо добавить api/ в начало заапроса!}
     *
     * Принимает {id} - id пациента и измененные/неизмененные данные
     * data :
     * {'email'-string, 'phone'-string, 'name'-string, 'surname'-string,
     * 'patronymic'-string, 'birthday'-date}
     *
     * Обновляет данные в таблице patients и users:
     * {name,surname,patronymic,email,phone,birthday}
     * @lrd:end
     */
    public function update(Request $request, Patient $patient): JsonResponse
    {
        $patient->update($request->all());
        $patient->user()->update($request->all());

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
     * Принимает {id} - id пациента
     *
     * Удаляет данные в таблице patients и users:
     * {name,surname,patronymic,email,phone,birthday}
     * @lrd:end
     */
    public function destroy(Patient $patient): JsonResponse
    {
        $patient->delete();
        $patient->user()->delete();

        return response()->json([
            'message' => 'Пациент удален',
            'status' => 204], 204);
    }


//    public function register(Request $request, RegistersActionContract $registerUserAction) {
//        $request->validate([
//            'name' => ['required', 'string', 'max:255'],
//            'email' => ['required', 'string', 'email', 'max:255', 'unique:' . User::class],
//            'password' => ['required', 'confirmed', Rules\Password::defaults()],
//        ]);
//        $data = $request->all();
//        $user = $registerUserAction($data);
//        $patient = new Patient();
//         $patient->name = $request->name;
//        $patient->user_id = $user->id;
//        $patient->save();
//        return response()->json($patient);
//    }

}
