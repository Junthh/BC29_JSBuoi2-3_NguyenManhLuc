/*
* Bài 1

- Đầu vào:
+ luong mot ngay: 100000
+ Nhap so ngay lam

- Xử lý:
+ luong = luong mot ngay * so ngay lam

- Đầu ra:
+ luong

*/

document.getElementById("btnTinh").onclick = function(){
    var ngay = document.getElementById("ngayLam").value;
    
    var luong = ngay * 100000;
    var currentFormat = new Intl.NumberFormat("vn-VN");

    document.getElementById("show").innerHTML = currentFormat.format(luong);
};



/*
* Bài 2

- Đầu vào:
+ Nhap so thu nhat
+ Nhap so thu hai
+ Nhap so thu ba
+ Nhap so thu bon
+ Nhap so thu nam

- Xử lý:
+ gia tri trung binh = (so thu nhat + so thu hai + so thu ba + so thu tu + so thu nam) / 5

- Đầu ra:
+ gia tri trung binh

*/

document.getElementById("tinhTB").onclick = function(){
    var so_1 = document.getElementById("number_1").value;
    var so_2 = document.getElementById("number_2").value;
    var so_3 = document.getElementById("number_3").value;
    var so_4 = document.getElementById("number_4").value;
    var so_5 = document.getElementById("number_5").value;
    
    so_1 = parseFloat(so_1);
    so_2 = parseFloat(so_2);
    so_3 = parseFloat(so_3);
    so_4 = parseFloat(so_4);
    so_5 = parseFloat(so_5);
    var gtTB = (so_1 + so_2 + so_3 + so_4 + so_5) / 5;

    document.getElementById("show_1").innerHTML = gtTB;
};

/*
* Bài 3

- Đầu vào:
+ 1 USD = 23500 VND
+ Nhap USD

- Xử lý:
+  tong VND = USD nguoi dung nhap * 23.500

- Đầu ra:
+  tong VND

*/

document.getElementById("doi").onclick = function(){
    var moneyUsd = document.getElementById("tienUsd").value;

    var sumVnd = moneyUsd * 23.500;

    document.getElementById("show_2").innerHTML = sumVnd + " VND";
};

/*
* Bài 4

- Đầu vào:
+ Nhap chieu dai
+ Nhap chieu rong

- Xử lý:
+ chu vi = (chieu dai + chieu rong) * 2
+ dien tich = chieu dai * chieu rong

- Đầu ra:
+ chu vi
+ dien tich

*/

document.getElementById("tinhHCN").onclick = function(){
    var lengtH = document.getElementById("chieuDai").value;
    var withD = document.getElementById("chieuRong").value;

    lengtH = parseFloat(lengtH);
    withD = parseFloat(withD);
    var perimeter = (lengtH + withD) * 2;
    var acreage = lengtH * withD;

    document.getElementById("show_3").innerHTML = "Chu vi HCN: " + perimeter + "<br \> Diện tích HCN: " + acreage;
};


/* 
*Bài 5

- Đầu vào:
+ Nhap so thu nhat
+ Nhap so thu hai

- Xử lý:
+ tach lay so hang don vi cua so thu nhat: hangDVSoThuNhat=  so thu nhat % 10
+ tach lay so hang chuc cua so thu nhat: hangChucSoThuNhat = Math.floor(soTHuNhat % 100 / 10);
+ tongSothuNhat = hangDVSoThuNhat + hangChucSoThuNhat
+ tach lay so hang don vi cua so thu hai: hangDVSoThuHai = so thu hai % 10
+ tach lay so hang chuc cua so thu hai: hangChucSoThuHai = Math.floor(soTHuHai  % 100 / 10);
+ tongSoThuHai =hangDVSoThuHai + hangChucSoThuHai

- Đầu ra:
+ tongSothuNhat
+ tongSothuHai

*/

document.getElementById("tinhKS").onclick = function(){
    var so1 = document.getElementById("num_1").value;
    var so2 = document.getElementById("num_2").value;

    hangDVSo1 = so1 % 10;
    hangChucSo1 = Math.floor(so1 % 100 / 10);
    tongSo1 = hangChucSo1 + hangDVSo1;
    hangDVSo2 = so2 % 10;
    hangChucSo2 = Math.floor(so2 % 100 / 10);
    tongSo2 = hangChucSo2 + hangDVSo2;

    document.getElementById("show_4").innerHTML = "Tổng ký số thứ nhất: " + tongSo1 + "<br \> Tổng Ký số thứ hai: " + tongSo2;
};