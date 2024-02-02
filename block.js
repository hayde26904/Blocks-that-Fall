class Block {
    constructor(x,y,w,h,color){
        this.x = x;
        this.y = y;
        this.c = color;
    }

    draw(){
        ctx.fillStyle = this.c;
        ctx.fillRect(this.x, this.y, this.w, this.h);
    }

    step(){
        
    }
}