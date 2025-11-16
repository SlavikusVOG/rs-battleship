import type { IShip } from "./ship.model.js";

export interface IPlayer {
    index: string;
    name: string;
    password: string;
    roomId: string;
    ship: IShip;
}
