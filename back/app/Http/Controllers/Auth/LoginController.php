<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\{JsonResponse,Response,Request};
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function logout(): JsonResponse
    {
        if (Auth::check()) {

            Auth::logout();
            return response()->json(['message' => 'logout successful', 'status' => 200]);

        }
        return response()->json(['message' => 'Пользователь не авторизован']);
    }

    /**
     * @throws \Illuminate\Validation\ValidationException
     */
    public function login(LoginRequest $request): Response|JsonResponse
    {
        $request->authenticate();

        if (Auth::check()) {

            $user = Auth::user();

            if ($user->is_patient) {
                return \response()->json(['id'=> $user->id, 'status' => 200]);
            }

            return response()->json(['data'=> Auth::user(), 'status' => 200]);

        }

        return response()->json([
            'message' => 'Пользователь не авторизован',
            'status' => 401], 401);
    }
}
