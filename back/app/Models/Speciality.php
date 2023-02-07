<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Speciality extends Model {
    public $timestamps = false;
    protected $fillable = [
        'id',
        'name'
    ];
    public function doctors()
    {
        return $this->belongsToMany(Doctor::class,'doctor_speciality','speciality_id','doctor_id');
    }

}
