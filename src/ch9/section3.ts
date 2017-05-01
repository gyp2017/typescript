namespace GGApp.Model {
  export enum IdolState {
    Rookie,
    Active,
    Break,
    Retirement
  }
}

namespace GGApp.Model {
  export interface Idol {
    id: number;
    name: string;
    state: IdolState;
  }
}
