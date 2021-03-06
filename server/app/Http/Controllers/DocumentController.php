<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class DocumentController extends Controller {
  public function index() {
    $filesInFolder = \Storage::files('./uploads');
    $files = array();
    foreach($filesInFolder as $path) {
      $file = pathinfo($path);

      $data = array(
      'filename' => (array_key_exists("basename", $file) ? $file["basename"] : 'unspecified'),
      'filetype' => (array_key_exists("extension", $file) ? $file["extension"] : 'unspecified')
      );
      array_push($files, $data);
    }
    return response()->json($files);
  }

  public function store(Request $request) {
    if ($request->hasFile('file')) {
      $name = e($request->file('file')->getClientOriginalName());
      $path = e($request->file('file')->storeAs('uploads', $name));
      return ($path !== NULL ?
      response()->json(array('status' => 'success', 'message' => 'File successfully uploaded', 'uploaded-path' => '/storage/uploads/'.$name))
      : response()->json(array('status' => 'error', 'message' => 'Failed to upload file')));
    } else {
        return response()->json(array('status' => 'failure', 'message' => 'Failed to upload file, double check filesize < 2MB'));
    }
  }

  public function destroy(Request $request) {
    $req = json_decode($request->getContent());
    $filename = e($req->file);
    $deleted = false;
    if (Storage::exists('./uploads'.'/'.$filename)) {
        Storage::delete('./uploads'.'/'.$filename);
        $deleted = true;
    }
    return response()->json(array('status' => $deleted));
  }
}
