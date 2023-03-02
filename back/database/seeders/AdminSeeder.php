<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'email' => 'admin@by.ru',
            'is_admin' => '1',
        ]);

        $userId = User::query()
            ->where('email', '=', 'admin@by.ru' )
            ->value('id');

        DB::table('employees')->insert([
            'user_id' => $userId,
<<<<<<< HEAD
            'name' => 'Админ',
            'surname' => 'Админов',
=======
            'firstname' => 'Админ',
            'lastname' => 'Админов',
>>>>>>> 82f34c2e54299dfc9da2dab14aa31790ee6a1c64
        ]);
    }
}
