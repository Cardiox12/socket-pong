import { io } from "https://cdn.socket.io/4.4.1/socket.io.esm.min.js";
const socket = io("ws://localhost:3000");

socket.on('connect', () => {
    console.log(socket.id)
})

const game = new Pong("canvas");

game.run();

document.addEventListener("keydown", function(event) {
    if ( event.key == "ArrowUp" ) {
        game.upLeft();
    } else if ( event.key == "ArrowDown" ) {
        game.downLeft();
    } else if ( event.key == "ArrowLeft" ) {
        game.upRight();
    } else if ( event.key == "ArrowRight" ) {
        game.downRight();
    }
});