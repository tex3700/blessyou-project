<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Employee;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class EmployeeController extends Controller
{
    public function index(): JsonResponse
    {
        $employees = Employee::all();

        return response()->json($employees);
    }

    public function store(Request $request): JsonResponse
    {
        $employee = Employee::create($request->all());

        return response()->json( $employee, 201);
    }

    public function edit($id): JsonResponse
    {
        $employee = Employee::all()->find($id);

        return response()->json($employee);
    }

    public function update(Request $request, Employee $employee): JsonResponse
    {
        $employee->update($request->all());

        return response()->json($employee);
    }

    public function destroy(Employee $employee): JsonResponse
    {
        $employee->delete();
        return response()->json(null, 204);
    }
}
