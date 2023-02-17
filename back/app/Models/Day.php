<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Day extends Model
{
    use HasFactory;

    public $timestamps = false;
    protected $fillable = [
        'id',
        'name'
    ];
    public function schedule()
    {
      return $this->hasMany(Schedule::class);
    }

}
