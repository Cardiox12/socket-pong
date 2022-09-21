import { MessageBody, SubscribeMessage, WebSocketGateway } from "@nestjs/websockets";
import { Socket } from "socket.io";
import { GameService } from "./game.service";

@WebSocketGateway({
    cors: {
        origin: true
    }
})
export class GameGateway {
    constructor(
        private gameService: GameService
    ) { }

    async handleConnection(socket: Socket) {
        console.log("A user has joined!");
    }

    @SubscribeMessage("subscribe-matchmaking")
    async handleSubscribeMatchmaking(socket: Socket, username: string) {
        console.log(`${username} subscribed to matchmaking`);
        this.gameService.subscribeToMatchmaking({ username, socket });
        const matches = this.gameService.getMatches();
        
        matches.forEach(({ player, opponent }) => {
            player.socket.emit("matchmaking-done", opponent.username);
            opponent.socket.emit("matchmaking-done", player.username);
            console.log(`${player.username} vs ${opponent.username}`);
        })
    }
}