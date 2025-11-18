import type { IPlayer } from "../models/player.model.js";
import type { IRequestAddUser, IRoom } from "../models/room.model.js";
import * as gameController from "./game.controller.js";
import * as playerController from "./player.controller.js";

// TODO: change type
const rooms = new Map();

export function createRoom() {
  const indexRoom = rooms.size;
  const newRoom: IRoom = {
    roomId: indexRoom,
    roomUsers: [],
  }
  rooms.set(indexRoom, newRoom);
  return newRoom;
}

export function addUser(message: IRequestAddUser, user: IPlayer) {
  const indexRoom = message.data.indexRoom;
  if (rooms.has(indexRoom)) {
    // TODO: change rooms type
    const currentRoom: IRoom = rooms.get(indexRoom);
    currentRoom.roomUsers.push(user);
    return true;
  }
  return false;
}

export function createGame(roomId: number | string, idPlayer: number) {
  const player = playerController.getPlayerById(idPlayer)
  const newGame = gameController.createGame(idPlayer);
  return newGame;
}

export function getRoomWithOnePlayer() {
  return Array.from(rooms).map(r => r[1]).filter(r => r.roomUsers.length === 1);
}
