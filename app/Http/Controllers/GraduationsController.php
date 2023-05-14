<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
//use DB;
class GraduationsController extends Controller
{
    public function index() {
        return view('client.graduations.index');
    }
    public function getMssv($slug) {
        $user = DB::select('SELECT * FROM graduations WHERE mssv = ?', [$slug]);
        return view('client.graduations.info', ['user' => $user]);
    }
    public function store(Request $request) {
        $input = $request->input('mssv');
        return redirect()->route('graduations.mssv', ['slug' => $input]);
    }
}
