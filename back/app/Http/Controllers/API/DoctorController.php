<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Doctor;
use App\Models\DoctorSpeciality;
use App\Models\Speciality;
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
        $doctor = new Doctor($request->all());
        $doctor->save();
        return response()->json($doctor);
    }

    public function update(Request $request) {

        $doctor = Doctor::find($request->id);
        $arrayToUpdate = $request->all();
        unset($arrayToUpdate["id"]);
        foreach ($arrayToUpdate as $key => $fields) {
            $doctor->$key = $fields;
        }
        $doctor->save();
        return response()->json($doctor);
    }

     public function getDoctorSpecialities(Request $request): JsonResponse {
        if ($request->has('id')) {
            $specialities = Doctor::find($request->id)->speciality;
            return response()->json($specialities);
        }
        return "id not found";
    }
    public function addDoctorToSpecialities(Request $request) {
        if($request->has('doctor_id') && $request->has('speciality_id')){
             $doctor = Doctor::find($request->doctor_id);
             $speciality = Speciality::find($request->speciality_id);
             $doctor->speciality()->attach($speciality->id);
             return true;
        }
         return false;
    }
        public function deleteDoctorToSpecialities(Request $request) {
            
        if($request->has('doctor_id') && $request->has('speciality_id')){
             $doctor = Doctor::find($request->doctor_id);
             $speciality = Speciality::find($request->speciality_id);
             $doctor->speciality()->attach($speciality->id);
             return true;
        }
        return false;
    }

}
