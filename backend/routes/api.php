<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\PersonController;
use App\Http\Controllers\API\ProductoController;
use App\Http\Controllers\API\CategoriaController;
use App\Http\Controllers\API\PedidoController;
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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('person')->group(function () {
    Route::get('/',[ PersonController::class, 'getAll']);
    Route::post('/',[ PersonController::class, 'create']);
    Route::delete('/{id}',[ PersonController::class, 'delete']);
    Route::get('/{id}',[ PersonController::class, 'get']);
    Route::put('/{id}',[ PersonController::class, 'update']);
});

Route::prefix('producto')->group(function () {
    Route::get('/',[ ProductoController::class, 'getAll']);
    Route::post('/',[ ProductoController::class, 'create']);
    Route::delete('/{id}',[ ProductoController::class, 'delete']);
    Route::get('/{id}',[ ProductoController::class, 'get']);
    Route::put('/{id}',[ ProductoController::class, 'update']);
});

Route::prefix('categoria')->group(function () {
    Route::get('/',[ CategoriaController::class, 'getAll']);
    Route::post('/',[ CategoriaController::class, 'create']);
    Route::delete('/{id}',[ CategoriaController::class, 'delete']);
    Route::get('/{id}',[ CategoriaController::class, 'get']);
    Route::put('/{id}',[ CategoriaController::class, 'update']);
});

Route::prefix('pedido')->group(function () {
    Route::get('/',[ PedidoController::class, 'getAll']);
    Route::post('/',[ PedidoController::class, 'create']);
    Route::delete('/{id}',[ PedidoController::class, 'delete']);
    Route::get('/{id}',[ PedidoController::class, 'get']);
    Route::put('/{id}',[ PedidoController::class, 'update']);
});