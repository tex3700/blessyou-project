<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Speciality;
use Illuminate\Http\Request;

class SpecialityController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function index() {
        return response()->json(Speciality::all());
    }

    public function store(Request $request) {
        $speciality = new Speciality;
        if ($request->has('name')) {
            $speciality->name = $request->name;
            $speciality->save();
        }
    }

    public function show(Request $request) {
        if ($request->has('id')) {
           $speciality = Speciality::find($request->id);
           return response()->json($speciality);
        }
        return false;
    }

    public function update(Request $request)
    { 
        if ($request->has('name','id')) {
            $speciality = Speciality::find($request->id);
            $speciality->name = $request->name;
            $speciality->save();
            return $speciality;
        }
         return false;
    }

    public function destroy(Request $request)
    {}

    public function import()
    { /** Не имеет экземпляра модели */ }

    public function export(Post $post)
    { /** Имеет экземпляр модели */ }
}
