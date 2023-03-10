<?php

namespace App\Actions;

use DateTime;
use DatePeriod;
use DateInterval;
use DateTimeImmutable;

class FindDateAction{
    private $days = [
    1=>'monday',
    2=>'tuesday',
    3=>'wednesday',
    4=>'thursday',
    5=>'friday',
    6=>'saturday',
    7=>'sunday'
     ];
      public function __invoke($doctorWorkShecdule, $numOfDays): ?array
      {
        $period = new DatePeriod(new DateTime(), new DateInterval('P1D'),$numOfDays, DatePeriod::EXCLUDE_START_DATE);
        foreach ($period as $value) {
            $dates[] = $value->format('Y-m-d');
        }
//        var_dump($period);
//        die();
        foreach ($doctorWorkShecdule as $value) {
            $currentDay = $this->days[$value->day_id];
            $nearlyDay = (new DateTime("next $currentDay"))->format('Y-m-d');
            $nearDayId = array_search($nearlyDay, $dates);
            while (isset($dates[$nearDayId])) {
                $resultData[$dates[$nearDayId]] = [
                    "avaible_data_min" =>
                    DateTimeImmutable::createFromFormat('Y-m-d H:i:s',$dates[$nearDayId] . " " . $value->start_time),
                    "avaible_data_max" =>
                    DateTimeImmutable::createFromFormat('Y-m-d H:i:s',$dates[$nearDayId] . " " . $value->end_time)
                ];
                $nearDayId += 7;
            }
        }
            if (empty($resultData)) {
                return null;
            }

            asort($resultData);

            return $resultData;
    }

}
