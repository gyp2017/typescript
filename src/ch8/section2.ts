var array: number[] = [1, 2, 3];

var array: Array<number> = [1, 2, 3];

class KeyValuePair<K, V> {
  constructor(public key: K, public value: V) {}
}

// let pair1 = new KeyValuePair(1, 'First');
// let pair2 = new KeyValuePair('2', Date.now());
// let pair3 = new KeyValuePair(3, 'Third');

let pair1 = new KeyValuePair<number, string>(1, 'First');
let pair2 = new KeyValuePair<string, Date>('2', new Date(Date.now()));
let pair3 = new KeyValuePair<number, string>(3, 'Third');

class KeyValuePairPrinter<K, V> {

  constructor(private pairs: KeyValuePair<K, V>[]) {
  }

  print() {
    for (let p of this.pairs) {
      console.log(`${p.key}: ${p.value}`);
    }
  }
}

let pairs = new KeyValuePairPrinter([pair1, pair3]);
pairs.print();
