
var ref = window.location.href;
var hostName = window.location.hostname;
var socket_Admin;
var socket_View;
var socket_Support2;
var socket = io("http://127.0.0.1:3000/");
function handleSocketView(hostName) {
    var url = "http://" + hostName + ":3000/view";
    console.log(url);
    socket_View = io.connect(url);
    socket_View.emit("join");

    socket_View.on("soc_view_send", (data) => {
        removeChilds();
        alert(JSON.stringify(data));
        console.log(data);
        let degree = document.createElement("div");
        degree.id = "degree";
        degree.textContent = "Chúc mừng " + data.degree;
        let major = document.createElement("div");
        major.id = "major";
        major.textContent = "Chuyên ngành " + data.major;
        let fname = document.createElement("div");
        fname.id = "name";
        fname.textContent = data.fullName;
        let mssv = document.createElement("div");
        mssv.id = "mssv";
        mssv.textContent = data.mssv;
        let level = document.createElement("div");
        level.id = "level";
        level.textContent = data.level;
        document.querySelector("#graduation").appendChild(degree);
        document.querySelector("#graduation").appendChild(fname);
        document.querySelector("#graduation").appendChild(mssv);
        document.querySelector("#graduation").appendChild(major);
        document.querySelector("#graduation").appendChild(level);
    });
}
function handleSocketAdmin(hostName) {
    var url = "http://" + hostName + ":3000/admin";
    
    console.log(url);
    socket_Admin = io.connect(url);
    socket_Admin.emit("join");
    socket_Admin.on("deleteUser", (data1) => {
        console.log(data1)
        var myTable = $('#dataTable').DataTable();
        var cell = myTable.cell(function(idx, data, node) {
            if(data === data1.mssv) {
                console.log(data)
            }
            return data === data1.mssv ? true : false;
        });
        console.log(cell)
        var row = cell.index().row;
        console.log(row)
        myTable.row(row).remove().draw();  
        console.log("1",myTable.rows( {page:'current'} ).data());
       // row.remove().draw();
    })
}
function handleSocketSupport(hostName) {
    var url = "http://" + hostName + ":3000/support2";
    console.log(url);
    socket_Support2 = io.connect(url);
    socket_Support2.emit("join");
}
let removeChilds = () => {
    let graduation = document.querySelector("#graduation");
    graduation.childNodes.forEach((child) => child.remove());
};

console.log(ref);
if (ref.includes("view")) {
    handleSocketView(hostName);
    console.log("view");
} else if (ref.includes("admin")) {
    handleSocketAdmin(hostName);
} else if(ref.includes("support2")) {
    handleSocketSupport(hostName);
}
let handelDataTable = () => {
    $.extend(true, $.fn.dataTable.defaults, {
        scrollY: 400,
        columnDefs: [
            {
                targets: ["_all"],
                className: "mdc-data-table__cell",
            },
        ],
    });
    $(document).ready(function () {
        var table = $("#dataTable").DataTable({
            pagingType: "full_numbers",
            language: {
                paginate: {
                    first: "Đầu",
                    last: "Cuối",
                    next: "Tiếp",
                    previous: "Trước",
                },
                info: "Hiển thị _START_ đến _END_ của _TOTAL_ bản ghi",
                lengthMenu: "HIển thị _MENU_ bản ghi",
                search: "Tìm kiếm:",
                zeroRecords: "Không tìm thấy bản ghi nào phù hợp",
                infoEmpty: "0 bản ghi được tìm thấy",
                infoFiltered: "(từ _MAX_ total bản ghi)",
            },
            fixedColumns: true,
            order: [[3, "desc"]],
            columns: [
                {
                    data: "#",
                },
                {
                    data: "MSSV",
                },
                {
                    data: "Họ và Tên",
                },
                {
                    data: "Chuyên Ngành",
                },
                {
                    data: "Bằng Cấp",
                },
                {
                    data: "Level",
                },
                {
                    data: "Action",
                }
            ],
        });
        table
            .on("order.dt search.dt", function () {
                table
                    .column(0, { search: "applied", order: "applied" })
                    .nodes()
                    .each(function (cell, i) {
                        cell.innerHTML = i + 1;
                    });
            })
            .draw();
    });
};
handelDataTable();

let handleViewImage = async (data1) => {
    console.log(data1)
    const data = {
        stt: 1,
        mssv: "2124802010126",
        name: "Nguyen Van Minh",
        nganh: "CNTT",
        bang: "Tan cu nhan",
    };
    socket_Admin.emit("sendView", data1);
    console.log("123");
};
let handleDeleteUserFromDataTable = async (data) => {
    console.log(data)
    socket_Support2.emit("deleteUser", data);
    console.log("123");
};
