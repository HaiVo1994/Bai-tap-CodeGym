let idChess = "chess";
function drawChess(){
    let character="ABCDEFGH",
        thInner = "<tr><th></th>",
        tdInner = "",
        colorChess = true;
    for (let i=0; i<8;i++){
        let th = "<th class='outChess'>" + (i+1) + "</th>";
        thInner += th;
        colorChess = (colorChess)? false : true;
        tdInner += "<tr><td class='outChess'>" + character[i] + "</td>";
        for (let j = 0; j<8; j++){
            let classChessSquare = colorChess? "blackSquare" : "whiteSquare";
            tdInner += "<td class='" + classChessSquare +"'></td>";
            colorChess = (colorChess)? false : true;
        }
        tdInner +="<tr>"
    }
    thInner +="</tr>"

    document.getElementById(idChess).innerHTML = thInner + tdInner;
}