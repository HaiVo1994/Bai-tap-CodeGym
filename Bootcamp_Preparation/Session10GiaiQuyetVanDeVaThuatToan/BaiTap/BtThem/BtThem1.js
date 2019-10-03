//Nhập vào một chuỗi, sau đó nhập nhập một ký tự. Hiển thị mọi vị trí ký tự đó xuất hiện trong chuỗi

function find(string, char){
    let result = [-1],
        count = 0;
    for (let i=0; i<string.length; i++){
        if (string[i]==char){
            result[count] = i;
            count++;
        }
    }
    return result;
}
