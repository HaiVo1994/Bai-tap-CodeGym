const SQUARE_SIZE = "25px";

function createBoard(id){
    let innerHtml = "",
        board = caro.getBoard(),
        sizeBoard = caro.getSize();
    $("#" + id).html(innerHtml);
    for (let i=0; i<sizeBoard; i++){
        innerHtml+= "<div class='caroRow'>";
        for (let j=0; j<sizeBoard; j++){
            let img ="";
            switch (board[i][j]){
                case 1:
                    img = "X.png";
                    break;
                case 2:
                    img = "O.png";
                    break;
                default:
                    img = "null.jpg"
            }
            innerHtml += "<div class='caroCell'>"
                + "<button type='button' class='buttonGame' onclick='clickImg(" + i + "," + j + ")' >" 
                + "<img width='" + SQUARE_SIZE + "' height='" + SQUARE_SIZE 
                + "' src='img/" + img + "' id='img" + i + "," + j + "'>"
                + "</button>"
                + "</div>";
        }
        innerHtml+= "</div>";
    }
    $("#" + id).html(innerHtml);
}
function clickImg(x, y){
    let imgLocation = caro.getPlayer() == 1 ? "img/X.png":  "img/O.png",
        idImg = "img" + x + "," + y,
        check = caro.clickBoard(x, y);
    if (check){
        document.getElementById(idImg).src = imgLocation;
        let find = caro.findWinner();
        console.log(find);
        if (find!==0){
            let innerHtml = "";
            $("#mainBoard").html("");
            innerHtml = "<p>Người chơi " + (find==1?"X":"O") + " đã thắng"
                    + " <input type='button' value='Chơi Tiếp' onclick='reset()'>";
            $("#mainBoard").html(innerHtml);
        }
    }   
}
let caro = new CaroBoard(20, 5);
function show(){  
    createBoard("mainBoard");
    for (let i=0; i<caro.getSize(); i++)
        for (let j=0; j<caro.getSize(); j++){
            let id ="#" + i + "," + j;
            $(id).click(function(){
                clickImg(i, j);
                $(id).attr('disabled', 'true');
            });
    }
}
function reset(){
    caro.reset();
    createBoard("mainBoard");
}