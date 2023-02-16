<?php

namespace App\Http\Controllers\API;


use App\Models\Schedule;
use App\Models\Doctor;
use App\Models\Day;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Database\Eloquent\Builder;
//use App\Models\Day;

/**
 * Description of ScheduleController
 *
 * @author sysad
 */
class ScheduleController extends Controller {

    private Builder $model;

    public function __construct() {
        $this->model = Schedule::query()
                ->join('days', 'schedules.day_id', '=', 'days.id');
    }

    //put your code here
    public function store(Request $request): JsonResponse {
        Schedule::create($request->all());
        return response()->json('Успешно сохранено', 201);
    }

    public function index() {
        $schedules = $this->model->get();
        return response()->json($schedules);
    }

    public function getShedulebyDoctor($id) {
        $schedules = Doctor::find($id)->schedule;
        foreach ($schedules as $item) {
            $item->day->name;
            $item->doctor->name;
        }
        return response()->json($schedules);
    }

}
