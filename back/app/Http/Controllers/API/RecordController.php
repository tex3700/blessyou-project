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

use Illuminate\Validation\ValidationException;


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

        if (!is_null($allPossibleDate)) {
            foreach ($allPossibleDate as $key => $value) {
                $allDate[$key] = $findDateAction($value);
            }

            $allPossibleReport = $checkDateReportAbility($allDate, $request->doctor_id);
            return response()->json($allPossibleReport);
        }
        return response()->json(['message' => 'Нет доступных записей для выбранного врача']);
    }

    public function store(Request $request, ScheduleController $scheduleController): JsonResponse {
        try {
            $validatedFields = $request->validate([
                "doctor_id" => ['required', 'int'],
                "patient_id" => ['required', 'int'],
                "record_time" => ['required', 'date_format:Y-m-d H:i:s'], //Должен соотвествовать формату "2023-02-22 01:00:00"
                "receipt_time" => ['required', 'date_format:H:i:s'], //Должен соотвествовать формату "1:00:00" без нуля
            ]);
        } catch (ValidationException $exception) {
            $result = $exception->errors();
            return response()->json($result, 422);
        }
        $date = new DateTimeImmutable($validatedFields["record_time"]);
        $time = explode(":", $validatedFields["receipt_time"]);
        $validatedFields["end_time"] = $date
                ->modify("+ $time[0] hours $time[1] minutes $time[2] seconds ") //Не нашёл лучшего способа добавлять динамическое количество времени
                ->format('Y-m-d H:i:s');
        $checkTimeDoctorSchedule = new \App\Actions\CheckTimeDoctorSchedule();
        $result = $checkTimeDoctorSchedule($validatedFields["doctor_id"],$validatedFields["record_time"]);
        if($result){
            Record::create($validatedFields);
            return response()->json('Успешно сохранено', 201);
        }
         return response()->json('Не сохранено', 402);

    }

    public function getRecordsByPatientId($id){
        $model = Record::where([
    ['patient_id', '=', $id],
    ['record_time', '>', new DateTime]
                ])->take(10)->get();
        return response()->json($model, 201);
    }

    public function destroy(Record $record): JsonResponse
    {
        $record->delete();

        return response()->json([
            'message' => 'Запись отменена',
            'status' => 204], 204);
    }

}
