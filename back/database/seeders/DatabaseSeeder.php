<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        $this->call(AdminSeeder::class);
        $this->call(DoctorSeeder::class);
        $this->call(SpecialitySeeder::class);
        $this->call(DepartmentSeeder::class);
        $this->call(DaySeeder::class);
<<<<<<< HEAD
=======
        $this->call(AdminSeeder::class);
>>>>>>> 82f34c2e54299dfc9da2dab14aa31790ee6a1c64
    }
}
