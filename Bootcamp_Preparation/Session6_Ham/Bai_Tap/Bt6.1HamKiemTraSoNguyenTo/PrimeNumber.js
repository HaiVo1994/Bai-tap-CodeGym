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

let numberLimmit = 10000;
let N = 2;

while (N<numberLimmit){
    if (checkPrimeNumber(N)){
        document.write(N + "  ");
    }
    N++;
}