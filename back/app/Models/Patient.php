<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Patient extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'surname',
        'patronymic',
//        'speciality_id',
//        'avatar_path',
//        'photo_path',
        'user_id',
        'birthday',
    ];

    public function user(): Model|BelongsTo|null
    {
        return $this->belongsTo(User::class)->first();

    }

}
