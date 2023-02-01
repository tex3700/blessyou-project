<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Doctor extends Model
{

    protected $fillable = [
        'id',
        'name',
        'surname',
        'patronymic',
        'speciality_id',
        'avatar_path',
    ];
        public function speciality()
    {
        return $this->belongsToMany(Speciality::class,'doctor_speciality','doctor_id','speciality_id');
    }
}