let MyDate = function(day, month, year) {
    this.day = day;
    this.month = month;
    this.year = year;

    this.getDay = function() {
        return this.day;
    }
    this.getMonth = function() {
        return this.month;
    }
    this.getYear = function() {
        return this.year;
    }
    this.setDay = function(day) {
        this.day  = day;
    }
    this.setMonth = function(month) {
        this.month  = month;
    }
    this.setYear = function(year) {
        this.year  = year;
    }

    this.setDate = function(day, month, year){
        this.day  = day;
        this.month  = month;
        this.year  = year;
    }
    this.toString = function(){
        return (this.day + "/" + this.month + "/" + this.year);
    }
};

function show(){
    let date = new MyDate(2, 2, 2007);
    alert(date.toString());

    date.setDate(20, 09, 2019)
    alert(date.toString())
}