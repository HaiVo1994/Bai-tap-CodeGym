function checkViettel(string){
    let phoneNumber = /^((086)|(096)|(097)|(098)|(032)|(033)|(034)|(035)|(036)|(037)|(038)|(039))[0-9]{7}$/g;
    return phoneNumber.test(string);
}

let phone =[
    "1241242142",
    "0864934281",
    "0865242452",
    "096252r421",
    "09734242412",
    "0984124421",
    "032a34b242",
    "0335251255",
    "0345454545",
    "035rthrthh",
    "03634t3412",
    "0371241244",
    "0384241gstr",
    "039h2t4wtt"
],
    long = phone.length;
for (let i=0; i<long; i++){
    document.write(phone[i] + (checkViettel(phone[i])? " là": " không phải") + " số điện thoại viettel <br>");
}