<?php


namespace App\Actions;

use App\Models\Record;
use Illuminate\Support\Facades\DB;
use DateTime;
use DatePeriod;
use DateInterval;
use DateTimeImmutable;

class CheckDateReportAbility {

    public function __invoke($arrayDates,$doctorid) {
        //$result = new DateTimeImmutable(reset($arrayDates));
        foreach ($arrayDates as $key => $value) {
            $recordToDoctor = DB::table('records')->where('doctor_id', $doctorid)
                            ->where('record_time', 'like', "$key%")->get();
            foreach ($recordToDoctor as $record) {
                $recordTimeAr[] = $record->record_time;
            }
              $result[$key] = array_diff($value, $recordTimeAr);
        }
        return $result;
    }

}
