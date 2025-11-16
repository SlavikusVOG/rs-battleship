import type { IShip } from "./ship.model.js";

export interface IPlayer {
    id: string;
    name: string;
    roomId: string;
    ship: IShip;
}