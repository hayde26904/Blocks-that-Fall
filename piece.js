class Piece {
    constructor(shape,cellWidth,cellHeight){
        this.shapeDict = {

            "O" : [
                [1,1],
                [1,1]
            ],

            "I" : [
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

        this.shape = this.shapeDict[shape];
        this.color = this.colors[Math.round(Math.random()*this.colors.length)];

        this.blocks = [];

        this.w = cellWidth;
        this.h = cellHeight;
        this.x = 0;
        this.y = 0;

    }

    createBlocks(){
        //todo loop through the shape array and create blocks in the right places, my son
    }
}