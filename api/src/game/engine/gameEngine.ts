import { GameVec } from "./gameVec";

export class GameEngine {
    player_score:           number;
    opponent_score:         number;
    player_paddle_pos:      number;
    opponent_paddle_pos:    number;
    ball_pos:               GameVec;
    ball_dir:               GameVec;

    constructor() {
        this.player_score = 0;
        this.opponent_score = 0;
        this.player_paddle_pos = 0;
        this.opponent_paddle_pos = 0;
        this.ball_pos = new GameVec(0, 0);
        this.ball_dir = new GameVec(0, 0);
    }
};