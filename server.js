const express = require("express");
const app = express();

const server = require("http").createServer(app);
const io = require("socket.io")(server, {
    cors: { origin: "*" },
});
const soc_View = io.of("/view");
const soc_Admin = io.of("/admin");
const soc_Support2 = io.of("/support2");
var view;
io.on("connection", (socket) => {
    console.log(socket.id);
});

soc_View.on("connection", (socket) => {
    socket.on("join", () => {
        console.log("view -> " + socket.id);
    });
    view = socket;
    socket.join("room1");
    socket.on("collect_data", (data) => {
        socket.emit("collect_data", data);
    });
});
soc_Admin.on("connection", (socket1) => {
    socket1.on("join", () => {
        console.log("admin -> " + socket1.id);
    });
    // socket1.join("room1")
    socket1.on("sendView", async (data) => {
        soc_View.emit("soc_view_send", data);
    });
});
soc_Support2.on("connection", (socket1) => {
    socket1.on("join", () => {
        console.log("support2 -> " + socket1.id);
    });
    // socket1.join("room1")
    socket1.on("deleteUser", async (data) => {
        soc_Admin.emit("deleteUser", data);
    });
});
server.listen(3000, () => {
    console.log("SERVER IS RUNNING!!!");
});
