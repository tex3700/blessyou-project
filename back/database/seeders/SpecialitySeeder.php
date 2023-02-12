<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class SpecialitySeeder extends Seeder
{
    private array $specialities = [
        1 => [
            'id' => 1,
            "name" => "Врач-педиатр",
        ],
        2 => [
            'id' => 2,
            "name" => "Врач-оториноларинголог",
        ],
        3 => [
            'id' => 3,
            "name" => "Врач-гастроэнтеролог",
        ],
        4 => [
            'id' => 4,
            "name" => "Врач-офтальмолог",
        ],
        5 => [
            'id' => 5,
            "name" => "Врач-физитерапевт",
        ],
    ];
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(): void
    {
        DB::table('specialities')->insert($this->getData());
    }

    private function getData(): array
    {
        $data = [];
        foreach ($this->specialities as $speciality) {
            $data[] = [
                'id' => $speciality['id'],
                'name' => $speciality['name'],
            ];
        }
        return $data;
    }
}
