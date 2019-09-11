let nhapChieuDai = prompt("Nhập chiều dài",'');
let nhapChieuRong = prompt("Nhập chiều rộng",'');

let chieuDai = parseInt(nhapChieuDai);
let chieuRong = parseInt(nhapChieuRong);

let dienTich = chieuDai * chieuRong;
 document.write("Diện tích của hình chữ nhật là: " + dienTich);