function Rectangle(height, width){
    this.height = height;
    this.width = width;

    this.setHeightWidth = function(height, width){
        this.height = height;
        this.width = width;
    }
    this.area = function(){
        return this.height * this.width;
    }
    this.perimeter = function(){
        return 2*(this.height + this.width);
    }
    this.draw = function(idCanvas){
        let  canvas = document.getElementById(idCanvas).getContext("2d");
        canvas.fillStyle = "#FF0000";
        canvas.fillRect(200, 200, this.width, this.height);
    }
}
function show(){
    let height = 400,
        width = 500;
    let hinh = new Rectangle(height, width);
    document.getElementById("firstMessenge").innerHTML = "Hình chữ nhật rộng " + width + " cao " + height + "<br>";
    hinh.draw("draw");
    height = 500,
    width = 700;
    hinh.setHeightWidth(height, width);
    document.getElementById("secondMessenge").innerHTML = "Hình chữ nhật rộng" + width + " cao " + height + " có <br>"
            + "Chu vi " + hinh.perimeter() + "<br>"
            + "Diện tích " + hinh.area();
}