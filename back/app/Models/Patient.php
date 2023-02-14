<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

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
    }

}
