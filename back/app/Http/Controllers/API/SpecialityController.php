<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Speciality;
use Illuminate\Http\Request;

class SpecialityController extends Controller
{
    /**
     * @lrd:start
     * {Для работы с SEND необходимо добавить api/ в начало заапроса!}
     *
     * Возвращает все специальности из таблицы specialities
     * @lrd:end
     *
     * @LRDresponses responses 200
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function index() {
        return response()->json(Speciality::all());
    }

    /**
     * @LRDparam name required|string
     * @LRDresponses responses 200
     *
     * @lrd:start
     * {Для работы с SEND необходимо добавить api/ в начало заапроса!}
     *
     * Создает запись в таблице specialities
     *
     * Возвращает: void (ничего)
     * @lrd:end
     */
    public function store(Request $request) {
        $speciality = new Speciality;
        if ($request->has('name')) {
            $speciality->name = $request->name;
            $speciality->save();
        }
    }

    /**
     * @lrd:start
     * {Для работы с SEND необходимо добавить api/ в начало заапроса!}
     *
     * Принимает id специальности
     *
     * Возвращает поля таблицы specialities
     * {'id', 'name'}
     * @lrd:end
     *
     * @LRDparam id required|int
     * @LRDresponses responses 200
     */
    public function show(Request $request) {
        if ($request->has('id')) {
           $speciality = Speciality::find($request->id);
           return response()->json($speciality);
        }
        return false;
    }
    /**
     * @lrd:start
     * {Для работы с SEND необходимо добавить api/ в начало заапроса!}
     * @lrd:end
     */
    public function update(Request $request)
    {
        if ($request->has('name','id')) {
            $speciality = Speciality::find($request->id);
            $speciality->name = $request->name;
            $speciality->save();
            return $speciality;
        }
         return false;
    }

    public function destroy(Request $request)
    {}

    public function import()
    { /** Не имеет экземпляра модели */ }

    public function export(Post $post)
    { /** Имеет экземпляр модели */ }
}
