function Mobile(percentBattery, statePower, mobileName){
    this.mobileName = mobileName;
    this.getMobileName = function(){
        return this.mobileName;
    }
    this.battery = percentBattery;
    this.getBattery = function(){
        return this.battery;
    }
    this.chargeBattery = function(charge){
        this.battery += Number(charge);
        this.battery = this.battery>100? 100:this.battery;
    }
    this.checkBattery = function(){
        if (this.battery ===0)
            return false;
        return true;
    }

    this.power = statePower;
    this.setPower = function(statePower){
        if (this.checkBattery()){
            this.power = statePower;
            this.battery--;
        }
            
    }
    this.checkPower =function(){
        return this.power;
    }

    this.prepareMessenger = "";
    this.writeMessenger = function(messenge){
        if(this.notice())
            this.prepareMessenger = messenge;
    }
    this.send = function(receiverMobile){
        if (receiverMobile.notice())
            if(this.notice()){
                receiverMobile.receive(this.prepareMessenger);
                this.sendedMessenger = this.prepareMessenger;
                this.prepareMessenger = "";
            }
    }

    this.sendedMessenger = "";
    this.readSendedMessenger = function(){
        if(this.notice())
            return this.sendedMessenger;
    }

    this.receivedMessenger = "";
    this.receive = function(messenger){
        this.receivedMessenger = messenger;
    }
    
    this.readReceivedMessenger = function(){
        if(this.notice())
            return this.receivedMessenger;
    }
     
    this.notice = function(){
        if (!this.checkPower()){
            alert("Điện thoại " + this.mobileName +" đang tắt");
            return false;
        }
        else if (!this.checkBattery()){
            alert("Điện thoại đang hết pin");
            return false;
        }
        else{
            this.battery--;
            return true;
        }   
    }  
}

function create(id, mobile){
    document.getElementById(id).innerHTML = mobile.getMobileName();
    document.getElementById(id+"Battery").innerHTML = mobile.getBattery();
    let state = "Tắt";
    if (mobile.checkPower()){
        state = "Bật";
    }
    document.getElementById(id+"Power").value = state;
    
}    
let nokia = new Mobile(100, true, "Nokia"),
    iPhone = new Mobile(100, true, "iPhone");

function show(){
    create("mobile1", nokia);
    create("mobile2", iPhone);
}

function charge(id, mobile){
    let BatteryCharger = document.getElementById(id + "BatteryCharger").value;
    mobile.chargeBattery(BatteryCharger);
    document.getElementById(id+"Battery").innerHTML = mobile.getBattery();
}

function setPower(id, mobile){
    mobile.setPower(!mobile.checkPower());
    document.getElementById(id+"Power").value = mobile.checkPower()? "Bật":"Tắt";
    document.getElementById(id+"Battery").innerHTML = mobile.getBattery();
}

function prepareSend(id,mobile){
    let messenge = document.getElementById(id+"PrepareMessenger");
    mobile.writeMessenger(messenge.value);
    document.getElementById(id+"Battery").innerHTML = mobile.getBattery();
    messenge.value = "";
}
function send(id,mobile, receiverMobile){
    let messenge = document.getElementById(id+"PrepareMessenger");
    if (messenge.value!="")
        mobile.writeMessenger(messenge.value);
    mobile.send(receiverMobile);
    document.getElementById(id+"Battery").innerHTML = mobile.getBattery();
    messenge.value = "";
}
function receive(id,mobile){
    document.getElementById(id+"ReceivedMessenger").innerHTML = mobile.readReceivedMessenger();
    document.getElementById(id+"Battery").innerHTML = mobile.getBattery();
}
function received(id,mobile){
    document.getElementById(id+"SendedMessenger").innerHTML = mobile.readSendedMessenger();
    document.getElementById(id+"Battery").innerHTML = mobile.getBattery();
}

document.getElementById("mobile1Charge").onclick = function(){
    charge("mobile1", nokia);
}
document.getElementById("mobile1Power").onclick = function(){
    setPower("mobile1", nokia);
}
document.getElementById("mobile1Prepare").onclick = function(){
    prepareSend("mobile1", nokia);
}
document.getElementById("mobile1Send").onclick = function(){
    send("mobile1", nokia, iPhone);
}
document.getElementById("mobile1Reiceve").onclick = function(){
    receive("mobile1", nokia);
}
document.getElementById("mobile1Sended").onclick = function(){
    received("mobile1", nokia);
}


document.getElementById("mobile2Charge").onclick = function(){
    charge("mobile2", iPhone);
}
document.getElementById("mobile2Power").onclick = function(){
    setPower("mobile2", iPhone);
}
document.getElementById("mobile2Prepare").onclick = function(){
    prepareSend("mobile2", iPhone);
}
document.getElementById("mobile2Send").onclick = function(){
    send("mobile2", iPhone, nokia);
}
document.getElementById("mobile2Reiceve").onclick = function(){
    receive("mobile2", iPhone);
}
document.getElementById("mobile2Sended").onclick = function(){
    received("mobile2", iPhone);
}