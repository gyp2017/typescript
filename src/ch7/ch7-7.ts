interface Idol {
  name: string,
  state: IdolState
}

enum IdolState {
  Rookie,
  Active,
  Break,
  Retirement
}

abstract class IdolStateChanger {

  constructor(protected newState: IdolState) {
  }

  abstract canChangeState(idol: Idol): boolean;

  changeState(idol: Idol): Idol {
    if (this.canChangeState(idol)) {
      idol.state = this.newState;
    }
    return idol;
  }
}

class RetirementIdolStateChanger extends IdolStateChanger {

  constructor() {
    super(IdolState.Retirement);
  }

  canChangeState(idol: Idol): boolean {
    return !!idol && (
      idol.state == IdolState.Active ||
      idol.state == IdolState.Retirement);
  }
}

class SmartIdol {

  constructor(public name: string) {
  }
}
