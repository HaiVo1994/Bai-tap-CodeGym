function feetToMeters(feet){
    return (feet * 0.305);
}

function metersToFeet(meters){
    return (meters * 3.279);
}

function changeMeters(distance){
    let meters = Number(distance);
    let convertResult = metersToFeet(meters);
    let feet = document.getElementById("inputFeet");
    feet.value = convertResult;
}
function changeFeet(distance){
    let feet = Number(distance);
    let convertResult = feetToMeters(feet);
    let meters = document.getElementById("inputMeters");
    meters.value = convertResult;
}