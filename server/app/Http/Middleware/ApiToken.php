<?php

namespace App\Http\Middleware;

use Closure;

class ApiToken
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        error_log('CLIENT SENT: '.$request->header('apiToken'));
        error_log('SERVER HAS: '.env('API_KEY'));
        if ($request->header('apiToken') != env('API_KEY')) {
            return response()->json('Unauthorized', 401);
        }
        return $next($request);
    }
}
