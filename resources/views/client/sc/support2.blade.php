<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SOCKET-CLIENT</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
    <link rel="stylesheet" href="https://cdn.datatables.net/1.13.4/css/jquery.dataTables.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/material-components-web/4.0.0/material-components-web.min.css">
    <link rel="stylesheet" href="https://cdn.datatables.net/1.13.4/css/dataTables.material.min.css">
    <script src="https://cdn.datatables.net/1.13.4/js/jquery.dataTables.min.js"></script>
    <script src="https://cdn.datatables.net/1.13.4/js/dataTables.material.min.js"></script>
    @vite(['resources/js/app.js'])
</head>
<body>
    <h1>SUPPORTED 2</h1>
    <form action="/upload" method="post" enctype="multipart/form-data">
        <input type="file" name="fileExcel" id="fileExcel">
        <input type="submit" value="submit">
        <input type="hidden" name="_token" value="{{ csrf_token() }}" />

    </form>
    <table id="dataTable" class="display compact" styl  e="width: 100vw">
        <thead>
            <tr>
                <th>#</th>
                <th>MSSV</th>
                <th>Họ và Tên</th>
                <th>Chuyên Ngành</th>
                <th>Bằng Cấp</th>
                <th>Level</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($users as $index => $user)
                <tr>
                    <td class="index">{{$index + 1}}</td>
                    <td class="mssv">{{$user->mssv}}</td>
                    <td class="fname">{{$user->fullName}}</td>
                    <td class="major">{{$user->major}}</td>
                    <td class="degree">{{$user->degree}}</td>
                    <td class="level">{{$user->level}}</td>
                    <td class="action">
                        <form action="{{$user->mssv}}/add" method="post">
                        <input type="hidden" name="_token" value="{{ csrf_token() }}" />
                        <button class="add" onclick="handleUpdateDataTable({{ json_encode($user) }}, event)">Thêm</button>
                        </form>
                        <form action="/support/{{$user->mssv}}/delete" method="post">
                        <input type="hidden" name="_token" value="{{ csrf_token() }}" />
                        <button type="submit" class="delete" onclick="handleUpdateDataTable({{ json_encode($user) }}, event)">Xóa</button>
                        </form>
                        <form action="/{{$user->mssv}}/edit" method="post">
                        <input type="hidden" name="_token" value="{{ csrf_token() }}" />
                        <button class="edit" onclick="handleUpdateDataTable({{ json_encode($user) }}, event)">Sửa</button>
                        </form>
                    </td>
                </tr>
            @endforeach
        </tbody>
    </table>
    <script src="https://cdn.socket.io/4.6.0/socket.io.min.js" integrity="sha384-c79GN5VsunZvi+Q/WObgk2in0CbZsHnjEqvFxC5DxHn9lTfNce2WW6h2pH6u/kF+" crossorigin="anonymous"></script>
    <!-- <script src="{{asset('asset/js/socketio_script.js')}}"></script> -->
    <script src="{{asset('asset/js/another.js')}}"></script>

</body>
</html>