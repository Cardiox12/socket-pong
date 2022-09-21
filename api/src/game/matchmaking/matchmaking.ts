import { randomUUID } from "crypto";
import { GameMatch } from "../interfaces/gameMatch";
import { GameUser } from "../interfaces/gameUser";

export class Matchmaking {
    private subscribers: GameUser[];
    
    constructor() {
        this.subscribers = [];
    }

    subscribe(user: GameUser) {
        this.subscribers.push(user);
    }

    // TODO: Replace with User object
    getMatch() : GameMatch {
        if ( this.subscribers.length > 1 ) {
            const player = this.subscribers.shift();
            const opponent = this.subscribers.shift();

            return { 
                game_id: randomUUID(), 
                player, 
                opponent
            };
        }
        return null;
    }
}