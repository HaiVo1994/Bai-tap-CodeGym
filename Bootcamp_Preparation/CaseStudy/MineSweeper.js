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