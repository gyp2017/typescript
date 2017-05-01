namespace GirlGroupApp.Model {
  export interface Idol {
    id: number;
    name: string;
    state: IdolState;
  }
}

namespace GirlGroupApp.Model {
  export enum IdolState {
    Rookie,
    Active,
    Break,
    Retirement
  }
}

namespace GirlGroupApp.DataAccess {

  import Idol = GirlGroupApp.Model.Idol;

  export interface IIdolService {
    add(todo: Idol): Idol;
    delete(todoId: number): void;
    getAll(): Idol[];
    getById(todoId: number): Idol;
  }
}
