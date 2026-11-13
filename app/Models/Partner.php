<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Partner extends Model
{
    protected $fillable = [
        'name',
        'name_ar',
        'description',
        'description_ar',
        'logo',
        'website',
    ];
}
