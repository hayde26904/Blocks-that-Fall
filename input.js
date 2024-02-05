function keyDown(event){
    if(event.key == 'd'){
        game.board.pieces[0].rotate();
    }
}

function keyUp(event){

}

document.addEventListener("keydown", keyDown);
document.addEventListener("keyup", keyUp);