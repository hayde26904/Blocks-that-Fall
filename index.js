let canvas;
let ctx;
let game;
let cols = 10;
let rows = 15;
let cellWidth;
let cellHeight;

window.onload = function(){
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    ctx.imageSmoothingEnabled = false;

    canvas.width = window.innerWidth/3;
    canvas.height = window.innerHeight;

    cellWidth = Math.floor(canvas.width / cols);
    cellHeight = Math.floor(canvas.height / rows);

    game = new Game();
    game.update();

    window.onresize = game.canvasResize;

    console.log(game.board.pieces[0]);
}