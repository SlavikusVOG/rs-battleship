import type { IPlayer } from "./player.model.js";

export interface IRoom {
    id: string;
    players: IPlayer[];
}
