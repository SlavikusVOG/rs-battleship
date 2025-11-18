
import type { IGame } from "../models/game.model.js";

// TODO: move to store
const games = new Map();

export function createGame(playerId: number | string) {
  const idGame = games.size;
  const idPlayer = playerId;
  const newGame: IGame = {
    gameId: idGame,
    idPlayer,
    ships: [],
  }
  games.set(idGame, newGame)
}
