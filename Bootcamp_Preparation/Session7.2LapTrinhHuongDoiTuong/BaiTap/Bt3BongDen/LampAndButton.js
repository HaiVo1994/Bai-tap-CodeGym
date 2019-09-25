class SwitchButton{
    constructor(){
        this.status = false;
        this.electricLamp = null;
    }
    connectToLamp(electricLamp){
        this.electricLamp = electricLamp;
        this.turnOnOffLamp();
    }

    switchOn(){
        this.status = true;
        this.turnOnOffLamp();
    }
    switchOff(){
        this.status = false;
        this.turnOnOffLamp();
    }
    turnOnOffLamp(){
        if (this.electricLamp !=null){
            if(this.status)
                this.electricLamp.turnOn();
            else
                this.electricLamp.turnOff();
        }
    }
    getStatus(){
        return this.status;
    }
}

class ElectricLamp{
    constructor(){
        this.status = false;
    }
    turnOn(){
        this.status = true;
    }
    turnOff(){
        this.status = false;
    }
}

let switchButton = new SwitchButton(),
    lamp = new ElectricLamp();
switchButton.connectToLamp(lamp);

let lampTurnOnOff = document.getElementById("lamp"),
    button = document.getElementById("switch"),
    count =10;
button.value = (switchButton.getStatus()? "Tắt" : "Bật") + "(" + count + ")";
lampTurnOnOff.src = switchButton.getStatus()? "turnOn.jpg" : "turnOff.jpg";

function turnOnOff(){
    count--;
    if(count>0){
        if (switchButton.getStatus()){
            switchButton.switchOff();
            lampTurnOnOff.src = "turnOff.jpg";
            button.value = "Bật" + "(" + count + ")";
        }
        else{
            switchButton.switchOn();
            lampTurnOnOff.src = "turnOn.jpg";
            button.value = "Tắt" + "(" + count + ")";
        } 
    }
    
}