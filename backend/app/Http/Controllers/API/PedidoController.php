<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
Use App\Models\Pedido;
Use Log;

class PedidoController extends Controller
{

    public function getAll(){
      $data = Pedido::get();
      return response()->json($data, 200);
    }

    public function create(Request $request){


      $data['producto'] = $request['producto'];
      $data['cantidad'] = $request['cantidad'];
      $data['precio'] = $request['precio'];
      $data['fechapago'] = $request['fechapago'];
      $data['metodopago'] = $request['metodopago'];
      $data['estado'] = $request['estado'];


      Pedido::create($data);
      return response()->json([
          'message' => "Successfully created",
          'success' => true
      ], 200);
    }

    public function delete($id){
      $res = Pedido::find($id)->delete();
      return response()->json([
          'message' => "Successfully deleted",
          'success' => true
      ], 200);
    }

    public function get($id){
      $data = Pedido::find($id);
      return response()->json($data, 200);
    }

    public function update(Request $request,$id){

      $data['producto'] = $request['producto'];
      $data['cantidad'] = $request['cantidad'];
      $data['precio'] = $request['precio'];
      $data['fechapago'] = $request['fechapago'];
      $data['metodopago'] = $request['metodopago'];
      $data['estado'] = $request['estado'];


      Pedido::find($id)->update($data);
      return response()->json([
          'message' => "Successfully updated",
          'success' => true
      ], 200);
    }
}
