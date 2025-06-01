<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Resources\V1\TransactionResource;
use App\Models\Transaction;
use Illuminate\Http\Request;

class TransactionController extends Controller
{
    public function index()
    {
        return TransactionResource::collection(Transaction::paginate());
    }

    public function show(Transaction $transaction)
    {
        return new TransactionResource($transaction);
    }
}
