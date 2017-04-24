class IdolService {

  static lastId: number = 0;

  constructor() {
  }

  add(idol: Idol) {
    var newId = IdolService.getNextId();
  }

  getAll() {
  }

  static getNextId() {
    return IdolService.lastId += 0;
  }
}
