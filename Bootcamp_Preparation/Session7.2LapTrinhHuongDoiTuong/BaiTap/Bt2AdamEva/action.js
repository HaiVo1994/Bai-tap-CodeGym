let chatId =  'chat',
    Adam = new Human("Adam", true, 75),
    Eva = new Human("Eva", false, 54),
    apple = new Apple(12);

function showInfo(person){
    let infoTable = document.getElementById(person.getName());
    infoTable.innerHTML = "<p class= 'info'>Tên: "
        + "<span class= 'infoValue' id='" + person.getName() + "Name'>" + person.getName() + "</span></p>"
        + "<p class= 'info'>Giới Tính: "
        + "<span class= 'infoValue' id='" + person.getName() + "Gender'>" + (person.getGender()?"Nam":"Nữ") + "</span></p>"
        + "<p class= 'info'>Cân Nặng: "
        + "<span class= 'infoValue' id='" + person.getName() + "Weight'>" + person.getWeight() + "</span></p>"
        + "<div class= 'button'>"
        + "<input type='button' class='buttonAction' value='Ăn' id='" + person.getName() + "Eat'>"
        + "<input type='text' class='inputMessenge' id='" + person.getName() + "Say'>"
        + "<input type='button' class= 'buttonAction' value='Nói' id='" + person.getName() + "Chat'>"
        + "</div>";
}
function changeInfo(person){
    document.getElementById(person.getName() + "Name").innerHTML = person.getName();
    document.getElementById(person.getName() + "Gender").innerHTML = (person.getGender()?"Nam":"Nữ");
    document.getElementById(person.getName() + "Weight").innerHTML = person.getWeight();
}
function eat(person){
    person.eat(apple, chatId);
}
function changeWeightApple(){
    document.getElementById("appleInfo").innerHTML = apple.getWeight();
}
function chat(person){
    let input = document.getElementById(person.getName() + "Say"),
        chatInput = input.value;
    person.say(chatInput, chatId);
    input.value ="";
}
function show(){
    showInfo(Adam);
    showInfo(Eva);
    changeWeightApple();
    document.getElementById(Adam.getName() + "Eat").onclick = function(){
        eat(Adam);
        changeInfo(Adam);
        changeWeightApple();
    };
    document.getElementById(Adam.getName() + "Chat").onclick = function(){
        chat(Adam);
        changeInfo(Adam);
    }
    document.getElementById(Eva.getName() + "Eat").onclick = function(){
        eat(Eva);
        changeInfo(Eva);
        changeWeightApple();
    };
    document.getElementById(Eva.getName() + "Chat").onclick = function(){
        chat(Eva);
        changeInfo(Eva);
    }
}

