<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class UserController extends Controller {

    public function index() {
        return "какой-то ответ";
    }

    public function getUser($user) {
        dd($user);
        return "какой-то ответ";
    }
        public function template($user) {
        return view('user', ["name" => $user]);
    }

}
