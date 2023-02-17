<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Record;
use Illuminate\Http\JsonResponse;
use Illuminate\Database\Eloquent\Builder;
use DateTimeImmutable;
use DateTime;
use DatePeriod;
use DateInterval;
use App\Actions\FindDateAction;
use App\Actions\AllPossibleReportForDateAction;
use App\Actions\CheckDateReportAbility;

class RecordController extends Controller {

    private Builder $model;

    public function __construct() {
        $this->model = Record::query()
                ->join('doctors', 'records.doctor_id', '=', 'doctors.id')
               ->join('patients', 'records.patient_id', '=', 'patients.id');
    }

    public function index() {
        $records = $this->model->get();
        return response()->json($records);
    }

    public function getAllPossibleDatesForReport($doctor_id,$daysAmount, ScheduleController $scheduleController) {
        $doctorWorkShecdule = $scheduleController->getShedulebyDoctor($doctor_id)->getData();
        $findDateAction = new FindDateAction;
        return $findDateAction($doctorWorkShecdule, $daysAmount);
    }
    public function getPossibleDate(Request $request, ScheduleController $scheduleController) {
        $findDateAction = new AllPossibleReportForDateAction;
        $checkDateReportAbility = new CheckDateReportAbility;
        $allPossibleDate = $this->getAllPossibleDatesForReport(
                        $request->doctor_id,
                        $request->days_amount, $scheduleController
                        );

        foreach($allPossibleDate as $key=>$value){
            $allDate[$key] = $findDateAction($value);
        }

        $allPossibleReport = $checkDateReportAbility($allDate,$request->doctor_id);
        return response()->json($allPossibleReport);
    }

    public function store(Request $request,ScheduleController $scheduleController): JsonResponse {
        //$result = $scheduleController->getShedulebyDoctor($request->doctor_id)->getData();
        //Нужно вынести в валидацию
        $arRequest = $request->all();
        //$result = $this->getPossibleDate($request,$scheduleController);
        //var_dump($result->getData());
        preg_match("/[\b[0-2]{1,2}:[0-2]{1,2}:[0-2]{1,2}/", $arRequest["receipt_time"], $matches);
        $date = DateTimeImmutable::createFromFormat('Y-m-d H:i:s', $arRequest["record_time"]);
        $time = explode(":", reset($matches));
        $arRequest["end_time"] = $date
                ->modify("+ $time[0] hours $time[1] minutes $time[2] seconds ")
                ->format('Y-m-d H:i:s');
        Record::create($arRequest);
        return response()->json('Успешно сохранено', 201);
    }

}
