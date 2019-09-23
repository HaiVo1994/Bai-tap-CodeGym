function Temperature(cecilus){
    this.cecilus = cecilus;
    this.getTemperature = function(){
        return this.cecilus;
    }
    this.setTemperature = function(cecilus){
        this.cecilus = cecilus;
    }
    this.tranferFahrenheit = function(){
        return (this.cecilus * 1.80 + 32.00);
    }
    this.tranferKelvin = function(){
        return (this.cecilus + 273.15);
    }
}

function show(typeTemperature){
    let out = document.getElementById("output"),
        inputTemperature = Number(document.getElementById("inputTemperature").value),
        temper = new Temperature(inputTemperature);
    out.innerHTML = temper.getTemperature() + " độ C = ";
    if(typeTemperature == 'f'){
        out.innerHTML += temper.tranferFahrenheit() + " độ F";
    }
    else{
        out.innerHTML += temper.tranferKelvin() + " độ K";
    }
}