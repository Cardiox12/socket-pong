import { io } from "https://cdn.socket.io/4.4.1/socket.io.esm.min.js";
// const socket = io("ws://localhost:3000");

let socket;

const matchmakingButton = document.getElementById("matchmaking-button");
const matchmakingInput = document.getElementById("matchmaking-input");

function subscribeMatchmaking() {
    const username = matchmakingInput.value;
    
    if ( username.length == 0 ){
        return;
    }
    socket = io("ws://localhost:3000");
    socket.emit("subscribe-matchmaking", username);
}

matchmakingButton.addEventListener("click", subscribeMatchmaking);
matchmakingInput.addEventListener("keyup", (event) => {
    if ( event.key === "Enter" )
        subscribeMatchmaking();
})



// const game = new Pong("canvas");

// game.run();

// document.addEventListener("keydown", function(event) {
//     if ( event.key == "ArrowUp" ) {
//         game.upLeft();
//     } else if ( event.key == "ArrowDown" ) {
//         game.downLeft();
//     } else if ( event.key == "ArrowLeft" ) {
//         game.upRight();
//     } else if ( event.key == "ArrowRight" ) {
//         game.downRight();
//     }
// });