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

        if ($request->has('email')) {
        Mail::send('mail', [
            'name' => $request->name,
            'phone' => $request->phone,
            'text' => $request->text,
             'email' => $request->email,
                ], function($message){
                $message->to('info@blessyou-clinic.ru')->subject("Клиент хочет записаться на приём");

                }
        );
    }}

}
