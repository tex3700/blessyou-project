<?php

namespace App\Actions;

use DateTime;
use DatePeriod;
use DateInterval;
use DateTimeImmutable;
/**
 * Description of newPossibleReportForDateAction
 *
 * @author sysad
 */
class AllPossibleReportForDateAction {
    //put your code here
     public function __invoke($data) {
         $interval = $data["avaible_data_min"]->diff($data["avaible_data_max"]);
          $period = new DatePeriod($data["avaible_data_min"], new DateInterval('PT1H'),$interval->h-1);
        foreach ($period as $value) {
            $hours[] = $value->format('Y-m-d H:i:s');
        }
         return $hours;
     }
}
