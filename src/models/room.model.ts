import type { IPlayer } from "./player.model.js";

export interface IRoom {
  roomId: string;
  roomUsers: IPlayer[];
}

export interface IRequestRoom {
  type: "create_room";
  data: "";
  id: 0;
}

export interface IRequestAddUser {
  type: "add_user_to_room";
  data: {
    indexRoom: number | string
  };
  id: 0;
}

export interface IResponseCreateGame {
  type: "create_game";
  data: {
    idGame: number | string,
    idPlayer: number | string,
  };
  id: 0;
}

export interface IResponseUpdateRoom {
  type: "update_room";
  data: IRoom[];
}
