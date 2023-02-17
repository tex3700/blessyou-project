<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Record extends Model
{
    use HasFactory;
    protected $fillable = [
        'id',
        'doctor_id',
        'patient_id',
        'record_time',
        'end_time',
        'receipt_time'
    ];

    public function doctor() {
        return $this->belongsTo(Doctor::class);
    }

    public function patient(){
         return $this->belongsTo(Patient::class);
    }
}
