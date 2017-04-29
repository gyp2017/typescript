// function totalLength(x: { length: number }, y: { length: number }) {
//   var total: number = x.length + y.length;
//   return total;
// }

interface IHaveALength {
  length: number
}

function totalLength<T extends IHaveALength>(x: T, y: T) {
  var total: number = x.length + y.length;
  return total;
}

var length = totalLength([1, 2], [1, 2, 3])

class CustomArray<T> extends Array<T> {
  toJson(): string {
    return JSON.stringify(this);
  }
}

class KeyValuePair<K, V> {
  constructor(public key: K, public value: V) {}
}

class KeyValuePairPrinter<K, V, P extends KeyValuePair<K, V>> {

  constructor(private pairs: KeyValuePair<K, V>[]) {
  }

  print() {
    for (let p of this.pairs) {
      console.log(`${p.key}: ${p.value}`);
    }
  }
}

let pair1 = new KeyValuePair<number, string>(1, 'First');
let pair2 = new KeyValuePair<string, Date>('2', new Date(Date.now()));
let pair3 = new KeyValuePair<number, string>(3, 'Third');

let pairs = new KeyValuePairPrinter([pair1, pair3]);

