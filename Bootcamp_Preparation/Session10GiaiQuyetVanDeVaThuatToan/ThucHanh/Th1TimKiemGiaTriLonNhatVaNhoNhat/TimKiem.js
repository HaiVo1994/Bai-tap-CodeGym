function findMin(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; ++i) {
        if (arr[i] < min) {
        min = arr[i];
        }
    }
    return min;
 }
 function findMax(arr) {
    var max = arr[0];
    for (var i = 1; i < arr.length; ++i) {
        if (arr[i] > max) {
        max = arr[i];
        }
    }
    return max;
 }

let nums = [];
for(let i=0; i<100; ++i){
    nums[i] = Math.floor(Math.random() * 101);
    document.write(nums[i] + " ");
    if ((i+1)%10 ==0)
    document.write("<br>");
}



let minValue = findMin(nums),
    maxValue = findMax(nums);
document.write("The minimum value is: " + minValue);
document.write("<br/>");
document.write("The maximum value is: " + maxValue);
