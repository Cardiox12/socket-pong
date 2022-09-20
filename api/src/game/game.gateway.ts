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
        console.log(username);
        this.gameService.addToMatchmaking({ username, socket });
        console.log("Subscribed to matchmaking!");
        const matches = this.gameService.getMatches();
        
        matches.forEach(({ player, opponent }) => {
            console.log({ player });
            console.log(`${player.username} vs ${opponent.username}`);
        })
    }
}