<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Department extends Model {

    use HasFactory;

    public $timestamps = false;
    protected $fillable = [
        'id',
        'name',
        'description',
        'photo_path'
        
    ];
        public function doctors()
    {
        return $this->belongsToMany(Doctor::class,'doctor_department','department_id','doctor_id');
    }

}
