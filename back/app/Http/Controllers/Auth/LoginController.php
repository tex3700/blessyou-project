<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\{JsonResponse,Response,Request};
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    /**
     * @LRDresponses responses 200,204,401
     * @lrd:start
     * {Для работы с SEND необходимо добавить api/ в начало заапроса!}
     *
     * Деавторизация юзера
     *
     * Перезаписывает сессию, удуаляет запись авторизованного юзера из сессии
     *
     * Успешно: ['message' => 'logout successful', 'status' => 200];
     * Ошибки:
     * -['message' => 'logout fall for any reason', 'status' => 204],
     * -['message' => 'Пользователь не авторизован', 'status' => 401]
     * @lrd:end
     */
    public function logout(
        AuthenticatedSessionController $authSession,
        Request $request
    ): JsonResponse
    {
        if (Auth::check()) {

//            Auth::logout();

            $authSession->destroy($request);

//            return response()->json(['message' => 'logout successful', 'status' => 200]);

            return !Auth::check()
                ? response()->json(['message' => 'logout successful', 'status' => 200])
                : response()->json(['message' => 'logout fall for any reason', 'status' => 204], 204);

        }
        return response()->json(['message' => 'Пользователь не авторизован', 'status' => 401], 401);
    }

    /**
     * @LRDresponses responses 200,401,422,403
     *
     * @lrd:start
     * {Для работы с SEND необходимо добавить api/ в начало заапроса!}
     *
     * Авторизация юзера, создает запись авторизации в сессию
     *
     * Если авторизуется пациент в форме авторизации пациента:
     * Возвращает: id юзера, 'status' => 200.
     *
     * Если авторизуется сотрудник, доктор, администратор в форме авторизации персонала:
     * Возвращает:
     * все поля авторизованого юзера из таблицы users:
     * {id,email,phone,is_patient,is_admin,is_employee,is_doctor,email_verified_at}, 'status' => 200.
     *
     * Ошибки:
     * -Неудачная авторизация: ['message' => 'Пользователь не авторизован','status' => 401];
     * -Неверно введен email: ['message' => 'Пользователь с таким логином не существует','status' => 422];
     * -Неверно введен пароль: ['Неверное имя пользователя или пароль']-422;
     * -Попытка входа через форму не соответствующую роли пользователя:
     * ['message' => 'Вам необходи войти через форму входа для персонала','status' => 403],
     * ['message' => 'Вам необходи войти через форму входа для пациентов','status' => 403]
     * @lrd:end
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function login(
        AuthenticatedSessionController $authSession,
        LoginRequest $request
    ): Response|JsonResponse
    {
        //$request->authenticate();
        $authSession->store($request);

        if (Auth::check()) {

            $user = Auth::user();

            if ($user->is_patient) {
                return \response()->json(['id'=> $user->id, 'status' => 200]);
            }

            return response()->json(['data'=> Auth::user(), 'status' => 200]);

        }

        return response()->json([
            'message' => 'Пользователь не авторизован',
            'status' => 401], 401);
    }
}
