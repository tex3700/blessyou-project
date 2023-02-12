<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Department;
use App\Models\Doctor;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class DepartmentController extends Controller {

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index() {
        return response()->json(Department::all());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function add(Request $request) {
        $department = new Department($request->all());
        $department->save();
        return response()->json($department);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request) {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Department  $department
     * @return \Illuminate\Http\Response
     */
    public function show(Department $department) {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Department  $department
     * @return \Illuminate\Http\Response
     */
    public function edit(Department $department) {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Department  $department
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request) {
        $department = Department::find($request->id);
        $arrayToUpdate = $request->all();
        unset($arrayToUpdate["id"]);
        foreach ($arrayToUpdate as $key => $fields) {
            $department->$key = $fields;
        }
        $department->save();
        return response()->json($department);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Department  $department
     * @return \Illuminate\Http\Response
     */
    public function destroy(Department $department) {
        //
    }

    public function getDoctorDepartment(Request $request): JsonResponse {
        if ($request->has('id')) {
            $doctors = Department::find($request->id)->doctors;
            return response()->json($doctors);
        }
        return "id not found";
    }
    public function addDoctorToDepartment(Request $request) {
        if($request->has('doctor_id') && $request->has('department_id')){
             $doctor = Doctor::find($request->doctor_id);
             $department = Department::find($request->department_id);
             $department->doctors()->attach($doctor->id);
             return true;
        }
         return false;
    }
        public function deleteDoctorToDepartment(Request $request) {
            
        if($request->has('doctor_id') && $request->has('department_id')){
             $doctor = Doctor::find($request->doctor_id);
             $department = Department::find($request->department_id);
             $department->doctors()->detach($doctor->id);
             return true;
        }
        return false;
    }

}
