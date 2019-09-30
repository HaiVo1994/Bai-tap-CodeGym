function countValue(arr, val){
    let long = arr.length,
        start = 0,
        count = 0;
    while ((arr[start] <= val) && (start<long)){
        if (arr[start] == val)
            count++;
        start++;
    }
    return count;
}
let nums = [];
document.write("Mảng trước khi sắp xếp: <br>")
for(let i=0; i<100; ++i){
    nums[i] = Math.floor(Math.random() * 11);
    document.write(nums[i] + " ");
    if ((i+1)%10 ==0)
        document.write("<br>");
}
nums.sort(function(a, b){return a - b});
document.write("Mảng sau khi sắp xếp: <br>");
for(let i=0; i<100; ++i){
    document.write(nums[i] + " ");
    if ((i+1)%10 ==0)
        document.write("<br>");
}
let val = parseInt(prompt("Nhập giá trị để đếm: "));

document.write("Phần từ " + val + " xuất hiện " + countValue(nums, val) + " lần trong mảng");