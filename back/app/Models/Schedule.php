<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Schedule extends Model
{
    use HasFactory;

    public $timestamps = false;
    protected $fillable = [
        'id',
        'doctor_id',
        'day_id',
        'start_time',
        'end_time',
    ];

    public function doctor() {
        return $this->belongsTo(Doctor::class);
    }

    public function day(){
         return $this->belongsTo(Day::class);
    }
}
