//bài tập 1: Quản lý tuyển sinh
function chooseArea() {
  var area = document.getElementById("member1").value;
  var diemArea;
  switch (area) {
    case "A":
      diemArea = 2;
      break;
    case "B":
      diemArea = 1;
      break;
    case "C":
      diemArea = 0.5;
      break;
    default:
      diemArea = 0;
      break;
  }
  return diemArea;
}

function chooseObject(){
    var chooseObject = document.getElementById("member2").value;
    var diemObj;
    switch (chooseObject) {
        case "One":
          diemObj = 2.5;
          break;
        case "Two":
          diemObj = 1.5;
          break;
        case "Three":
          diemObj = 1;
          break;
        default:
          diemObj = 0;
          break;
      }
      return diemObj;
}

function summary(numA, numB, numC){
    var sumMary;
    sumMary = numA + numB + numC;
    return sumMary;
}


function result1(){
    var area = chooseArea();
    var object = chooseObject();
    
    var numA = +document.getElementById("number1").value;
    var numB = +document.getElementById("number2").value;
    var numC = +document.getElementById("number3").value;
    var diemChuan = +document.getElementById("number4").value;
    var TongDiem;
    var ThongBao;
    TongDiem = summary(numA, numB, numC) + area + object;
    if (numA <= 0 || numB <= 0 || numC <= 0){
        
        ThongBao = "bạn bị điểm liệt, nên bạn không đậu được đâu."
    } else if (TongDiem < diemChuan) {
        ThongBao = "Rớt. " + "tổng điểm của bạn: " + TongDiem ; 

    } else {
        ThongBao = "Đậu rồi Cưng. Bật độ chế độ bay lên." + "tổng điểm của bạn:" + TongDiem;
    }
    document.getElementById("result1").style.display = "block";
    document.getElementById("ketQua").innerHTML = ThongBao;

}


//bài tập 2
function tinhTien(){
    var soKw = +document.getElementById("number7").value;
    var tongTien = 0;
    if (soKw == 0){
        alert("sai giá trị");
    } else if (soKw <= 50){
        tongTien += soKw * 500;
    } else if (soKw <= 100){
        tongTien += 50 * 500 + (soKw - 50) * 650;
    } else if (soKw <= 200){
        tongTien += 50 * 500 + 50 * 650 + (soKw - 100) * 850;
    } else if ( soKw <= 350){
        tongTien += 50 * 500 + 50 * 650 + 100 * 850 + (soKw - 200) * 1100;  
    } else{ 
        tongTien += 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soKw - 350) * 1300;

    }
    return tongTien;
}
function result2(){
    var nameObject = document.getElementById("nameObj").value;
    var thongBaoTien;
    var tienDien = tinhTien();
    thongBaoTien = "họ tên là: " + nameObject + " ,số tiền là: " + tienDien.toLocaleString() + "$"
    document.getElementById("result2").style.display = "block";
    document.getElementById("Pay").innerHTML = thongBaoTien;
}