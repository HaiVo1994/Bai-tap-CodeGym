let Circle = function(radius){
    this.radius = radius;
    this.getRadius = function(){
        return this.radius;
    }
    this.getColor = function(){
        return this.color;
    }
    this.setRadius = function(radius){
        this.radius = radius;
    }
    this.setColor = function(color){
        this.color = color;
    }
    this.getArea = function(){
        return Math.PI * Math.pow(this.radius,2);
    }

}

function show(){
    let hinhTron = new Circle(120);
    let radius = hinhTron.getRadius();
    let area = hinhTron.getArea();
    alert("radius: " + radius + "; area: " + area);
}