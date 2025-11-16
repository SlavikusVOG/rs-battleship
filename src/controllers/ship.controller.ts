import type { IRequestAddShip } from "../models/ship.model.js";

const gameBoards = [];

export function addShip(message: IRequestAddShip) {
  const gameId = message.data.gameId;
  const ships = message.data.ships;
  const indexPlayer = message.data.indexPlayer;
  const newGameBoard = {
    gameId,
    ships,
    indexPlayer,
  }
  gameBoards.push(newGameBoard);
}
