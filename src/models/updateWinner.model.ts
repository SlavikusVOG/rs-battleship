export interface IWinner {
  name: string;
  wins: number;
}

export interface IRequestUpdateWinners {
  type: "update_winners";
  data: IWinner[];
  id: 0;
}
