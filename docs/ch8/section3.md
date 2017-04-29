## 8-3 Creating generic constraints

익명타입을 사용한 함수이다.
```ts
function totalLength(x: { length: number }, y: { length: number }) {
  var total: number = x.length + y.length;
  return total;
}

var length = totalLength('Jess', [1, 2, 3])
```

익명 타입을 제네릭 타입으로 전환할 수 있다.
```ts
function totalLength<T>(x: T, y: T) {
  var total: number = x.length + y.length;
  return total;
}
```

`extends` 키워드와 익명타입을 사용해서 제네릭 타입을 정의할 수 있다.
```ts
function totalLength<T extends {length: number}>(x: T, y: T) {
  var total: number = x.length + y.length;
  return total;
}
```

`IHaveALength` 인터페이스를 정의한다.
```ts
interface IHaveALength {
  length: number
}

function totalLength<T extends IHaveALength>(x: T, y: T) {
  var total: number = x.length + y.length;
  return total;
}
```

제네릭을 사용하는 타입을 상속할 수 있다.
```ts
class CustomArray<T> extends Array<T> {
  toJson(): string {
    return JSON.stringify(this);
  }
}
```

```ts
class KeyValuePair<K, V> {
  constructor(public key: K, public value: V) {}
}

class KeyValuePairPrinter<K, V> {

  constructor(private pairs: KeyValuePair<K, V>[]) {
  }

  print() {
    for (let p of this.pairs) {
      console.log(`${p.key}: ${p.value}`);
    }
  }
}
```

`KeyValuePair` 타입을 확장하는 타입이름을 설정한다. 다음과 같이 정의하면 `K`, `V` 이름이 없다고 알린다.
```ts
class KeyValuePairPrinter<P extends KeyValuePair<K, V>> {
```

`K`, `V` 이름을 먼저 설정한다.
```ts
class KeyValuePairPrinter<K, V, P extends KeyValuePair<K, V>> {
```
