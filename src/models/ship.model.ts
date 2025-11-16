import type { ShipClass } from "../types/shipClass.type.js";

export interface IShip {
    id: string;
    name: string;
    shipClass: ShipClass;
}