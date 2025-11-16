import type { IRequestGameAttack, IRequestGameRandomAttack, IResponseGameAttack, IResponseGameFinish, IResponseGameTurn } from "./game.model.js";
import type { IRequestRegData, IResponseRegData } from "./regdata.model.js";
import type { IRequestAddUser, IRequestCreateRoom, IResponseCreateGame, IResponseUpdateRoom } from "./room.model.js";
import type { IRequestAddShip, IResponseStartGame } from "./ship.model.js";
import type { IRequestUpdateWinners } from "./updateWinner.model.js";

export type WsMessage = IRequestAddShip
  | IRequestAddUser
  | IRequestGameAttack
  | IRequestGameRandomAttack
  | IRequestRegData
  | IRequestCreateRoom
  | IRequestUpdateWinners
  | IResponseCreateGame
  | IResponseGameAttack
  | IResponseGameFinish
  | IResponseGameTurn
  | IResponseRegData
  | IResponseStartGame
  | IResponseUpdateRoom