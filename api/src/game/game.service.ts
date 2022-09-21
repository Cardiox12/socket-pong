import { Injectable } from "@nestjs/common";
import { match } from "assert";
import { Socket } from "socket.io";

interface GameUser {
    username: string;
    socket: Socket
}

interface GameMatch {
    player: GameUser;
    opponent: GameUser;
}

@Injectable()
export class GameService {
    private users: GameUser[];

    constructor() {
        this.users = [];
    }

    subscribeToMatchmaking(gameUser: GameUser)  {
        this.users.push(gameUser);
    }

    getMatches() : GameMatch[] {
        const matches: GameMatch[] = [];

        while ( this.users.length > 1 ){
            matches.push({
                player: this.users.shift(),
                opponent: this.users.shift()
            });
        }
        return matches;
    }
}

