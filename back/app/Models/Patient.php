<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
<<<<<<< HEAD
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
    ];

    public function user(): Model|BelongsTo|null
    {
        return $this->belongsTo(User::class)->first();
=======

class Patient extends Model {

    use HasFactory;

    protected $fillable = [
        'id',
        'name',
        'surname',
        'patronymic',
        'speciality_id',
        'avatar_path',
        'photo_path',
        'user_id'
    ];
    public function user(){
        return $this->hasOne(User::class);
>>>>>>> f63cfeef631ad5fe8e9b8e541d97f9f60850a20c
    }

}
