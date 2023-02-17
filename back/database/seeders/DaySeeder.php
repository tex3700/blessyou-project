<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DaySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('days')->insert([
            1 => ["name"=>"Понедельник"],
            2 => ["name"=>"Вторник"],
            3 => ["name"=>"Среда"],
            4 => ["name"=>"Четверг"],
            5 => ["name"=>"Пятница"],
            6 => ["name"=>"Суббота"],
            7 => ["name"=>"Воскресенье"]
        ]);
    }
}
