class Board {
    constructor(){
        this.cols = 10
        this.rows = 15
        this.cellWidth = canvas.width / this.cols;
        this.cellHeight = canvas.height / this.rows;

        this.bgColor = "#111111";
        this.gridLinesColor = "#444";

        this.pieces = [];

        this.map = [];
        this.setupMap();
    }

    draw(){

        ctx.fillStyle = this.bgColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        this.drawGridLines();
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

    drawGridLines(){

        this.cellWidth = canvas.width / this.cols;
        this.cellHeight = canvas.height / this.rows;

        ctx.strokeStyle = this.gridLinesColor;
        ctx.beginPath();

        //Draw Verticle Grid Lines

        for(let i = 0; i < this.cols; i++){
            ctx.moveTo(i * this.cellWidth, 0);
            ctx.lineTo(i * this.cellWidth, canvas.height);
            ctx.stroke();
        }

        //Draw Horizontal Grid Lines

        for(let j = 0; j < this.rows; j++){
            ctx.moveTo(0, j * this.cellHeight);
            ctx.lineTo(canvas.width, j * this.cellHeight);
            ctx.stroke();
        }
    }

}