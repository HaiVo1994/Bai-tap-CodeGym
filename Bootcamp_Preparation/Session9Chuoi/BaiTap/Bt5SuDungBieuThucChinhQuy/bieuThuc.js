day = /^[0-3][0-9][/][0-1][0-9][/][0-9]+$/;
word = /[A-Za-z]/;
vowel = /[aeoiuAEOIU]/;
unVowel = /[A-Za-z^aeoiuAEOIU]/;
pin = /^[0-9]{4}$/;

function checkDate(string){
    return day.test(string);
}
function countWord(string){
    let long = string.length,
        count = 0;
    for (i=0; i<long; i++){
        if(word.test(string[i]))
            count++;
    }
    return count;
}
function countVowel(string){
    let long = string.length,
        count = [0, 0];
    for (i=0; i<long; i++){
        if(vowel.test(string[i]))
            count[0]++;
        if (unVowel.test(string[i]))
            count[1]++;
    }
    return count;
}
function checkPin(string){
    return pin.test(string);
}