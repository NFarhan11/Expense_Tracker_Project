<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Resources\V1\TransactionResource;
use App\Models\Transaction;
use Illuminate\Http\Request;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\QueryBuilder;

class TransactionController extends Controller
{
    public function index()
    {
        return TransactionResource::collection(
            QueryBuilder::for(Transaction::class)
                ->allowedFilters([
                    AllowedFilter::exact('user_id'),
                    AllowedFilter::exact('category_id')
                ])
                ->paginate()
        );
    }

    public function show(Transaction $transaction)
    {
        return new TransactionResource($transaction);
    }
}
