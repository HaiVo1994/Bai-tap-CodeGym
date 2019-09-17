function minArray(arr) {
    if(arr.length == 0)
        return -1;
    let min = 0;

    for(let i = 1; i < arr.length; i++){
        if(arr[i] < arr[min]){
            min = i;
        }
    }
    return min;
}
let arr1 = [3, 5, 1, 8, -3, 7, 8];
let arr2 = [7, 12, 6, 9, 20, 56, 89];
let arr3 = [];
let arr4 = [0, 0, 0, 0, 0, 0];
let min = minArray(arr3);
if (min!==-1)
    alert(arr3[min]);
else
    alert("Mảng rỗng");