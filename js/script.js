let luotDat = 0;

function datMon(tenMon) {
    document.getElementById("luotDat").innerHTML = ++luotDat;
    alert("Bạn đã đặt: " + tenMon);
}

function timDoUong() {
    let ten = document.getElementById("timKiem").value.toLowerCase();
    let ketQua = document.getElementById("ketQua");

    if (ten == "")
        ketQua.innerHTML = "Vui lòng nhập tên đồ uống";
    else if (ten.includes("cà phê"))
        ketQua.innerHTML = "Đã tìm thấy cà phê";
    else if (ten.includes("trà"))
        ketQua.innerHTML = "Đã tìm thấy trà đào";
    else if (ten.includes("matcha"))
        ketQua.innerHTML = "Đã tìm thấy Matcha đá xay";
    else
        ketQua.innerHTML = "Không tìm thấy đồ uống";
}