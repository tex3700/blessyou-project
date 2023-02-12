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

    public function index(): JsonResponse
    {
        $employees = $this->model->get();

        return response()->json($employees);
    }

    public function store(Request $request): JsonResponse
    {
        $user = User::create([
            'email' => $request->email,
            'phone' => $request->phone,
            'is_employee' => '1',
        ]);

        $employee = Employee::create($request->all());

        $user->employee()->save($employee);

        return response()->json( 'Успешно сохранено', 201 );
    }

    public function show($id): JsonResponse //Необходимо получить id user
    {
        $employee = $this->model->where('user_id', '=', $id)->first();

        return response()->json($employee);
    }

    public function edit($id): JsonResponse // Необходимом получить id employee
    {
        $employee = $this->model->get()->find($id);

        return response()->json($employee);
    }

    public function update(Request $request, Employee $employee): JsonResponse
    {
        $employee->update($request->all());
        $employee->user()->update($request->all());

        return response()->json('Успешно обновлено');
    }

    public function destroy(Employee $employee): JsonResponse
    {
        $employee->delete();
        $employee->user()->delete();

        return response()->json('Сотрудник удален', 204);
    }
}