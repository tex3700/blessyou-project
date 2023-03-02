<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ScheduleSeeder extends Seeder
{

    private array $schedules = [
        1 => [
            'id' => 1,
            'doctor_id' => 1,
            'day_id' => 1,
            'start_time' => "09:00:00",
            'end_time' => "14:00:00",
        ],

        2 => [
            'id' => 2,
            'doctor_id' => 1,
            'day_id' => 1,
            'start_time' => "09:20:00",
            'end_time' => "14:20:00",
        ],

        3 => [
            'id' => 3,
            'doctor_id' => 1,
            'day_id' => 1,
            'start_time' => "10:00:00",
            'end_time' => "15:00:00",
        ],

        4 => [
            'id' => 4,
            'doctor_id' => 1,
            'day_id' => 2,
            'start_time' => "09:00:00",
            'end_time' => "14:00:00",
        ],

        5 => [
            'id' => 5,
            'doctor_id' => 1,
            'day_id' => 3,
            'start_time' => "09:00:00",
            'end_time' => "14:00:00",
        ],

        6 => [
            'id' => 6,
            'doctor_id' => 3,
            'day_id' => 1,
            'start_time' => "09:00:00",
            'end_time' => "15:00:00",
        ],

        7 => [
            'id' => 7,
            'doctor_id' => 3,
            'day_id' => 2,
            'start_time' => "09:00:00",
            'end_time' => "15:00:00",
        ],

        8 => [
            'id' => 8,
            'doctor_id' => 3,
            'day_id' => 3,
            'start_time' => "09:00:00",
            'end_time' => "15:00:00",
        ],

        9 => [
            'id' => 9,
            'doctor_id' => 3,
            'day_id' => 4,
            'start_time' => "09:00:00",
            'end_time' => "15:00:00",
        ],

        10 => [
            'id' => 10,
            'doctor_id' => 5,
            'day_id' => 4,
            'start_time' => "09:00:00",
            'end_time' => "15:00:00",
        ],

        11 => [
            'id' => 11,
            'doctor_id' => 5,
            'day_id' => 5,
            'start_time' => "09:00:00",
            'end_time' => "15:00:00",
        ],
    ];

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('schedules')->insert($this->getData());
    }

    private function getData(): array
    {
        $data = [];
        foreach ($this->schedules as $schedule) {

            $data[] = [
                'id' => $schedule['id'],
                'doctor_id' => $schedule['doctor_id'],
                'day_id' => $schedule['day_id'],
                'start_time' => $schedule['start_time'],
                'end_time' => $schedule['end_time'],
            ];
        }
        return $data;
    }
}
