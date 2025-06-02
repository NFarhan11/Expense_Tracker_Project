<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Resources\V1\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Spatie\QueryBuilder\QueryBuilder;

class UserController extends Controller
{
    public function index()
    {
        return UserResource::collection(
            QueryBuilder::for(User::class)
                ->allowedSorts(['name'])
                ->allowedFilters(['name', 'email'])
                ->allowedIncludes(['transactions'])
                ->paginate()
        );
    }

    public function show(User $user)
    {
        return new UserResource($user);
    }
}
