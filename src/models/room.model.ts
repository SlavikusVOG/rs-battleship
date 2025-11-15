import { IPlayer } from "./player.model";

export interface IRoom {
    id: string;
    players: IPlayer[];
}
