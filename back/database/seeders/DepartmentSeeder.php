<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class DepartmentSeeder extends Seeder
{

    private array $departments = [
        1 => [
            "id" => 1,
            "name" => "Педиатрия",
            "description" => "Педиатр - детский терапевт, который наблюдает Вашего ребенка с самого рождения до совершеннолетия. Боль в горле, насморк, чихание, кашель, повышенная температура – верные симптомы ОРВИ. С ним знакомы взрослые и дети, особенно если посещают ясли, садик, шк",
            "photo_path" => "d1.jpg",
        ],
        2 => [
            "id" => 2,
            "name" => "Отоларингология",
            "description" => "Наши врачи помимо медикаментозной терапии выполняют хирургические вмешательства различной сложности. Специалисты считается незаменимыми при устранении тяжелых воспалительных процессов в области околоносовых пазух, а также при потере слуха и обоняния. ",
            "photo_path" => "d2.jpg",
        ],
        3 => [
            "id" => 3,
            "name" => "Физиотерапия",
            "description" => "Все виды физиотерапевтических услуг, мануальный массаж и натуротерапия. Лучшие специалисты города ждут Вас.",
            "photo_path" => "d3.jpg",
        ],
        4 => [
            "id" => 4,
            "name" => "Офтальмология",
            "description" => "Осуществляем лазерную коррекцию зрения на уровне ведущих офтальмологич\u0435ских центров России.",
            "photo_path" => "d4.jpg",
        ],
        5 => [
            "id" => 5,
            "name" => "Стоматология",
            "description" => "Мы оказываем широкий спектр профильных услуг. Используется современное оборудование и новые технологии.",
            "photo_path" => "d5.jpg",
        ],

        6 => [
            "id" => 6,
            "name" => "Ведение беременности",
            "description" => "Комплексное наблюдение за здоровьем будущей мамы и малыша, деликатный подход, высокий уровень профессионализма. Мы оказываем помощь уже на этапе планирования беременности, предлагаем полный спектр обследований. При необходимости, в ведении беременности пр",
            "photo_path" => "d6.jpg",
        ],
    ];

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(): void
    {
        DB::table('departments')->insert($this->getData());
    }

    private function getData(): array
    {
        $data = [];
        foreach ($this->departments as $department) {
            $data[] = [
                'id' => $department['id'],
                "name" => $department['name'],
                "description" => $department['description'],
                "photo_path" => $department['photo_path'],
            ];
        }
        return $data;
    }
}
