enum IdolState {
  Rookie,
  Active,
  Break,
  Retirement
}

interface Idol {
  id: number;
  name: string,
  state?: IdolState
}

interface IIdolService {
  add(idol: Idol): Idol;
  delete(idolId: string): void;
  getAll(): Idol[];
  getById(idolId: string): Idol;
}

class IdolService implements IIdolService {

  private static lastId: number = 0;

  add(idol: Idol) {
    idol.id = this.nextId;
    this.idols.push(idol);
    return idol;
  }

  delete(idolId: string): void {
    var toDelete = this.getById(idolId);
    var toDeleteIndex = this.idols.indexOf(toDelete);
    this.idols.splice(toDeleteIndex, 1);
  }

  getAll(): Idol[] {
    return JSON.parse(JSON.stringify(this.idols));
  }

  getById(idolId: string): Idol {
    var filterd = this.idols.filter(x => x.id === idolId);

    if (filterd.length) {
      return filterd[0];
    }

    return null;
  }

  static getNextId() {
    return IdolService.lastId += 0;
  }
}
