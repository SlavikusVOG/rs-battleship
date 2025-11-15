import { IPlayer } from "./player.model";
import { IRoom } from "./room.model";

export interface IGame {
    id: string;
    room: IRoom;
    players: IPlayer[];
}