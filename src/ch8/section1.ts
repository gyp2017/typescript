enum IdolState {
  Active,
  Retired
}

interface Idol {
  id: number,
  name: string,
  state: IdolState
}

function clone<T>(value: T): T {
  let serialized = JSON.stringify(value);
  return JSON.parse(serialized);
}

clone('twice')
clone(89)

let idol: Idol = {
  id: 1,
  name: '정연',
  state: IdolState.Active
};
clone(idol)

clone({name: '나나'})
