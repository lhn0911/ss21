let dtoan = +prompt("Nhập điểm môn Toán:");
let dvan = +prompt("Nhập điểm môn Văn:");
let danh = +prompt("Nhập điểm môn Anh:");
let dtb = (dtoan + dvan + dtanh) / 3;

if (dtb >= 8.0 && dtb <= 10.0) {
    document.write( " ĐIỂM XẾP LOẠI GIỎI.");
    console.log( " ĐIỂM XẾP LOẠI GIỎI.");
} else if (dtb >= 6.5 && dtb < 8.0) {
    document.write(" ĐIỂM XẾP LOẠI KHÁ.");
    console.log(" ĐIỂM XẾP LOẠI KHÁ.");
} else if (dtb >= 5.0 && dtb < 6.5) {
    document.write(" ĐIỂM XẾP LOẠI TRUNG BÌNH.");
    console.log(" ĐIỂM XẾP LOẠI TRUNG BÌNH.");
} else {
    document.write(" ĐIỂM XẾP LOẠI YẾU.");
    console.log(" ĐIỂM XẾP LOẠI YẾU.");
}

