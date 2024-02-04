class Block {
    constructor(x,y,color){
        this.x = x;
        this.y = y;
        this.c = color;
    }

    draw(){
        ctx.fillStyle = this.c;
        ctx.fillRect(this.x * cellWidth, this.y * cellHeight, cellWidth, cellHeight);
    }

    update(){
        
    }
}