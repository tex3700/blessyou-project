<?php

namespace App\Actions;

use App\Http\Controllers\API\RecordController;
use App\Http\Controllers\API\ScheduleController;
use App\Models\Department;
use App\Models\DoctorDepartment;

class GetNextRecordsDataAction
{
    public function __invoke($value)
    {
        $recordController = new RecordController();
        $scheduleController = new ScheduleController();
        //$arrNextRecords = [];

        $departmentId = DoctorDepartment::query()
            ->where('doctor_id','=',$value)
            ->value('department_id');

        $department = Department::query()
            ->where('id', '=', $departmentId)
            ->value('name');

        $dateNext = $recordController->getAllPossibleDatesForReport($value, 10, $scheduleController);

        $arrNextRecords = [
            'id' => $value,
            'department' => $department,
            'date' => array_key_first($dateNext),
        ];

        return $arrNextRecords;
    }

}
