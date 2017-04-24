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

var idol = {
  name: '사나',
  get state() {
    return this._state;
  },
  set state(newState) {
    if ( newState == IdolState.Retirement ) {
      var canBeRetirement =
        this._state == IdolState.Active ||
        this._state == IdolState.Break;
      
      if (!canBeRetirement) {
        throw 'Idol must be Active or Braek in order to be marked as Retirement';
      }
    }
    this._state = newState;
  }
}

console.log(idol.name);
console.log(idol.state);
idol.state = IdolState.Rookie;
console.log(idol.state);
idol.state = IdolState.Active;
console.log(idol.state);
idol.state = IdolState.Retirement;
console.log(idol.state);

class SmartIdol {
  name: string;
  _state: IdolState;

  constructor(name: string) {
    this.name = name;
  }

  get state() {
    return this._state;
  }

  set state(newState) {
    if ( newState == IdolState.Retirement ) {
      var canBeRetirement =
        this._state == IdolState.Active ||
        this._state == IdolState.Break;
      
      if (!canBeRetirement) {
        throw 'Idol must be Active or Braek in order to be marked as Retirement';
      }
    }
    this._state = newState;
  }
}

var jIdol = new SmartIdol("전효성");
jIdol.state = IdolState.Rookie;
jIdol.state = IdolState.Retirement;
