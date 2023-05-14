
const bcView = new BroadcastChannel("send-view");

bcView.addEventListener("message", async (e) => {
    const data = e.data;
    //alert(JSON.stringify(data));
    console.log(data);
    addDocument(data);
});
let addDocument = (data) => {
    let degree = document.getElementById("degree");
    let fname = document.getElementById("fname");
    let mssv = document.getElementById("mssv");
    let major = document.getElementById("major");
    let level = document.getElementById("level");

    degree.textContent = "Chúc Mừng " + data.degree;
    fname.textContent = data.fullName;
    mssv.textContent = data.mssv;
    major.textContent = "Chuyên Ngành " + data.major;
    level.textContent = data.level;
}
let removeChilds = () => {
    let graduation = document.querySelector("#graduation");
    graduation.childNodes.forEach((child) => child.remove());
};