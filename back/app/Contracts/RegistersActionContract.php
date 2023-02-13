<?php

 
namespace App\Contracts;


use Illuminate\Database\Eloquent\Model;


interface RegistersActionContract
{
    public function __invoke(array $data):Model;
}