let a = +prompt("Nhập số a:");
let b = +prompt("Nhập số b:");
let c = +prompt("Nhập số c:");
let nummax;

if (c >= b && c >= a) {
    nummax = c;
} else if (b >= a && b >= c) {
    nummax = b;
} else {
    nummax = a;
}
console.log("Số lớn nhất là  " + nummax);
document.write("Số lớn nhất là  " + nummax);
