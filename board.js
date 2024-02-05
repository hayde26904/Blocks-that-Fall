class Board {
    constructor(){
        this.cols = 10
        this.rows = 15

        this.bgColor = "#111111";
        this.gridLinesColor = "#444";

        this.pieces = [new Piece("Z", cellWidth, cellHeight)];

        this.map = [];
        this.setupMap();
    }

    draw(){

        ctx.fillStyle = this.bgColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        this.drawPieces();
        this.drawGridLines();
    }

    update(){
        this.updatePieces();
        this.draw();
    }

    setupMap(){
        for(let i = 0; i < this.rows; i++){
            let newRow = [];
            for(let j = 0; j < this.cols; j++){
                newRow.push(0);
            }
            this.map.push(newRow);
        }
    }

    drawPieces(){
        for(const piece of this.pieces){
            piece.draw();
        }
    }

    updatePieces(){
        for(const piece of this.pieces){
            piece.update();
            if(piece.blocks[piece.blocks.length-1].y == rows-1){
                piece.locked = true;
            }
        }
    }

    checkPieceCollision(piece1, piece2){
        
    }

    drawGridLines(){

        ctx.strokeStyle = this.gridLinesColor;
        ctx.beginPath();

        //Draw Verticle Grid Lines

        for(let i = 0; i < this.cols + 1; i++){
            ctx.moveTo(i * cellWidth, 0);
            ctx.lineTo(i * cellWidth, canvas.height);
            ctx.stroke();
        }

        //Draw Horizontal Grid Lines

        for(let i = 0; i < this.rows + 1; i++){
            ctx.moveTo(0, i * cellHeight);
            ctx.lineTo(canvas.width, i * cellHeight);
            ctx.stroke();
        }
    }

}