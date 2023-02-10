<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Auth;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Validation\Rules;
use App\Models\User;
use App\Contracts\RegistersActionContract;
use App\Models\Patient;

class PatientController extends Controller {

    public function register(Request $request, RegistersActionContract $registerUserAction) {
        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:' . User::class],
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);
        $data = $request->all();
        $user = $registerUserAction($data);
        $patient = new Patient();
         $patient->name = $request->name;
        $patient->user_id = $user->id;
        $patient->save();
        return response()->json($patient);
    }

}
