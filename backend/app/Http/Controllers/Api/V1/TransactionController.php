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
        try {
            return TransactionResource::collection(
                QueryBuilder::for(Transaction::class)
                    ->defaultSort('-date')
                    ->allowedSorts(['amount', 'date'])
                    ->allowedFilters([
                        AllowedFilter::exact('user_id'),
                        AllowedFilter::exact('category_id')
                    ])
                    ->paginate()
            );
        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to retrieve transactions.'], 500);
        }
    }

    public function show(Transaction $transaction)
    {
        try {
            return new TransactionResource($transaction);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to retrieve transaction.'], 500);
        }
    }

    public function store(StoreTransactionRequest $request)
    {
        try {
            return new TransactionResource(Transaction::create($request->validated()));
        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to create transaction.'], 500);
        }
    }

    public function update(UpdateTransactionRequest $request, Transaction $transaction)
    {
        try {
            $transaction->update($request->validated());
            return new TransactionResource($transaction);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to update transaction.'], 500);
        }
    }

    public function destroy(Transaction $transaction)
    {
        try {
            $transaction->delete();
            return response()->json(['message' => 'Transaction deleted successfully.'], 200);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to delete transaction.'], 500);
        }
    }
}
