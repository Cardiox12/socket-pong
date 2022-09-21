import { SubscribeMessage, WebSocketGateway } from "@nestjs/websockets";
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
        
    }

    @SubscribeMessage("subscribe-matchmaking")
    async handleSubscribeMatchmaking(socket: Socket, username: string) {
        console.log(`${username} subscribed to matchmaking`);
        this.gameService.subscribe({ username, socket });
        const matches = this.gameService.matches();
        
        matches.forEach((match) => {
            const { game_id, player, opponent } = match;

            console.log(`${player.username} vs ${opponent.username}`);
            player.socket.emit("matchmaking-done", { game_id, opponent: opponent.username });
            opponent.socket.emit("matchmaking-done", { game_id, opponent: player.username });
        })
    }
}