const OBJECT_LIMIT = 5,
    OBJECT_SIZE = 60;
    XLIMIT = 5,
    YLIMIT = 10,
    OBJECT_Y_LIMIT = YLIMIT - 3;
    CAR_WIDTH = 60,
    CAR_HEIGHT = 60;
let screen = document.getElementById("main"),
    screenWidth = CAR_WIDTH * XLIMIT,
    screenHeight = CAR_HEIGHT * YLIMIT
screen.style.width = screenWidth + "px";
screen.style.height = screenHeight + "px";

function setLocation(obj, id){
    let location = document.getElementById(id);
    location.style.left = obj.getX() + "px";
    location.style.top = obj.getY() + "px";
}

function carRight(car){
    let limit = screenWidth - CAR_WIDTH;
    if (car.getX()<limit){
        car.moveRight(CAR_WIDTH);
    }
    setLocation(car, "car");
}
function carLeft(car){
    if (car.getX()>=CAR_WIDTH){
        car.moveLeft(CAR_WIDTH);
    }
    setLocation(car, "car");
}
function carUp(car){
    if (car.getY()>=CAR_HEIGHT){
        car.moveUp(CAR_HEIGHT);
    }
    setLocation(car, "car");    
}
function carDown(car){
    let limit = screenHeight - CAR_HEIGHT; 
    if (car.getY() < limit){
        car.moveDown(CAR_HEIGHT);
    }
    setLocation(car, "car");
}

function setPoint(point){
    document.getElementById("point").value = point;
}
function checkCarTouchObject(car, arr){
    for (let i=0; i<arr.length; i++){
        if (arr[i].checkTouch(car)){
            return i;
        }
    }
    return -1;    
}
function reRandom(giftObjiect, barrierAray){
    for (let i=0; i<barrierAray.length;i++){
        if (barrierAray[i].checkTouch(giftObjiect)){
            return true;
        }
    }
    return false;
}
function docReady() {
    let car = new Car(0, 480, CAR_WIDTH, CAR_HEIGHT),
        barrierNumber = Math.floor( Math.random() * OBJECT_LIMIT + 1),
        giftNumber = Math.floor( Math.random() * OBJECT_LIMIT + 1);

    setLocation(car, "car");
    setPoint(car.getPoint());
    
    let barrier = new Array(barrierNumber),
        gift = new Array(giftNumber);
    
    for (let i=0; i< barrierNumber;i++){
        barrier[i] = new Barrier(0, 0, OBJECT_SIZE, OBJECT_SIZE);
        barrier[i].randomLocation(XLIMIT, OBJECT_Y_LIMIT);
        screen.innerHTML += "<img src='img/Barrier.jpg' class='barrier' id='barrier" + i + "'></img>";
        setLocation(barrier[i], ("barrier" + i));
    }
    for (let i=0; i< giftNumber;i++){
        gift[i] = new Gift(0, 0, OBJECT_SIZE, OBJECT_SIZE);
        do{
            gift[i].randomLocation(XLIMIT, OBJECT_Y_LIMIT);
        }while(reRandom(gift[i], barrier));
        screen.innerHTML += "<img src='img/gift.jpg' class='gift' id='gift" + i + "'></img>";
        setLocation(gift[i], ("gift" + i));
    }

    let interval_obj = setInterval(function(){
        if (car.getState()){
            carUp(car);
            if (car.getY()<CAR_HEIGHT){
                car.setState(false);
                alert("Trò chơi kết thúc");
            }
            let locationTouch = checkCarTouchObject(car, barrier);
            if (locationTouch != -1){
                car.setState(false);
                alert("Trò chơi kết thúc");
            }
            locationTouch = checkCarTouchObject(car, gift);
            if (locationTouch!=-1){
                gift[locationTouch].checkCarTouch(car, XLIMIT, YLIMIT);
                setPoint(car.getPoint());
                while(reRandom(gift[locationTouch], barrier)){
                    gift[locationTouch].randomLocation(XLIMIT, OBJECT_Y_LIMIT);
                }
                setLocation(gift[locationTouch], ("gift"+locationTouch));
            }            
        }
        else{
            clearInterval(interval_obj);
        }
           
    }, 1000);
    
    window.addEventListener('keydown', function(evt){
        if (car.getState()){
            let locationTouch = -1;
            switch (evt.keyCode) {
                case 37:
                    carLeft(car);
                    break;
                case 39:
                    carRight(car);
                    break;
                case 38:
                    carUp(car);
                    break;
                case 40:
                    carDown(car);
                    break;
                case 17:
                    carUp(car);
                    locationTouch = checkCarTouchObject(car, barrier);
                    if (locationTouch != -1){
                        car.setState(false);
                        alert("Trò chơi kết thúc");
                    }
                    locationTouch = checkCarTouchObject(car, gift);
                    if (locationTouch!=-1){
                        gift[locationTouch].checkCarTouch(car, XLIMIT, YLIMIT);
                        setPoint(car.getPoint());
                        while(reRandom(gift[locationTouch], barrier)){
                            gift[locationTouch].randomLocation(XLIMIT, OBJECT_Y_LIMIT);
                        }
                        setLocation(gift[locationTouch], ("gift"+locationTouch));
                    }
                    carUp(car);
            }
            locationTouch = checkCarTouchObject(car, barrier);
            if (locationTouch != -1){
                car.setState(false);
                alert("Trò chơi kết thúc");
            }
            locationTouch = checkCarTouchObject(car, gift);
            if (locationTouch!=-1){
                gift[locationTouch].checkCarTouch(car, XLIMIT, YLIMIT);
                setPoint(car.getPoint());
                while(reRandom(gift[locationTouch], barrier)){
                    gift[locationTouch].randomLocation(XLIMIT, OBJECT_Y_LIMIT);
                }
                setLocation(gift[locationTouch], ("gift"+locationTouch));
            }
        }    
    });
}