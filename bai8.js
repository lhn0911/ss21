let weight = +prompt("Nhập cân nặng của bạn (kg):");
let height = +prompt("Nhập chiều cao của bạn (m):");
let bmi = weight / (height **2);

if (BMI < 18.5) {
    document.write("Chỉ số BMI của bạn là: " + bmi + ' Gay');
    console.log("Chỉ số BMI của bạn là: " + bmi + "Gay.");
} else if (BMI >= 18.5 && BMI < 25) {
    document.write("Chỉ số BMI của bạn là: " + bmi + "Bình thường.");
    console.log("Chỉ số BMI của bạn là: " + bmi + "Bình thường.");
} else if (BMI == 25) {
    document.write("Chỉ số BMI của bạn là: " + bmi + "Thừa cân.");
    console.log("Chỉ số BMI của bạn là: " + bmi + "Thừa cân.");
} else if (BMI > 25 && BMI < 30) {
    document.write("Chỉ số BMI của bạn là: " + bmi + "Tiền béo phì.");
    console.log("Chỉ số BMI của bạn là: " + bmi + "Tiền béo phì.");
} else if (BMI > 30 && BMI < 35) {
    document.write("Chỉ số BMI của bạn là: " + bmi + "Béo phì độ I.");
    console.log("Chỉ số BMI của bạn là: " + bmi + "Béo phì độ I.");
} else if (BMI >= 35 && BMI < 40) {
    documentco.write("Chỉ số BMI của bạn là: " + bmi + "Béo phì độ II.");
    console.log("Chỉ số BMI của bạn là: " + bmi + "Béo phì độ II.");
} else {
    document.write("Chỉ số BMI của bạn là: " + bmi + "Béo phì độ III.");
    console.log("Chỉ số BMI của bạn là: " + bmi + "Béo phì độ III.");
}
