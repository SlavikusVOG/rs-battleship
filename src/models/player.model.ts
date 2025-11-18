import type { IShip } from "./ship.model.js";

export interface IPlayer {
    index: string | number;
    name: string;
    password: string;
    wins: number;
    roomId?: string | number;
    gameId?: string | number;
    ships?: IShip[];
}
