function inputSizeArray(messenge){
    let input = 0 ;
    do{
        input = parseInt(prompt(messenge))
    }while (input<10);
    return input;
}
function inputSizeMatrix(firstMessenge, secondMessenge){
    let input =[inputSizeArray(firstMessenge),inputSizeArray(secondMessenge)];
    return input;
}

function returnRandom(number){
    return Math.floor( Math.random() * number + 1);
}
function createArray(sizeArray){
    let arr = [];
    for (let i=0; i<sizeArray;i++){
        arr[i] = returnRandom(100);
    }
    return arr;
}
function createMatrix(height, width){
    let arr = [];
    for (let i=0; i<height; i++){
        arr[i] = [];
        for (let j=0;j<width;j++){
            arr[i][j] = returnRandom(100);
        }
    }
    return arr;
}
function checkPrimeNumber(checkNumber){
    let sqrtNumber = parseInt(Math.sqrt(checkNumber));

    for (let i=2; i<=sqrtNumber ;i++){
        let check = checkNumber % i;
        if (check === 0){
            return false;
        }
    }

    return true;
}
function countPrimeNumberArray(array, size){
    let count =0
    for (let i=0; i<size;i++){
        if (checkPrimeNumber(array[i]))
            count++;
    }
    return count;
}
function countPrimeNumberMatrix(matrix, height, width){
    let count = 0;
    for (let i=0; i<height;i++){
        count += countPrimeNumberArray(matrix[i], width);
    }
    return count;
}

function displayArray(array, sizeArray){
    for (let i=0;i<sizeArray;i++){
        document.write(array[i] + "; ");
    }
}
function displayMatrix(matrix, height, width){
    for (let i=0; i< height;i++){
        displayArray(matrix[i], width);
        document.write("<br>");
    }
}

function show(){
    let input = inputSizeMatrix("Nhập chiều cao của ma trận", "Nhập độ rộng của ma trận");
    let matrix = createMatrix(input[0], input[1]);
    displayMatrix(matrix, input[0], input[1]);
    document.write("Số lượng số nguyên tố trong ma trận là:" + countPrimeNumberMatrix(matrix,input[0],input[1]));
}