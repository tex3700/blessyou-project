<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class DoctorSeeder extends Seeder
{

    private array $doctors = [
        1 => [
            "id" => 1,
            "name" => "Алексей",
            "patronymic"=> "Викторович",
            "avatar_path"=> "a1.png",
            "info" => "Специалист высшей категории",
            "surname" => "Виноградов",
            "photo_path" => "p1.jpg",
        ],
        2 => [
            "id" => 2,
            "name" => "Алла",
            "patronymic" => "Петровна",
            "avatar_path" => "a2.png",
            "info" => "Специалист по грудному вскармливанию",
            "surname" => "Иванова",
            "photo_path" => "p2.jpg",
        ],
        3 => [
            "id" => 3,
            "name" => "Федор",
            "patronymic" => "Петрович",
            "avatar_path" => "a3.png",
            "info" => "",
            "surname" => "Никитин",
            "photo_path" => "p3.jpg",
        ],
        4 => [
            "id" => 4,
            "name" => "Эмма",
            "patronymic" => "Федоровна",
            "avatar_path" => "a4.png",
            "info" => "Специалист высшей категории, гл.врач мед.центра",
            "surname" => "Никитина",
            "photo_path" => "p4.jpg",
        ],
        5 => [
            "id" => 5,
            "name" => "Иван",
            "patronymic" => "Петрович",
            "avatar_path" => "a5.png",
            "info" => "",
            "surname" => "Иванов",
            "photo_path" => "p5.jpg",
        ],
        6 => [
            "id" => 6,
            "name" => "Анатолий",
            "patronymic" => "Владимирович",
            "avatar_path" => "a6.png",
            "info" => "",
            "surname" => "Туманов",
            "photo_path" => "p6.jpg",
        ],
        7 => [
            "id" => 7,
            "name" => "Анастасия",
            "patronymic" => "Борисовна",
            "avatar_path" => "a7.png",
            "info" => "Специалист первой категории",
            "surname" => "Березина",
            "photo_path" => "p7.jpg",
        ],
        8 => [
            "id" => 8,
            "name" => "Елизавета",
            "patronymic" => "Вадимовна",
            "avatar_path" => "a8.png",
            "info" => "Специалист первой категории",
            "surname" => "Рыбникова",
            "photo_path" => "p8.jpg",
        ],
    ];

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(): void
    {
        DB::table('doctors')->insert($this->getData());
    }

    private function getData(): array
    {
        $data = [];
        foreach ($this->doctors as $doctor) {
            $data[] = [
                'id' => $doctor['id'],
                "name" => $doctor["name"],
                "patronymic" => $doctor["patronymic"],
                "surname" => $doctor["surname"],
                "info" => $doctor["info"],
                "avatar_path"=> $doctor["avatar_path"],
                "photo_path" => $doctor["photo_path"],
            ];
        }
        return $data;
    }

}
