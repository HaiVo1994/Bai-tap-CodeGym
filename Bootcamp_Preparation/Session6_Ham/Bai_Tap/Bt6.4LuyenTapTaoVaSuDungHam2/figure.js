function square(number){
    return number * number;
}

const PI = 3.1416
function circlePerimeter(radius){
    return 2 * radius * PI;
}
function circleArea(radius){
    return PI * square(radius);
}
function factorial(number){
    if (number==0)
        return 1;
    return number * factorial(number-1);
}

function checkIsNumber(testNumber){
    let check = Number(testNumber);
    if (isNaN(check))
        return false;
    return true;
}

function compareNumber(firstNumber, secondNumber, thirdNumber){
    if (firstNumber>secondNumber){
        if (firstNumber>thirdNumber)
            return firstNumber;
    }
    else{
        if (secondNumber>thirdNumber)
            return secondNumber;
    }
    return thirdNumber;
}

function checkPlus(number){
    if (number>0)
        return true;
    return false;
}

function transferNumber(objectTranfer){
    let transfer = objectTranfer.number1;
    objectTranfer.number1 = objectTranfer.number2;
    objectTranfer.number2 = transfer;
}

function upsetArray(objectTranfer){
    let start = 0,
        end = objectTranfer.arr.length;
    while (start<end){ 
        let tranfer = objectTranfer.arr[start];
        objectTranfer.arr[start] = objectTranfer.arr[end];
        objectTranfer.arr[end] = tranfer;
        start++;
        end--;
    }
}

function findCharacterOnString(word, character){
    let string = word.toString();
    for (let i=0; i<string.length;i++){
        if (string[i] == character)
            return i;
    }
    return -1;
}