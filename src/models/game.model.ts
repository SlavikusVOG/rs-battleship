import type { IPlayer } from "./player.model.js";
import type { IRoom } from "./room.model.js";

export interface IGame {
    id: string;
    room: IRoom;
    players: IPlayer[];
}