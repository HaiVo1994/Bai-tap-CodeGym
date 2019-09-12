function check(checkBoxId){
    let goodBox = document.getElementById("goodBox");
    let fastBox = document.getElementById("fastBox");
    let cheapBox = document.getElementById("cheapBox");

    let check = document.getElementById(checkBoxId);
    if ((goodBox.checked) && (cheapBox.checked) && (fastBox.checked)){
        switch (check){
            case goodBox:
                cheapBox.checked = false;
                break;
            case fastBox:
                cheapBox.checked = false;
                break;
            case cheapBox:
                goodBox.checked = false;
        }
    }
}