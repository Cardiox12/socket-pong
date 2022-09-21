import { io } from "https://cdn.socket.io/4.4.1/socket.io.esm.min.js";
// const socket = io("ws://localhost:3000");

const socket = io("ws://localhost:3000");

const matchmakingButton = document.getElementById("matchmaking-button");
const matchmakingInput = document.getElementById("matchmaking-input");

function subscribeMatchmaking() {
    const username = matchmakingInput.value;
    
    if ( username.length == 0 ){
        return;
    }
    socket.emit("subscribe-matchmaking", username);
}

socket.on("matchmaking-done", ({ game_id, opponent }) => {
    alert(`You have been matched with ${opponent} - game id ${game_id}`);
});

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