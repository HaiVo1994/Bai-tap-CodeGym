function liveTime(day){
    let now = new Date(),
        result = [];
    result[0] = now.getFullYear() - day.getFullYear();
    result[1] = result[0]*12 + (now.getMonth() - day.getMonth());
    result[5] = Math.floor((now.getTime() - day.getTime())/1000);
    result[4] = Math.floor(result[5]/60);
    result[3] = Math.floor(result[4]/60);
    result[2] = Math.floor(result[3]/24);
    
    return result;
}

function randomNumber(min, max){
    return Math.floor( Math.random() * (max-min) + min);
}
function findMin(arr){
    let long = arr.length,
        locate = 0;
    for (let i=1; i<long;i++){
        if (arr[i]<arr[locate])
            locate = i;
    }
    return arr[locate];
}
function cumulative(num){
    if (num>2)
        return num * cumulative(num-1);
    else
        return 2;
}
function getAreaCircle(radius){
    return radius * radius * Math.PI;
}

function coutA(string){
    let a= /^[aA]$/;
        long = string.length,
        count =0;
    for (let i=0; i<long; i++){
        if (a.test(string[i]))
            count++;
    }
    return count;
}

function cutString(string){
    return string.split(" ");
}