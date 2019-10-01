const SQUARE_SIZE = 25;
class CanvasShowMineSweeper{
    constructor (graphic, width, height, amount, canvasId){
        this.graphic = graphic;
        this.game = new MineSweeper(width, height, amount);
        this.game.createBoard();
        this.state = true;
        this.canvasId = canvasId;
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
    prepareImg(idImage){
        let src = "img/" + this.graphic + "/",
            innerHtml = "";
        for (let i=1; i<=8; i++){
            innerHtml += "<img width='" + SQUARE_SIZE + "' height='" + SQUARE_SIZE 
                + "' src='" + src + i + ".png' id='img-number-" + i + "'>";
        }
        innerHtml += "<img width='" + SQUARE_SIZE + "' height='" + SQUARE_SIZE 
            + "' src='" + src + "button.png' id='img-button'>";
        innerHtml += "<img width='" + SQUARE_SIZE + "' height='" + SQUARE_SIZE 
            + "' src='" + src + "flag.png' id='img-flag'>";
        innerHtml += "<img width='" + SQUARE_SIZE + "' height='" + SQUARE_SIZE 
            + "' src='" + src + "explose.png' id='img-explose'>";
        innerHtml += "<img width='" + SQUARE_SIZE + "' height='" + SQUARE_SIZE 
            + "' src='" + src + "notExplose.png' id='img-notExplose'>";
        innerHtml += "<img width='" + SQUARE_SIZE + "' height='" + SQUARE_SIZE 
            + "' src='" + src + "space.png' id='img-space'>";
        $("#" + idImage).html(innerHtml);

    }
    createBoard(){
        let height = this.game.getHeight(),
            width = this.game.getWidth(),
            img = document.getElementById("img-button"),
            x = 0,
            y = 0,
            canvas = $("#" + this.canvasId)[0],
            canvasDraw = canvas.getContext("2d");
        for (let i=0; i<height; i++){
            for (let j=0; j<width; j++){
                canvasDraw.drawImage(img,y,x, SQUARE_SIZE, SQUARE_SIZE);
                y+= SQUARE_SIZE;
            }
            x += SQUARE_SIZE;
            y = 0;
        }
    }
    click(x, y, mark){
        if (this.state){
            let board = this.game.getBoard();
            let check = this.game.click(x, y, mark);
            if (check === -1){
                this.state = false;
                this.reload(true);
                setTimeout(function(){
                    alert("Bạn đã thua");
                }, 500);
            }
            else if (check === 1){              
                if (this.game.checkWin()){
                    this.reload(true);
                    setTimeout(function(){
                        alert("Bạn đã thắng");
                    }, 500);
                    this.state = false;
                }
                else
                    this.reload(false);
            }
        }    
    }
    reload(openAll){
        let height = this.game.getHeight(),
            width = this.game.getWidth(),
            x = 0,
            y = 0,
            canvas = $("#" + this.canvasId)[0],
            canvasDraw = canvas.getContext("2d");
        canvasDraw.clearRect(0, 0, canvas.width, canvas.height);
        for (let i=0; i<height; i++){
            for (let j=0; j<width; j++){
                let img = document.getElementById(this.checkCell(i, j, openAll));
                canvasDraw.drawImage(img, y, x, SQUARE_SIZE, SQUARE_SIZE);
                y+= SQUARE_SIZE;
            }
            x += SQUARE_SIZE;
            y = 0;
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

    checkCell(x, y, openAll){
        let img = "img-",
            boardClicked = this.game.getBoardClicked(),
            board = this.game.getBoard();
        if (openAll){
            boardClicked[x][y] = 1;
        }

        if (boardClicked[x][y] === -1)
            img += "flag";
        else if (boardClicked[x][y] === 0){
            img += "button";
        }
        else{
            switch (board[x][y]){
                case 1:
                    img += "number-1";
                    break;
                case 2:
                    img += "number-2";
                    break;
                case 3:
                    img += "number-3";
                    break;
                case 4:
                    img += "number-4";
                    break;
                case 5:
                    img += "number-5";
                    break;
                case 6:
                    img += "number-6";
                    break;
                case 7:
                    img += "number-7";
                    break;
                case 8:
                    img += "number-8";
                    break;
                case -1:
                    if (this.state)
                        img += "notExplose";
                    else
                        img += "explose";
                    break;
                case 0:
                    img += "space";
            }
        }
        return img;
    }
}