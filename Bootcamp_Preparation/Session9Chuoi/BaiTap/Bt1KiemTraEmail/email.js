function isEmail(str) {
    let emailCheck = /^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)$/;
    if (emailCheck.test(str)) {
        return true;
    } 
    return false;
}

let t1 = "a@gmail.com",
    t2 = "ab@yahoo.com",
    t3 = "abc@hotmail.com",
    t4 = "@gmail.com",
    t5 = "ab@gmail.",
    t6 = "@#abc@gmail.com";

document.write(t1 + (isEmail(t1)?" là email":" không phải email") + "<br>");
document.write(t2 + (isEmail(t2)?" là email":" không phải email") + "<br>");
document.write(t3 + (isEmail(t3)?" là email":" không phải email") + "<br>");
document.write(t4 + (isEmail(t4)?" là email":" không phải email") + "<br>");
document.write(t5 + (isEmail(t5)?" là email":" không phải email") + "<br>");
document.write(t6 + (isEmail(t6)?" là email":" không phải email") + "<br>");