<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Doctor;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;

class DoctorController extends Controller {

    public function index() {
        return response()->json(Doctor::all());
    }

    public function add(Request $request): JsonResponse {
        if ($request->expectsJson()) {
            $doctor = new Doctor;
            $doctor->name = $request->name;
            $doctor->surname = $request->surname;
            $doctor->save();
        }
    }
    public function changeName(Request $request): JsonResponse {
        if ($request->expectsJson()) {
            $input = $request->only('name','surname','id');
            $array = array_values($input);
            DB::update('update doctors set name = ? ,surname = ? where id = ?',$array);
        }
        return response()->json(Doctor::where('id',$input['id'])->first());
    }
     public function getDoctorSpecialities(Request $request): JsonResponse {
        if ($request->has('id')) {
            $specialities = Doctor::find($request->id)->speciality;
            return response()->json($specialities);
        }
        return "not found";
    }

}
