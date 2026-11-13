<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    protected $fillable = [
        'name',
        'title_ar',
        'description',
        'description_ar',
        'icon',
    ];
}
