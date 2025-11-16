import type { IPlayer } from "../models/player.model.js";
import type { IRequestRegData } from "../models/regdata.model.js";

const players = new Map();

export function registerPlayer(message: IRequestRegData) {
  const name: string | number = message.data.name;
  const password: string = message.data.password;
  if (players.has(name)) {
    return false;
  }
  else {
    const index = players.size;
    const newPlayer: IPlayer = {
      index,
      name,
      password,
      wins: 0,
    }
    players.set(index, newPlayer);
    return newPlayer;
  }
}

export function getWinners() {
  const winners = Array.from(players).map(p => p[1]).map(p => ({name: p.name, wins: p.wins}));
  return winners
}

export function getPlayerById(playerId: number) {
  if (players.has(playerId)) {
    return players.get(playerId);
  }
  return null;
}
