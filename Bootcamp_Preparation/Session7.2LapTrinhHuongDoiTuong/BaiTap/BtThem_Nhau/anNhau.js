class BoozePerson{
    constructor(name){
        this.name = name;
    }

    eat(food){
        return food.decrease();
    }
    drink(drinkable){
        return drinkable.decrease();
    }
}

class Food{
    constructor(name, weight){
        this.name = name;
        this.weight =weight;
    }

    decrease(){
        if (this.weight>0){
            this.weight--;
            return true;
        }
        return false;
    }
    info(){
        return "Mồi " + this.name + " còn " + this.weight + " miếng";
    }
}

class Drinkable{
    constructor(name, weight){
        this.name = name;
        this.weight =weight;
    }

    decrease(){
        if (this.weight>0){
            this.weight--;
            return true;
        }
        return false;
    }
    info(){
        return "Nước" + this.name + " còn " + this.weight + "lít";
    }
}