let product = ["Thịt","Cá"];
let idTable = "displayTable";
let idAdd = "addProduct";
function display(){
    let table = document.getElementById(idTable);
    let countProduct = product.length;
    table.innerHTML =  "<tr>"
    + "<th>TT</th>"
    + "<th>Tên Sản Phẩm</th>"
    + "<th>"+ countProduct +" Sản Phẩm</th>"
    + "<th></th>"
    + "</tr>";

    for (let i = 0; i<countProduct; i++){
        let add = "<tr>"
            +"<td>"+ (i+1) +"</td>"
            +"<td><input type='text' value='" + product[i] + "' id='product"+i+"'></td>"
            +"<td><input type='button' value='Sửa' onclick='repair(" +i+ ")'></td>"
            +"<td><input type='button' value='Xóa' onclick='erase(" +i+ ")'></td>"
            +"<tr>";
        table.innerHTML += add;
    }
}

function repair(local){
    let idValue = "product" + local;
    let value = document.getElementById(idValue).value;
    product[local] = value;
    display();    
}

function erase(local){
    product.splice(local,1);
    display();
}

function plus(){
    let countProduct = product.length;
    let addInput = document.getElementById(idAdd);
    product[countProduct] = addInput.value;
    addInput.value = "";
    display();
}

