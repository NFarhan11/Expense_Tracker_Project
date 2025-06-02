<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\V1\StoreTransactionRequest;
use App\Http\Requests\V1\UpdateTransactionRequest;
use App\Http\Resources\V1\TransactionResource;
use App\Models\Transaction;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\QueryBuilder;

class TransactionController extends Controller
{
    public function index()
    {
        return TransactionResource::collection(
            QueryBuilder::for(Transaction::class)
                ->allowedSorts(['amount', 'date'])
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

    public function store(StoreTransactionRequest $request)
    {
        return new TransactionResource(Transaction::create($request->validated()));
    }

    public function update(UpdateTransactionRequest $request, Transaction $transaction)
    {
        $transaction->update($request->validated());
        return new TransactionResource($transaction);
    }

    public function destroy(Transaction $transaction)
    {
        $transaction->delete();
        return response()->json(['message' => 'Transaction deleted successfully.'], 200);
    }
}
