<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="{{route('graduations.search')}}" method="post" style = "width: 100%; margin: 80px auto;">
        <input type="text" name="mssv" value="">
        <input type="submit">
        <input type="hidden" name="_token" value="{{ csrf_token() }}" />
    <br> <br>
    </form>
</body>
</html>