<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function logout(): JsonResponse
    {
        if (Auth::check()) {

            Auth::logout();
            return response()->json('logout successful');

        }

        return response()->json('User not registered');
    }
}
