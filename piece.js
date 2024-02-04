class Piece {
    constructor(shape){
        this.shapeDict = {

            "O" : [
                [1,1],
                [1,1]
            ],

            "I" : [
                [1],
                [1],
                [1],
                [1]
            ],

            "S" : [
                [0,1,1],
                [1,1,0]
            ],

            "Z" : [
                [1,1,0],
                [0,1,1]
            ],

            "L" : [
                [1,0],
                [1,0],
                [1,1]
            ],

            "J" : [
                [0,1],
                [0,1],
                [1,1]
            ],

            "T" : [
                [1,1,1],
                [0,1,0]
            ],

        }

        this.colors = ['red','green','blue','yellow','orange','pink']

        this.shape = this.shapeDict[shape.toUpperCase()];
        this.color = this.colors[Math.floor(Math.random()*this.colors.length)];

        this.blocks = [];
        this.x = 0;
        this.y = 0;

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

    draw(){
        for(const block of this.blocks){
            block.draw();
        }
    }
}