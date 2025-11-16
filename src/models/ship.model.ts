import type { ShipClass } from "../types/shipClass.type.js";
import type { ICoordinates } from "./coordinates.model.js";

export interface IShip {
  position: ICoordinates;
  type: ShipClass;
  length: number;
  direction: boolean;
}

export interface IRequestAddShip {
  type: "add_ships";
  data: {
    gameId: number | string,
    ships: IShip[],
  };
  id: 0;
}

export interface IResponseStartGame {
  type: "start_game";
  data: {
    ships: IShip[],
    currentPlayerIndex: number | string
  };
  id: 0;
}
