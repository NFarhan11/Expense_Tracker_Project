<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Transaction>
 */
class TransactionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {

        return [
            "user_id" => null,
            "amount" => $this->faker->randomFloat(2, 0, 10000),
            "category_id" => $this->faker->numberBetween(1, 11),
            "date" => $this->faker->dateTimeBetween('-2 years', 'now'),
        ];
    }
}
