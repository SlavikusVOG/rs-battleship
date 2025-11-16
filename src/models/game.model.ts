import type { AttachStatus } from "../types/attackStatus.type.js";
import type { ICoordinates } from "./coordinates.model.js";
import type { IShip } from "./ship.model.js";

export interface IGame {
  gameId: string | number;
  ships: IShip[];
  idPlayer: number | string
}

export interface IRequestGameAttack {
  type: "attack";
  data: {
    gameId: number | string,
    x: number,
    y: number,
    indexPlayer: number | string,
  };
  id: 0;
}

export interface IResponseGameAttack {
  type: "attack";
  data: {
    position: ICoordinates,
    currentPlayer: number | string,
    status: AttachStatus,
  }
}

export interface IRequestGameRandomAttack {
  type: "randomAttack";
  data: {
    gameId: number | string,
    indexPlayer: number | string,
  };
  id: 0;
}

export interface IResponseGameTurn {
  type: "turn";
  data: {
    currentPlayer: number | string,
  };
  id: 0;
}

export interface IResponseGameFinish {
  type: "finish";
  data: {
    winPlayer: number | string,
  };
  id: 0;
}
