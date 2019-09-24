class Location{
    constructor (x, y, width, height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    
    getX(){
        return this.x;
    }
    getY(){
        return this.y;
    }
    getWidth(){
        return this.width;
    }
    getHeight(){
        return this.height;
    }
    checkTouch(obj){
        return ((obj.getX()==this.x) && (obj.getY()==this.y))
    }
    randomLocation(xLimit, yLimit){
        this.x = this.width * Math.floor(Math.random() * xLimit);
        this.y = this.height * Math.floor(Math.random() * yLimit);
    }
    setLocation(x,y){
        this.x = x;
        this.y = y;
    }
}

class Car extends Location{
    constructor(x, y, width, height){
        super(x, y, width, height);
        this.state = true;      
        this.point = 0;
    }
    
    moveRight(move){
        this.x += move;
    }
    moveLeft(move){
        this.x -= move;
    }
    moveUp(move){
        this.y -= move;
    }
    moveDown(move){
        this.y += move;
    }
    setState(state){
        this.state = state;
    }
    getState(){
        return this.state;
    }
    addPoint(){
        this.point++;
    }
    getPoint(){
        return this.point;
    }
}

class Gift extends Location{
    constructor(x, y, width, height){
        super(x, y, width, height);
    }
    
    checkCarTouch(car, xLimit, yLimit){
        car.addPoint();
        super.randomLocation(xLimit, yLimit);
    }
}

class Barrier extends Location{
    constructor(x, y, width, height){
        super(x, y, width, height);
        this.point = 0;
    }
}