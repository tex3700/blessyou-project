@php
$message->from("info@blessyou-clinic.ru", $name); 
@endphp
<strong> Имя: </strong> {{ $name }} <br>
<strong> Email: </strong> {{ $email }} <br>
<strong> Телефон: </strong> {{ $phone }} <br>
<strong> Сообщение: </strong> {{ $text }}
<br><br>

<style type="text/css"> 
  button[name="run_script"] { 
    border: none;
    border-radius: 7px;
    padding: 10px 25px;
    background: linear-gradient(270deg, #37A12F -4.12%, #80DB2E 102.94%);
    box-shadow: 0px 15px 10px rgb(125 214 246 / 13%);
    cursor: pointer;
    text-transform: uppercase;
    font-weight: bold;
  }
  button[name="run_script"]:hover { 
   background: linear-gradient(270deg, #37A12F -4.12%, #80DB2E 102.94%);
   box-shadow: 0px 15px 10px rgb(125 214 246 / 13%);
  } 
      button[name="run_script"] a { 
color: white !important;
  } 
</style>
</style>

<button type="button" name="run_script"><a href="mailto: {{ $email }} ">Ответить клиенту</a></button>