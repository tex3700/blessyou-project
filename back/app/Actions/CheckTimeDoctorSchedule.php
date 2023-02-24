<?php

namespace App\Actions;

use App\Models\Record;
use App\Models\Doctor;
use DateTime;

class CheckTimeDoctorSchedule {

    public function __invoke($doctorId, $recieptTime) {
        $date = new DateTime($recieptTime);
       $dateName = $date->format('N');
        // $result = array_search(strtolower($dateName),$this->days);
       $schedule = Doctor::find($doctorId)->schedule->where("day_id",$dateName)->first();
       $startDate = $this->getDateString($date, $schedule->start_time);
       $endDate = $this->getDateString($date, $schedule->end_time);
       return strtotime($startDate) <= $date->getTimestamp() && $date->getTimestamp() < strtotime($endDate);
    }
    
    private function getDateString(DateTime $date, string $time){
        return $date->format('Y-m-d')." ".$time;
    }
}