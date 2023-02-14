<?php

namespace App\Actions;

use App\Contracts\RegistersActionContract;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class RegisterUserAction implements RegistersActionContract {

    public function __invoke(array $data): User {
        return User::create([
                    'name' => $data['name'],
                    'email' => $data['email'],
                    'password' => Hash::make($data['password']),
        ]);
    }

}
