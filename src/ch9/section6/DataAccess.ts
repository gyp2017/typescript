// import * as Model from './Model';
// import Idol = Model.Idol;

import { Idol, IdolState as IState } from './Model';

// import './Model';

interface IIdolService {
  add(idol: Idol): Idol;
  delete(idolId: number): void;
  getAll(): Idol[];
  getById(idolId: number): Idol;
}

let _lastId: number = 0;

function generateIdolId() {
  return _lastId += 1;
}

export class IdolService implements IIdolService {

  constructor(private idols: Idol[]) {
  }

  add(idol: Idol): Idol {
    idol.id = generateIdolId();
    this.idols.push(idol);
    return idol;
  }

  delete(idolId: number): void {
    let toDelete = this.getById(idolId);
    let deletedIndex = this.idols.indexOf(toDelete);
    this.idols.splice(deletedIndex, 1);
  }

  getAll(): Idol[] {
    let clone = JSON.stringify(this.idols);
    return JSON.parse(clone);
  }

  getById(idolId: number) {
    let filterd = this.idols.filter(idol => idol.id == idolId);
    if (filterd.length) {
      return filterd[0];
    }
    return null;
  }
}
