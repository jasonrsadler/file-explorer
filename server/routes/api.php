<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('documents', 'DocumentController@index')->middleware('api_token');

Route::post('documents', 'DocumentController@store')->middleware('api_token');

Route::delete('documents', 'DocumentController@destroy')->middleware('api_token');
