class Piece {
    constructor(shape){

        this.colors = ['red','green','blue','yellow','orange','pink']

        this.shape = shapeDict[shape.toUpperCase()];
        this.color = this.colors[Math.floor(Math.random()*this.colors.length)];

        this.blocks = [];
        this.x = 0;
        this.y = 0;

        this.locked = false;

        this.createBlocks();

    }

    createBlocks(){
        //todo loop through the shape array and create blocks in the right places, my son
        for(let row = 0; row < this.shape.length; row++){
            for(let col = 0; col < this.shape[row].length; col++){
                if(this.shape[row][col] == 1){
                    this.blocks.push(new Block(this.x + col, this.y + row, this.color));
                }
            }
        }
    }

    rotate() {
        const rows = this.shape.length;
        const cols = this.shape[0].length;
    
        // Transpose the this.shape (switch rows with columns)
        const transpose = [];
        for (let j = 0; j < cols; j++) {
            transpose[j] = [];
            for (let i = 0; i < rows; i++) {
                transpose[j].push(this.shape[i][j]);
            }
        }
    
        // Reverse each row of the transposed this.shape
        this.shape = transpose.map(row => row.reverse());
        for(let row = 0; row < this.shape.length; row++){
            for(let col = 0; col < this.shape[row].length; col++){
                if(this.shape[row][col] == 1){
                    
                }
            }
        }
    }

    draw(){
        for(const block of this.blocks){
            block.draw();
        }
    }

    update(){
        for(const block of this.blocks){
            if(!this.locked){
                block.update();
            }
        }
    }
}