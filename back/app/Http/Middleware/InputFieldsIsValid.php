<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use \App\Models\Doctor;

class InputFieldsIsValid
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next, $modelName) {
        $className = 'App\Models\\' . $modelName;
        $instance = new $className();
        $modelFields = array_flip($instance->getFillable());
        $requestField = $request->all();
        $diffFields = array_flip(array_diff_key($requestField,$modelFields));
        foreach ($diffFields as $fields){
                $request->request->remove($fields);
        }
        return $next($request);
    }

}
