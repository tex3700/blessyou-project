<?php

namespace App\Http\Middleware;

use App\Models\User;
use Closure;
use Illuminate\Http\{JsonResponse,RedirectResponse,Request,Response};

class CheckIsPatient
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next): Response|JsonResponse|RedirectResponse
    {
        $user = User::query()
            ->where('email', '=', $request->email)
            ->first();

        if (is_null($user)) {
            return response()->json([
                'message' => 'Пользователь с таким логином не существует',
                'status' => 422], 422);
        }

        if (!$user->is_patient) {
            return response()->json([
                'message' => 'Вам необходи войти через форму входа для персонала',
                'status' => 403], 403);
        }

        return $next($request);
    }
}
