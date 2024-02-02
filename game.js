class Game {
    constructor(){
        this.ticks = 0;
        this.paused = false;
        this.board = new Board();
    }

    canvasResize(){
        canvas.width = window.innerWidth/3;
        canvas.height = window.innerHeight;
    }

    step(){
        this.ticks++;
        this.draw();
    }

    draw(){
        this.canvasResize();
        this.board.draw();
    }
}