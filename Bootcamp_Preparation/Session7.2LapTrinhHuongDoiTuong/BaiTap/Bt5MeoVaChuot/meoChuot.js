class Animal{
    constructor(name, weight, speed){
        this.name = name;
        this.weight = weight;
        this.speed = speed;
    }
    getWeight(){
        return this.weight;
    }
    getSpeed(){
        return this.speed;
    }
    say(){
    }
}

class Mouse extends Animal{
    constructor(name, weight, speed){
        super(name, weight, speed);
        this.state = true;
    }
    say(){
        return "chít, chít";
    }
    getState(){
        return this.state;
    }
}

class Cat extends Animal{
    constructor(name, weight, speed){
        super(name, weight, speed);
    }
    getWeight(){
        return this.weight;
    }
    getSpeed(){
        return this.speed;
    }
    say(){
        return "Meo, Meo";
    }
    catchMouse(mouse){
        return this.speed > mouse.getSpeed();
    }
    eatMouse(mouse){
        if (this.catchMouse(mouse) && mouse.getState()){
            this.weight += mouse.getWeight();
        }
    }
}