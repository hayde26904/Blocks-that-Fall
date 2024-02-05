let canvas;
let ctx;
let game;
let cols = 10;
let rows = 15;
let cellWidth;
let cellHeight;

let shapeDict = {

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

window.onload = function(){
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    ctx.imageSmoothingEnabled = false;

    canvas.width = window.innerWidth/3;
    canvas.height = window.innerHeight;

    cellWidth = Math.round(canvas.width / cols);
    cellHeight = Math.round(canvas.height / rows);

    game = new Game();
    game.update();

    window.onresize = game.canvasResize;
}