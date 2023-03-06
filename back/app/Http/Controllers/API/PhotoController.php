<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class PhotoController extends Controller
 {

    /**
     * @lrd:start
     * {Для работы с SEND необходимо добавить api/ в начало заапроса!}
     * @lrd:end
     */
    public function add(Request $request) {
        $validatedRequest = $request->validate([
            'image' => 'image|nullable|max:1999',
        ]);
        if ($request->hasFile('image') && $request->has('path') && $validatedRequest['image']) {
            // Имя и расширение файла
            $filenameWithExt = $request->file('image')->getClientOriginalName();
            // Только оригинальное имя файла
            $filename = pathinfo($filenameWithExt, PATHINFO_FILENAME);

            // Расширение
            $extention = $request->file('image')->getClientOriginalExtension();

            $fileNameToStore = $request->path . "/" . $filename . "." . $extention;
            // Сохраняем файл
            $path = 'public/' . $fileNameToStore;
            $path = $request->file('image')->storeAs('public', $fileNameToStore);
            if(!$path){
                return "Проверьте указыенный путь - $path";
            }
            return "Сохранил в дерикторию $path";
        }


        return "не работает";
    }

}
