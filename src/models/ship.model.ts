import { ShipClass } from "../types/shipClass.type";

export interface IShip {
    id: string;
    name: string;
    shipClass: ShipClass;
}