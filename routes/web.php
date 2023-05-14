<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\GraduationsController;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;
use Illuminate\Support\Facades\DB;
//use DB;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::get('/view', function () {
    return view('client.sc.mc');
});
Route::get('/admin', function () {
    $users = DB::select('SELECT * FROM graduations');
    return view('client.sc.admin', ['users' => $users]);
});
Route::get('/support2', function () {
    $users = DB::select('SELECT * FROM graduations');
    return view('client.sc.support2', ['users' => $users]);
});
Route::post('/upload', function(Request $req) {
    $file = $req->file($req->input('fileExcel'));
    $a = $file['fileExcel'];
    $filePath = $a->path();

    $data = Excel::toArray([], $filePath);
    dd($data);

});
Route::post("/support/{mssv}/delete", function ($slug) {

 //   $a = DB::delete('DELETE FROM graduations WHERE mssv = ?', [$slug]);
   // dd($a);
    $users = DB::select('SELECT * FROM graduations');
    return redirect('/support2');
});




Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
