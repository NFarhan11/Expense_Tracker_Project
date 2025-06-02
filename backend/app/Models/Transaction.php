<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    use HasFactory;

    protected $fillable = ['user_id', 'category_id', 'date', 'amount'];

    // NON MICROSERVICE COMPATIBLE
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
