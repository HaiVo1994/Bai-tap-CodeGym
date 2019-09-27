class MineSweeper{
    constructor(width, height, amount){
        this.width = width;
        this.height = height;
        this.amount = amount;
        this.countClickCheck = 0;
        this.board = new Array(this.height);
        this.boardClicked = new Array(this.height);
        for (let i=0; i<this.height; i++){
            this.board[i] = new Array(this.width);
            this.boardClicked[i] = new Array(this.width);
            for (let j=0; j<this.width; j++){
                this.board[i][j] = 0;
                this.boardClicked[i][j] = 0;
            }
        }   
    }
    getBoard(){
        return this.board;
    }
    getBoardClicked(){
        return this.boardClicked;
    }
    getWidth(){
        return this.width;
    }
    getHeight(){
        return this.height;
    }
    getAmount(){
        return this.amount;
    }
    getCountClickCheck(){
        return this.countClickCheck;
    }
    checkOnBoard(x, y){
        return (x>=0) && (x<this.height) && (y>=0) && (y<this.width);
    }
    checkClicked(x, y){
        if (this.checkOnBoard(x, y)){
            return this.boardClicked[x][y] === 0;
        }
        return false;
    }
    checkToAddAmountMineAround(x, y){
        if (this.checkOnBoard(x, y)){
            if (this.board[x][y]>=0){
                this.board[x][y]++;
            }
        }
    }
    createBoard(){
        let countRandom = this.amount;
        while (countRandom>0){
            let x = Math.floor( Math.random() * this.height),
                y = Math.floor( Math.random() * this.width);
            if (this.board[x][y] !== -1){
                this.board[x][y] = -1;
                countRandom--;
            }
        }

        for (let i=0; i<this.height; i++){
            for (let j=0; j<this.width; j++){
                if (this.board[i][j] === -1){
                    this.checkToAddAmountMineAround(i - 1, j);
                    this.checkToAddAmountMineAround(i + 1, j);
                    this.checkToAddAmountMineAround(i, j - 1);
                    this.checkToAddAmountMineAround(i, j + 1);
                    this.checkToAddAmountMineAround(i - 1, j - 1);
                    this.checkToAddAmountMineAround(i + 1, j + 1);
                    this.checkToAddAmountMineAround(i + 1, j - 1);
                    this.checkToAddAmountMineAround(i - 1, j + 1);
                }
            }
        }
    }
    
    click(x, y, mark){
        if (mark){
            if (this.boardClicked[x][y] !== 1){
                this.boardClicked[x][y] = this.boardClicked[x][y] === 0 ?-1 :0;
                let add = this.boardClicked[x][y] === 0 ? -1 : 1;
                this.countClickCheck += add;
                return 1;
            }
        }
        else if (this.checkClicked(x, y)){
            switch (this.board[x][y]){
                case -1:
                    return -1;
                case 0:
                    this.checkOpenZero(x, y);
                    return 1;
                default:
                    this.boardClicked[x][y] = 1;
                    return 1;
            }
        }
        return 0;
    }
    checkOpenZero(x, y){
        if (this.checkClicked(x, y)){
            if (this.board[x][y] == 0){
                this.boardClicked[x][y] = 1;
                this.checkOpenZero(x - 1, y);
                this.checkOpenZero(x + 1, y);
                this.checkOpenZero(x, y - 1);
                this.checkOpenZero(x, y + 1);
                //this.checkOpenZero(x + 1, y + 1);
                //this.checkOpenZero(x - 1, y - 1);
                //this.checkOpenZero(x + 1 , y - 1);
                //this.checkOpenZero(x -1, y + 1);
            }
            else if(this.board[x][y] > 0)
                this.boardClicked[x][y] = 1;
        }
    }
    checkWin(){
        for (let i=0; i<this.height; i++){
            for (let j=0; j<this.width; j++){
                if ((this.board[i][j] !== -1) && (this.boardClicked[i][j]!== 1)){
                    return false;
                }
            }
        }
        return true;
    }

    checkFlagClicked(x, y){
        if (this.checkOnBoard(x, y)){
            if (this.boardClicked[x][y] === -1)
                return 1;
        }
        return 0;
    }
    checkAround(x, y){
        if (this.board[x][y]==0)
            return true;
        if (this.board[x][y]>0) {
            let countCheck = 0;
            countCheck += this.checkFlagClicked(x + 1, y);
            countCheck += this.checkFlagClicked(x - 1, y);
            countCheck += this.checkFlagClicked(x, y + 1);
            countCheck += this.checkFlagClicked(x, y - 1);
            countCheck += this.checkFlagClicked(x + 1, y + 1);
            countCheck += this.checkFlagClicked(x - 1, y - 1);
            countCheck += this.checkFlagClicked(x + 1, y - 1);
            countCheck += this.checkFlagClicked(x - 1, y + 1);
            
            if (this.board[x][y] === countCheck)
                return true;
        }
        return false;
    }
}

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
                alert("Bạn đã thua");
            }
            else if (check === 1){
                this.changeImg(x, y, false);
                if (board[x][y]===0)
                    this.reload();
                
                if (this.game.checkWin()){
                    this.openAllCell();
                    this.state = false;
                    alert("Bạn đã thắng");
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