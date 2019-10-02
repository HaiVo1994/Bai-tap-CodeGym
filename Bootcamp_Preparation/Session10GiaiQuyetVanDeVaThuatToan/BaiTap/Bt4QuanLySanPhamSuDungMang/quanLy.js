class ManageProduct{
    constructor (productArray, idTable, idAdd){
        this.productArray = productArray;
        this.idTable = idTable;
        this.idAdd = idAdd;
    }
    display(){
        let table = document.getElementById(this.idTable);
        let countProduct = this.productArray.length;
        table.innerHTML =  "<tr>"
        + "<th>TT</th>"
        + "<th>Tên Sản Phẩm</th>"
        + "<th>"+ countProduct +" Sản Phẩm</th>"
        + "<th></th>"
        + "</tr>";
    
        for (let i = 0; i<countProduct; i++){
            let add = "<tr>"
                +"<td>"+ (i+1) +"</td>"
                +"<td><input type='text' value='" + this.productArray[i] + "' id='product"+i+"'></td>"
                +"<td><input type='button' value='Sửa' onclick='repair(" +i+ ")'></td>"
                +"<td><input type='button' value='Xóa' onclick='erase(" +i+ ")'></td>"
                +"<tr>";
            table.innerHTML += add;
        }
    }
    repair(local){
        let idValue = "product" + local;
        let value = document.getElementById(idValue).value;
        this.productArray[local] = value;
        this.display();    
    }
    erase(local){
        this.productArray.splice(local,1);
        this.display();
    }
    plus(){
        let countProduct = this.productArray.length;
        let addInput = document.getElementById(this.idAdd);
        this.productArray[countProduct] = addInput.value;
        addInput.value = "";
        this.display();
    }
}
let productArray = ["Thịt","Cá"],
    idTable = "displayTable",
    idAdd = "addProduct",
    product = new ManageProduct(productArray, idTable, idAdd);
function display(){
    product.display();
}
function repair(local){
    product.repair(local);
}
function erase(local){
    product.erase(local);
}
function plus(){
    product.plus();
}



