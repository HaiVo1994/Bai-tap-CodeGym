let callendar = document.getElementById("callendarTable"),
    tittleMonth = document.getElementById("tittleCallendar"),
    sollarCallendar = ["January", "February", "March", "April", "May", "June", "July",
                    "August", "September", "October", "November", "December"],
    solarMonth = 10,
    monthFirst = 5,
    lunarCallendar = 13,
    lunarMonth = 8;

function create(){
    tittleMonth.innerHTML = "Tháng " + solarMonth + " - " + sollarCallendar[solarMonth-1];
    let callendarInner = "<tr>"
                            + "<th class=firstTittleSunday>C.Nhật</th>"
                            + "<th class=firstTittle>T.Hai</th>"
                            + "<th class=firstTittle>T.Ba</th>"
                            + "<th class=firstTittle>T.Tư</th>"
                            + "<th class=firstTittle>T.Năm</th>"
                            + "<th class=firstTittle>T.Sáu</th>"
                            + "<th class=firstTittleSarturday>T.Bảy</th>"
                        + "</tr>"
                        + "<tr>"
                            + "<th class=secondTittleSunday>Sun</th>"
                            + "<th class=secondTittle>Mon</th>"
                            + "<th class=secondTittle>Tue</th>"
                            + "<th class=secondTittle>Wed</th>"
                            + "<th class=secondTittle>Thu</th>"
                            + "<th class=secondTittle>Fri</th>"
                            + "<th class=secondTittleSarturday>Sar</th>"
                        + "</tr>";
        
    let thisDay = 1;
    let count = 1;
    while (thisDay<=31){
        let inputInfomation = "";
        if (count == 1){
            inputInfomation += "<tr><td class='sunday'>";
        }
        else if (count == 7){
            inputInfomation += "<td class='saturday'>";
        }
        else{
            inputInfomation += "<td class='normalDay'>";
        }
        
        if ( ((thisDay==1) && (count == monthFirst)) || (thisDay>1)){
            let luna = "";
            if (lunarCallendar>29){
                lunarCallendar = 1;
                lunarMonth ++;
            }
            if ((lunarCallendar == 1) || (thisDay==1)){
                luna = lunarCallendar + "." + lunarMonth;
            }
            else{
                luna = lunarCallendar;
            }
            let inputDay = thisDay + "<sub>" + luna + "</sub>";
            inputInfomation += inputDay;
            lunarCallendar++;
            thisDay++;
        }

        inputInfomation += "</td>";
        if (count==7){
            inputInfomation += "</tr>";
            count = 0;
        }
        callendarInner += inputInfomation;     
        count ++;
    }

    callendar.innerHTML = callendarInner;
    
}