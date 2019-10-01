class HtmlShowMineSweeper{
    constructor (graphic, width, height, amount){
        this.graphic = graphic;
        this.game = new MineSweeper(width, height, amount);
        this.game.createBoard();
        this.state = true;
    }
    getState(){
        return this.state;
    }
    getAmount(){
        return this.game.getAmount();
    }
    getCountClickCheck(){
        return this.game.getCountClickCheck();
    }
    createBoard(id){
        const SQUARE_SIZE = "25px";
        let innerHtml = "",
            height = this.game.getHeight(),
            width = this.game.getWidth(),
            img ="img/" + this.graphic + "/button.png";
        $("#" + id).html(innerHtml);
        for (let i=0; i<height; i++){
            innerHtml+= "<div class='mineRow'>";
            for (let j=0; j<width; j++){
                innerHtml += "<div class='mineCell'>"
                    + "<button type='button' class='buttonGame' id='" + i + "-" + j + "'>" // onclick='clickImg(" + i + "," + j + ")' >" 
                    + "<img width='" + SQUARE_SIZE + "' height='" + SQUARE_SIZE 
                    + "' src='" + img + "' id='img" + i + "," + j + "'>"
                    + "</button>"
                    + "</div>";
            }
            innerHtml+= "</div>";
        }
        $("#" + id).html(innerHtml);
    }
    changeImg(x, y, win){
        let img = "img/" + this.graphic + "/",
            boardClicked = this.game.getBoardClicked(),
            board = this.game.getBoard(),
            id = "img" + x + "," + y;
        if (win){
            boardClicked[x][y] = 1;
        }

        if (boardClicked[x][y] === -1)
            img += "flag.png";
        else if (boardClicked[x][y] === 0){
            img += "button.png";
        }
        else{
            switch (board[x][y]){
                case 1:
                    img += "1.png";
                    break;
                case 2:
                    img += "2.png";
                    break;
                case 3:
                    img += "3.png";
                    break;
                case 4:
                    img += "4.png";
                    break;
                case 5:
                    img += "5.png";
                    break;
                case 6:
                    img += "6.png";
                    break;
                case 7:
                    img += "7.png";
                    break;
                case 8:
                    img += "8.png";
                    break;
                case -1:
                    if (this.state)
                        img += "notExplose.png";
                    else
                        img += "explose.png";
                    break;
                case 0:
                    img += "space.png";
            }
        }
        document.getElementById(id).src = img;
    }
    reload(){
        let boardClicked = this.game.getBoardClicked();
        for (let i=0; i<this.game.getHeight(); i++){
            for (let j=0; j<this.game.getWidth(); j++){
                if (boardClicked[i][j] === 1)
                    this.changeImg(i, j);
            }
        }
    }
    openAllCell(){
        let boardClicked = this.game.getBoardClicked();
        for (let i=0; i<this.game.getHeight(); i++){
            for (let j=0; j<this.game.getWidth(); j++){
                if (boardClicked[i][j]!==1){
                    this.changeImg(i, j, true);
                }
            }
        }
    }
    click(x, y, mark){
        if (this.state){
            let board = this.game.getBoard();
            let check = this.game.click(x, y, mark);
            if (check === -1){
                this.state = false;
                this.openAllCell();
                setTimeout(function(){
                    alert("Bạn đã thua");
                }, 500);
            }
            else if (check === 1){
                this.changeImg(x, y, false);
                if (board[x][y]===0)
                    this.reload();
                
                if (this.game.checkWin()){
                    this.openAllCell();
                    this.state = false;
                    setTimeout(function(){
                        alert("Bạn đã thắng");
                    }, 500);
                }
            }
        }    
    }

    openAround(x, y){
        let mark = false;
        this.click(x, y, mark);
        if (this.game.checkAround(x, y)){
            this.click(x + 1, y, mark);
            this.click(x - 1, y, mark);
            this.click(x, y + 1, mark);
            this.click(x, y - 1, mark);
            this.click(x + 1, y + 1, mark);
            this.click(x - 1, y - 1, mark);
            this.click(x + 1, y - 1, mark);
            this.click(x - 1, y + 1, mark);
        }
        
    }
}