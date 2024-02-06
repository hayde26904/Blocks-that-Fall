function keyDown(event){
    if(!game.board.pieces[0].locked){
        if(event.key == 'd'){
            game.board.pieces[0].rotate(1);
        } else if(event.key == 'a'){
            game.board.pieces[0].rotate(-1);
        }
    }
}

function keyUp(event){

}

document.addEventListener("keydown", keyDown);
document.addEventListener("keyup", keyUp);