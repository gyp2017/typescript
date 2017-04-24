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

class IdolStateChanger {
  
  constructor(private newState: IdolState) {
  }

  canChangeState(idol: Idol): boolean {
    return !!idol;
  }

  changeState(idol: Idol): Idol {
    if (this.canChangeState(idol)) {
      idol.state = this.newState;
    }
    return idol;
  }
}
