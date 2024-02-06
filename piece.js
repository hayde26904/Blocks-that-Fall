class Piece {
    constructor(shape) {

        this.colors = ['red', 'green', 'blue', 'yellow', 'orange', 'pink']

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

        this.shape = this.shapeDict[shape.toUpperCase()];
        this.color = this.colors[Math.floor(Math.random() * this.colors.length)];

        this.blocks = [];
        this.x = 0;
        this.y = 0;

        this.locked = false;

        this.createBlocks();

    }

    createBlocks() {
        for (let row = 0; row < this.shape.length; row++) {
            for (let col = 0; col < this.shape[row].length; col++) {
                if (this.shape[row][col] == 1) {
                    this.blocks.push(new Block(this.x + col, this.y + row, this.color));
                }
            }
        }
    }

    /*rotate(direction) {

        //THX Chat GPT for rotation
        let matrix = this.shape;

        const rows = matrix.length;
        const cols = matrix[0].length;

        // Transpose the matrix (switch rows with columns)
        const transpose = [];
        for (let j = 0; j < cols; j++) {
            transpose[j] = [];
            for (let i = 0; i < rows; i++) {
                transpose[j].push(matrix[i][j]);
            }
        }

        // Determine the rotation direction (1 for clockwise, -1 for counterclockwise)
        const rotateDirection = direction === 1 ? 1 : -1;

        // Reverse rows based on the rotation direction
        const rotated = transpose.map(row =>
            rotateDirection === 1 ? row.reverse() : row
        );

        // If counterclockwise, reverse the order of the columns
        if (rotateDirection === -1) {
            rotated.reverse();
        }

        // Reverse each row of the transposed this.shape
        this.shape = transpose.map(row => row.reverse());
        var b = 0;
        for (let row = 0; row < this.shape.length; row++) {
            for (let col = 0; col < this.shape[row].length; col++) {
                if (this.shape[row][col] == 1) {
                    this.blocks[b].x += col;
                    this.blocks[b].y += row;
                    b++;
                }
            }
        }
    }*/

    drawAndUpdate() {
        for (const block of this.blocks) {
            block.draw();
            if (!this.locked) {

                block.update();
                if(this.blocks[this.blocks.length-1].y == rows-1){
                    this.locked = true;
                }

            }
        }

    }
}