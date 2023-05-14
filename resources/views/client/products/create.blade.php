

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    @vite(['resources/js/app.js'])
</head>
<body>
<form action="" method="post">
    <label for="MaSP">Ma SP</label>
    <input type="text" name = "MaSP">
    <br> <br>
    <label for="MaSP">Tên SP</label>
    <input type="text" name = "TenSP">
    <br> <br>
    <label for="MaSP">Gia SP</label>
    <input type="text" name = "MaSP">
    <input type="hidden" name="_token" value="{{ csrf_token() }}" />
    <br> <br>
    <input type="submit" value = "clicik" id ="cc">
    <br> <br>
    @for ($i = 0; $i < 10; $i++) 
        <h2>Value Current : <bold>{{$i + 1}}</bold></h2>
    @endfor
</form>
</body>
</html>