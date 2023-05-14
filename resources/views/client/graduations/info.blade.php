


<div id="graduations">
    @foreach ($user as $us)
        <div id="mssv">MSSV : {{$us->mssv}}</div>
        <div id="fname">Full Name : {{$us->fullName}}</div>
        <div id="major">Major : {{$us->major}}</div>
        <div id="degree">Degree : {{$us->degree}}</div>
        <div id="level">Level : {{$us->level}}</div>
    @endforeach
</div>