<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Speciality extends Model {

    protected $fillable = [
        'id',
        'name'
    ];
    public function doctors()
    {
        return $this->belongsToMany(Doctor::class,'doctors_specialities','speciality_id','doctor_id');
    }

}
