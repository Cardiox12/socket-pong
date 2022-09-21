import { Socket } from "socket.io";

export interface GameUser {
    username: string;
    socket: Socket;
}