<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class DocumentsController extends Controller {
  public function index() {
    $filesInFolder = \Storage::files('.');     
    foreach($filesInFolder as $path) { 
          $file = pathinfo($path);
          echo $file['filename'] ;
     } 
  }
  
  public function store(Request $request) {
    $path = $request->file('file')->storeAs(
      'uploads', $request->document()->id);
  }
}
