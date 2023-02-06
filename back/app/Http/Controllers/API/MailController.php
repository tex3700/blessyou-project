<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\SendMail;

class MailController extends Controller
{
    //
    public function send(Request $request) {
    Mail::send('mail',['name'=>"Virat Gandhi"],function($message){
    $message->to('info@blessyou-clinic.ru')->subject("Email Testing with Laravel");
    $message->from('info@blessyou-clinic.ru','Creative Losser Hopeless Genius');
});
    }
}
