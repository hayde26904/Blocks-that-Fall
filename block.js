class Block {
    constructor(x,y,color){
        this.x = x;
        this.y = y;
        this.c = color;
        this.dropSpeed = 70;
        this.dropTimer = 100 - this.dropSpeed;
        this.dropCooldown = this.dropTimer;
    }

    draw(){
        ctx.fillStyle = this.c;
        ctx.fillRect(this.x * cellWidth, this.y * cellHeight, cellWidth, cellHeight);
    }

    update(){
        this.dropCooldown--;
        if(this.dropCooldown <= 0){
            this.y++;
            this.dropTimer = 100 - this.dropSpeed;
            this.dropCooldown = this.dropTimer;
        }
    }
}