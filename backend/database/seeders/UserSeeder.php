<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::factory()
            ->count(5)
            ->transactions(10)
            ->create();

        User::factory()
            ->count(15)
            ->transactions(3)
            ->create();

        User::factory()
            ->count(3)
            ->create();
    }
}
