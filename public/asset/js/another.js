let url = "http://127.0.0.1:8000";


const bcEditDataTable = new BroadcastChannel("updateDataTable");

let handleUpdateDataTable = (data,e) => {
    console.log(data, e.target)
    const choice = e.target.className
    console.log(choice)
    bcEditDataTable.postMessage({choice, info: data})
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
