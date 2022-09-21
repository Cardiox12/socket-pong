import { GameUser } from "./gameUser";

export interface GameMatch {
    game_id: string;
    player: GameUser;
    opponent: GameUser;
}