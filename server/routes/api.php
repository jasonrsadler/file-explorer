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

Route::get('documents', 'DocumentsController@index');

Route::get('documents/{document}', 'DocumentsController@show');

Route::post('documents', 'DocumentsController@store');

Route::put('documents/{document}', 'DocumentsController@update');

Route::delete('documents/{document}', 'DocumentsController@delete');
