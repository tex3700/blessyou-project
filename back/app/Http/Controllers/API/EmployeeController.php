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

        return response()->json(['data' => $employees, 'status' => 200]);
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

        return response()->json( [
            'message' => 'Успешно сохранено',
            'status' => 201], 201 );
    }

    public function show($id): JsonResponse
    {
        $employee = $this->model->where('user_id', '=', $id)->first();

        return response()->json(['data' => $employee, 'status' => 200]);
    }

    public function edit($id): JsonResponse
    {
        $employee = $this->model->get()->find($id);

        return response()->json(['data' => $employee, 'status' => 200]);
    }

    public function update(Request $request, Employee $employee): JsonResponse
    {
        $employee->update($request->all());
        $employee->user()->update($request->all());

        return response()->json(['message' => 'Успешно обновлено', 'status' => 200]);
    }

    public function destroy(Employee $employee): JsonResponse
    {
        $employee->delete();
        $employee->user()->delete();

        return response()->json([
            'message' => 'Сотрудник удален',
            'status' => 204], 204);
    }
}
