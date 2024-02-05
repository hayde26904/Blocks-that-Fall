class Game {
    constructor(){
        this.ticks = 0;
        this.paused = false;
        this.board = new Board();
        this.gameInterval = setInterval(this.update.bind(this), 0);
    }

    canvasResize(){
        canvas.width = window.innerWidth/3;
        canvas.height = window.innerHeight;
        cellWidth = Math.round(canvas.width / cols);
        cellHeight = Math.round(canvas.height / rows);
    }

    update(){
        this.ticks++;
        this.draw();
        this.board.update();
    }

    draw(){
        this.board.draw();
    }
}