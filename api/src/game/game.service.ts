import { Injectable } from "@nestjs/common";
import { randomUUID } from "crypto";
import { Socket } from "socket.io";
import { GameMatch } from "./interfaces/gameMatch";
import { GameUser } from "./interfaces/gameUser";
import { Matchmaking } from "./matchmaking/matchmaking";

@Injectable()
export class GameService {
    private matchmaking: Matchmaking;
    // private users: GameUser[];

    constructor() {
        this.matchmaking = new Matchmaking();
    }

    /**
     * Subscribe
     * Subscribe a user to matchmaking.
     * @param user
     */
    subscribe(user: GameUser)  {
        this.matchmaking.subscribe(user);
    }

    
    /**
     * Matches
     * Matches try to find opponents to users subscribed to matchmaking,
     * returning a list of GameMatch if matches are available.
     * @returns GameMatch[]
     */
    matches() : GameMatch[] {
        const matches: GameMatch[] = [];
        let match = this.matchmaking.getMatch();
        
        while ( match != null ){
            matches.push(match);
            match = this.matchmaking.getMatch();
        }
        return matches;
    }
}

