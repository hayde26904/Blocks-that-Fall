let canvas;
let ctx;
let game;

window.onload = function(){
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    ctx.imageSmoothingEnabled = false;

    canvas.width = window.innerWidth/3;
    canvas.height = window.innerHeight;

    game = new Game();

    setInterval(game.step.bind(game), 0);
}