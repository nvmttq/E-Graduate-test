<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
//use DB;
class ProductsController extends Controller
{
    public function index() {
        return view('client.products.index');
    }
    public function getCreate() {
        return view('client.products.create');
    }
    public function postCreate(Request $request) {
        $input = $request->collect();
        DB::insert('insert into products (MaSP, TenSP, GiaSP) values (?, ?, ?)', [$input['MaSP'], $input['TenSP'], $input['GiaSP']]);
        return view('client.products.create');
    }
}
