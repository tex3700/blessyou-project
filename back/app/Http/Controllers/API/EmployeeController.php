<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Employee;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Builder;

class EmployeeController extends Controller
{

    private Builder $model;

    public function __construct()
    {
        $this->model = User::query()
            ->join('employees', 'employees.user_id', '=', 'users.id');
    }

    /**
     * @lrd:start
     * {Для работы с SEND необходимо добавить api/ в начало заапроса!}
     *
     * Возвращает всех сотрудников все поля таблицы employees и поля из связаной таблицы user
     * ['data' => $employees, 'status' => 200]
     * @lrd:end
     *
     * @LRDresponses responses 200
     */
    public function index(): JsonResponse
    {
        $employees = $this->model->get();

        return response()->json(['data' => $employees, 'status' => 200]);
    }

    /**
     * @LRDparam email required|string
     * @LRDparam phone string|nullable
     * @LRDparam name string|nullable
     * @LRDparam surname string|nullable
     * @LRDparam patronymic string|nullable
     * @LRDparam position string|nullable
     * @LRDparam description string|nullable
     *
     * @LRDresponses responses 201
     *
     * @lrd:start
     * {Для работы с SEND необходимо добавить api/ в начало заапроса!}
     *
     * Создает запись в таблице users и таблице employees
     *
     * Возвращает: 'message' => 'Успешно сохранено', 'status' => 201.
     * @lrd:end
     */
    public function store(Request $request): JsonResponse
    {
        $user = User::create([
            'email' => $request->email,
            'phone' => $request->phone,
            'is_employee' => '1',
        ]);

        $employee = Employee::create($request->all());

        $user->employee()->save($employee);

        return response()->json( [
            'message' => 'Успешно сохранено',
            'status' => 201], 201 );
    }

    /**
     * @lrd:start
     * {Для работы с SEND необходимо добавить api/ в начало заапроса!}
     *
     * Принимает id связанного с сотрудником зарегистрированного(залогиненного) юзера
     *
     * Возвращает сотрудника все поля таблицы employees и поля из связаной таблицы users
     * ['data' => $employee, 'status' => 200]
     * @lrd:end
     *
     * @LRDresponses responses 200
     */
    public function show($id): JsonResponse
    {
        $employee = $this->model->where('user_id', '=', $id)->first();

        return response()->json(['data' => $employee, 'status' => 200]);
    }

    /**
     * @LRDresponses responses 200
     *
     * @lrd:start
     * {Для работы с SEND необходимо добавить api/ в начало заапроса!}
     *
     * Принимает {id} - id сотрудника
     *
     * Возвращает: данные сотрудника и связаного юзера(для редактированаия):
     * patients: {id,name,surname,patronymic,email,phone,position, description}
     * @lrd:end
     */
    public function edit($id): JsonResponse
    {
        $employee = $this->model->get()->find($id);

        return response()->json(['data' => $employee, 'status' => 200]);
    }

    /**
     * @LRDresponses responses 200
     *
     * @lrd:start
     * {Для работы с SEND необходимо добавить api/ в начало заапроса!}
     *
     * Принимает {id} - id сотрудника и измененные/неизмененные данные
     * data :
     * {'email'-string, 'phone'-string, 'name'-string, 'surname'-string,
     * 'patronymic'-string, 'position'-string, 'description'-string}
     *
     * Обновляет данные в таблице employees и users:
     * {name,surname,patronymic,email,phone,position,description}
     * @lrd:end
     */
    public function update(Request $request, Employee $employee): JsonResponse
    {
        $employee->update($request->all());
        $employee->user()->update($request->all());

        return response()->json(['message' => 'Успешно обновлено', 'status' => 200]);
    }

    /**
     * @LRDresponses responses 204
     *
     * @lrd:start
     * {Для работы с SEND необходимо добавить api/ в начало заапроса!}
     *
     * Принимает {id} - id сотрудника
     *
     * Удаляет данные в таблице employees и users:
     * {name,surname,patronymic,email,phone,position,description}
     * @lrd:end
     */
    public function destroy(Employee $employee): JsonResponse
    {
        $employee->delete();
        $employee->user()->delete();

        return response()->json([
            'message' => 'Сотрудник удален',
            'status' => 204], 204);
    }
}
