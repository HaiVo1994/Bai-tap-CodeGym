class Apple{
    constructor(weight){
        if ((weight < 10) || (Number.isNaN(weight)))
            this.weight = 10;
        else
            this.weight = weight;
    }

    decrease(){
        if (!this.isEmpty())
            this.weight--;
    }
    isEmpty(){
        return !(this.weight>0);
    }
    getWeight(){
        return this.weight;
    }
}

class Human{
    constructor(name, gender, weight){
        this.name = name;
        this.gender = gender;
        this.weight = weight;
    }
    isMale(){
        return this.gender;
    }
    setGender(gender){
        this.gender = gender;
    }
    checkApple(apple){
        return !apple.isEmpty();
    }
    eat(apple, id){
        let check = this.checkApple(apple),
            string = " muốn ăn táo nhưng không còn miếng nào"; 
        if (check){
            apple.decrease();
            this.weight++;
            string = " đã ăn một miếng táo";
        }
        let inner = "<p class='alert'>" + this.name + string + "</p>";
        document.getElementById(id).innerHTML += inner;
        return check;
    }
    say(string, id){
        let inner = "<p class='chat'>" + this.name + " nói:" + string + "</p>"
        document.getElementById(id).innerHTML += inner;
    }

    getName(){
        return this.name;
    }
    getGender(){
        return this.gender;
    }
    getWeight(){
        return this.weight;
    }
}