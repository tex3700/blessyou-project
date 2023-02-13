<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\Controller;
use App\Models\Patient;
use App\Models\User;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PatientController extends Controller
{
    private Builder $model;

    public function __construct()
    {
        $this->model = User::query()
            ->join('patients', 'patients.user_id', '=', 'users.id');
    }

    public function index(): JsonResponse
    {
        $patients = $this->model->get();

        return response()->json($patients);
    }

    /**
     * @throws \Illuminate\Validation\ValidationException
     */
    public function register(Request $request, RegisteredUserController $registeredUser): JsonResponse
    {
        $registeredUser->store($request);

        if (Auth::check()) {
            $user = Auth::user();
            $user->is_patient = '1';
            $user->save();
        }

        $patient = Patient::create($request->all());
        $user->patient()->save($patient);

       return response()->json( [
            'message' => 'Пациент успашно добавлен',
            'id' => $user->id],
            201 );
    }

    public function store(Request $request): JsonResponse
    {
        $user = User::create([
            'email' => $request->email,
            'phone' => $request->phone,
            'is_employee' => '1',
        ]);

        $patient = Patient::create($request->all());

        $user->employee()->save($patient);

        return response()->json( 'Успешно сохранено', 201 );
    }

    public function show($id): JsonResponse
    {
        $patient = $this->model->where('user_id', '=', $id)->first();

        return response()->json($patient);
    }

    public function edit($id): JsonResponse
    {
        $patient = $this->model->get()->find($id);

        return response()->json($patient);
    }

    public function update(Request $request, Patient $patient): JsonResponse
    {
        $patient->update($request->all());
        $patient->user()->update($request->all());

        return response()->json('Успешно обновлено');
    }

    public function destroy(Patient $patient): JsonResponse
    {
        $patient->delete();
        $patient->user()->delete();

        return response()->json('Пациент удален', 204);
    }


//    public function register(Request $request, RegistersActionContract $registerUserAction) {
//        $request->validate([
//            'name' => ['required', 'string', 'max:255'],
//            'email' => ['required', 'string', 'email', 'max:255', 'unique:' . User::class],
//            'password' => ['required', 'confirmed', Rules\Password::defaults()],
//        ]);
//        $data = $request->all();
//        $user = $registerUserAction($data);
//        $patient = new Patient();
//         $patient->name = $request->name;
//        $patient->user_id = $user->id;
//        $patient->save();
//        return response()->json($patient);
//    }

}
