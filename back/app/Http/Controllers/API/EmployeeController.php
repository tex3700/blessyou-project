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
        $user = User::create($request->all());
        $employee = Employee::create($request->all());

        $user->employee()->save($employee);

        return response()->json( 'saved', 201 );
    }

    public function edit($id): JsonResponse
    {
        $employee = $this->model->get()->find($id);

        return response()->json($employee);
    }

    public function update(Request $request, Employee $employee): JsonResponse
    {
        $employee->update($request->all());
        $employee->user()->update($request->all());

        return response()->json('updated');
    }

    public function destroy(Employee $employee): JsonResponse
    {
        $employee->delete();
        $employee->user()->delete();

        return response()->json('deleted', 204);
    }
}
