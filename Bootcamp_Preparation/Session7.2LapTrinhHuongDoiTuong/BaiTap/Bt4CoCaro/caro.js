class CaroBoard{
    constructor(size, poinToWin){
        this.size = size;
        this.poinToWin = poinToWin;
        this.board = new Array(this.size);
        for (let i=0; i<this.size; i++){
            this.board[i] = new Array(this.size);
            for (let j=0; j<this.size; j++){
                this.board[i][j] = 0;
            }
        }
        this.player = 1;
    }
    reset(){
        for (let i=0; i<this.size; i++)
            for (let j=0; j<this.size; j++){
                this.board[i][j]  = 0;
            }
        this.player = 1;
    }

    changePlayer(){
        let player = this.player==1? 2:1;
        this.player = player;
    }

    clickBoard(x, y){
        if (this.board[x][y] == 0){
            this.board[x][y] = this.player;
            this.changePlayer();
            return true;
        }
        return false;
    }

    getBoard(){
        return this.board;
    }
    getSize(){
        return this.size;
    }
    getPlayer(){
        return this.player;
    }

    findWinner(){
        for (let i=0; i<this.size; i++){
            for (let j=0; j<=this.size - this.poinToWin; j++){
                if (this.board[i][j]!=0){
                    let count = 1;
                    for (let k=1; k<this.poinToWin;j++){
                        if (this.board[i][j] == this.board[i][j+k])
                            count++;
                        else
                            break;
                    }
                    if (count==this.poinToWin)
                        return this.board[i][j];
                }
            }     
        }

        for (let i=0; i<=this.size - this.poinToWin; i++){
            for (let j=0; j<this.size; j++){
                if (this.board[i][j]!=0){
                    let count = 1;
                    for (let k=1; k<this.poinToWin; k++){
                        if (this.board[i][j] == this.board[i+k][j])
                            count++;
                        else break;
                    }
                    if (count==this.poinToWin)
                        return this.board[i][j];
                } 
            }
        }

        for (let i=0; i<=this.size - this.poinToWin; i++){
            for (let j=0; j<=this.size - this.poinToWin; j++){
                if (this.board[i][j]!=0){
                    let count = 1;
                    for (let k =1; k<this.poinToWin;k++){
                        if (this.board[i][j]==this.board[i+k][j+k])
                            count++;
                        else
                            break;
                    }
                    if (count==this.poinToWin)
                        return this.board[i][j];
                }
            }
        }
        for (let i=this.size-1; i>=this.poinToWin-1;i--){
            for (let j=0; j<=this.size - this.poinToWin; j++){
                if (this.board[i][j]!=0){
                    let count = 1;
                    for(let k=1;k<this.poinToWin;k++){
                        if (this.board[i][j]==this.board[i-k][j+k])
                            count++;
                        else
                            break;
                    }
                    if (count==this.poinToWin)
                        return this.board[i][j];
                }
                
            }
        }
        return 0;
    }
}