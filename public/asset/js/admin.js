let url = "http://127.0.0.1:8000";

const bcEditDataTable = new BroadcastChannel("updateDataTable");
const bcView = new BroadcastChannel("send-view");
bcEditDataTable.addEventListener("message", async (e) => {
    const data = e.data;
    if(data.choice === "add") {

    } else if(data.choice === "delete") {
        console.log(data)
        await deleteRowDataTable(data.info);
    } else {

    }
    console.log(e);
});
let addRowDataTable = (data) => {
    let table = $("#dataTable").DataTable();

}
let deleteRowDataTable =  (data1) => {
    let table = $("#dataTable").DataTable();
    table.clear();
    // let table1 = $("#dataTable").DataTable({
    //     data: data1,
    //     columns: [
    //         {data: '1'},
    //         {data: '2'},
    //         {data: '3'},
    //         {data: '4'},
    //         {data: '5'},
    //     ],
    // });
    // let table1 = $("#dataTable").DataTable();
    // // var cell = table.cell(function(idx, value, node) {
    // //     if(value === data.mssv) {
    // //         console.log(value)
    // //     }
    // //     return value === data.mssv ? true : false;
    // // });
    // // var row = cell.index().row;
    // //table.row(row).remove().draw(); 
    // console.log(table1);
    // await table1.clear();
    // await table1.draw();
}
let windowPostSendView = (data) => {
    bcView.postMessage(data)
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
                },
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
