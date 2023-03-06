<?php

namespace App\Http\Controllers\API;


use App\Models\Schedule;
use App\Models\Doctor;
use App\Models\Day;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Validation\ValidationException;
//use App\Models\Day;

class ScheduleController extends Controller {

    private Builder $model;

    public function __construct() {
        $this->model = Schedule::query()
            ->join('days', 'schedules.day_id', '=', 'days.id');
    }

    /**
     * @LRDparam doctor_id required|int
     * @LRDparam day_id required|int
     * @LRDparam start_time required|date_format:H:i:s
     * @LRDparam end_time required|date_format:H:i:s
     *
     * @LRDresponses responses 201,422
     *
     * @lrd:start
     * {Для работы с SEND необходимо добавить api/ в начало заапроса!}
     *
     * Создает запись в таблице schedules(распиисание врачей)
     *
     * Возвращает: 'message' => 'Успешно сохранено', 'status' => 201.
     *
     * Ошибка валидации - 422
     * @lrd:end
     */
    public function store(Request $request): JsonResponse {
        try {
            $validatedFields = $request->validate([
                "doctor_id" => ['required', 'int'],
                "day_id" => ['required', 'int'],
                "start_time" => ['required', 'date_format:H:i:s'], //Должен соотвествовать формату "01:00:00"
                "end_time" => ['required', 'date_format:H:i:s'], //Должен соотвествовать формату "01:00:00"
            ]);
        } catch (ValidationException $exception) {
            $result = $exception->errors();
            return response()->json($result, 422);
        }
        Schedule::create($request->all());
        return response()->json('Успешно сохранено', 201);
    }

    /**
     * @lrd:start
     * {Для работы с SEND необходимо добавить api/ в начало заапроса!}
     *
     * Возвращает данные из таблицы schedules:
     * {id,doctor_id,day_id,start_time,end_time
     * | из таблицы days : name}
     * @lrd:end
     *
     * @LRDresponses responses 200
     */
    public function index() {
        $schedules = $this->model->get();
        return response()->json($schedules);
    }

    /**
     * @lrd:start
     * {Для работы с SEND необходимо добавить api/ в начало заапроса!}
     *
     * Возвращает данные из таблицы schedules:
     * {id,doctor_id,day_id,start_time,end_time
     * | из таблицы days : id,name}
     * и все поля из таблицы doctors:{...}
     * @lrd:end
     *
     * @LRDresponses responses 200
     */
    public function getShedulebyDoctor($id) {
        $schedules = Doctor::find($id)->schedule;
        foreach ($schedules as $item) {
            $item->day->name;
            $item->doctor->name;
        }
        return response()->json($schedules);
    }

}

