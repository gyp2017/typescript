export interface Idol {
  id?: number;
  name: string;
  state: IdolState;
}

export enum IdolState {
  Rookie,
  Active,
  Break,
  Retirement
}
