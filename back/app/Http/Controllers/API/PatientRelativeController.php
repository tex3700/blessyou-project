<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Patient;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PatientRelativeController extends Controller
{
    public function store(Request $request): JsonResponse
    {
        if (Auth::check()) {
            $user = Auth::user();
        }

        $patient = Patient::create($request->all());
        $user->patient()->save($patient);

        return response()->json( [
            'message' => 'Пациент успашно добавлен',
            'id' => $user->id,
            'status' => 201], 201 );
    }

    public function show(): JsonResponse
    {
        if (Auth::check()) {
            $user = Auth::user();
        }

        $patients = $user->patient()->get();

        $patientsAnother = $patients->except($patients->first()->id);

        return !is_null($patientsAnother)
            ? response()->json(['data' => $patientsAnother, 'status' => 200])
            : response()->json(['message' => "Не найдено связанных записей", 'status' => 422]);
    }

    public function edit(Patient $patient): JsonResponse
    {
        return response()->json(['data' => $patient, 'status' => 200]);
    }

    public function update(Request $request, Patient $patient): JsonResponse
    {
        $patient->update($request->all());

        return response()->json([
            'message' => 'Данные успешно обновлены',
            'status' => 200]);
    }

    public function destroy(Patient $patient): JsonResponse
    {
        $patient->delete();

        return response()->json([
            'message' => 'Пациент удален',
            'status' => 204], 204);
    }
}
