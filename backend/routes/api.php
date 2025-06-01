<?php

use App\Http\Controllers\Api\V1\TransactionController;
use App\Http\Controllers\Api\V1\UserController;
use Illuminate\Support\Facades\Route;

// /api/v1
Route::group(["prefix" => "v1", "namespace" => "App\Http\Controllers\Api\V1"], function () {
  Route::apiResource("users", UserController::class);
  Route::apiResource("transactions", TransactionController::class);
});
