import { IShip } from "./ship.model";

export interface IPlayer {
    id: string;
    name: string;
    roomId: string;
    ship: IShip;
}