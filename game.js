class Game {
    constructor(){
        this.ticks = 0;
        this.paused = false;
        this.board = new Board();
        this.gameloop = setInterval(this.update.bind(this), 500);
    }

    canvasResize(){
        canvas.width = window.innerWidth/3;
        canvas.height = window.innerHeight;
        cellWidth = Math.floor(canvas.width / cols);
        cellHeight = Math.floor(canvas.height / rows);
    }

    update(){
        this.ticks++;
        this.draw();
    }

    draw(){
        this.board.draw();
    }
}