export interface IRequestRegData {
  type: "reg";
  data: {
    name: string,
    password: string,
  };
  id: 0;
}

export interface IResponseRegData {
  type: "reg";
  data: {
    name: string,
    index: number | string,
    error: boolean,
    errorText: string,
  };
  id: 0;
}
