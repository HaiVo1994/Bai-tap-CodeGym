function isEmail(str) {
    let emailCheck = /^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)$/;
    if (emailCheck.test(str)) {
        return true;
    } 
    return false;
}
let test = new Array();
test[0] = "a@gmail.com",
test[1] = "ab@yahoo.com",
test[2] = "abc@hotmail.com",
test[3] = "@gmail.com",
test[4] = "ab@gmail.",
test[5] = "@#abc@gmail.com";

for (let i=0; i<6; i++){
    document.write(test[i] + (isEmail(test[i])?" là email":" không phải email") + "<br>");
}