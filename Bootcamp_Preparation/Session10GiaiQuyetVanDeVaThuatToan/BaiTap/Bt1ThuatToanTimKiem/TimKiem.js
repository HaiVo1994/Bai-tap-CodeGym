let arr = [],
    limit = 10,
    long = 0,
    num = 0;

do{
    long = parseInt(prompt("Nhập độ dài mảng"));
}while ((isNaN(long)) || (long<10));
do{
    num = parseInt(prompt("Nhập phần từ cẩn tìm"));
}while ((isNaN(num)) || (num<0) || (num>limit));

for (let i=0; i<long; i++){
    arr[i] = Math.floor( Math.random() *limit);
}
arr.sort(function(a, b){ return a-b});
document.write("Mảng số cần xét: <br>");
document.write(arr + "<br>");
document.write("Số cần tìm là:" + num + "<br>");
let findByLineFunction = findLine(arr, num);
document.write("Tìm bằng thuật toán tuyến tính ra kết quả: <br>");
document.write("Số cần tìm " + (findByLineFunction[0]==-1? "không nằm trong dãy số" : ("nằm ở " + findByLineFunction[0]))
+ " và mất " + findByLineFunction[1] + " bước<br>");
let findByBinaryFunction = findBinary(arr, num);
document.write("Tìm bằng thuật toán tuyến tính ra kết quả: <br>");
document.write("Số cần tìm " + (findByBinaryFunction[0]==-1? "không nằm trong dãy số" : ("nằm ở " + findByBinaryFunction[0]))
+ " và mất " + findByBinaryFunction[1] + " bước<br>");

function findLine(arr, num){
    let long = arr.length;
    for (let i=0; i<long; i++){
        if (arr[i]==num)
            return [i, i];
    }
    return [-1, long];
}

function findBinary(arr, num){
    let end = arr.length,
        count =0,
        start = 0,
        center = Math.floor( (end + start) /2);
    
    do{
        count++;
        if (arr[center]==num)
            return [center, count];
        else if (arr[center]<num)
            start = center;
        else
            end = center;
        center = Math.floor( (end + start) /2);     
    }while ((end>start) && (center>start));
    return [-1, count];
}
