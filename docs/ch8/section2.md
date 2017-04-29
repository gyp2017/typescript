## 8.2 Creating generic classes

제네릭을 클래스에서 사용 할 수 있다. 제네릭 타입을 Array 타입으로 사용한다. 다음 두 선언은 같다. 개인의 선호에 따라 선택하면 된다.
```ts
var array: number[] = [1,2];

var array: Array<number> = [1, 2];
```


첫 번째 인스턴스는 `<number, string>`, 두 번째 인스턴스는 `<string, string>`, 세 번째 인스턴스는 `<number, Date>`로 인식한다.
```ts
let pair1 = new KeyValuePair(1, 'First');
let pair2 = new KeyValuePair('2', Date.now());
let pair3 = new KeyValuePair(3, 'Third');
```

제네릭 타입에 실제 타입을 선언할 수 있다.
```ts
let pair1 = new KeyValuePair<number, string>(1, 'First');
let pair2 = new KeyValuePair<string, Date>('2', new Date(Date.now()));
let pair3 = new KeyValuePair<number, string>(3, 'Third');
```

`KeyValuePair` 타입을 이터레이터로 사용할 수 있다. `KeyValuePair` 타입의 컬렉션을 정의해서 `print` 함수에서 사용한다.
```ts
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

`KeyValuePairPrinter<number, string>` 타입으로 인식한다.
```ts
let pairs = new KeyValuePairPrinter([pair1, pair3]);
pairs.print();
```

`<string, Date>` 타입의 `pair2`를 추가하면 에러를 표시한다.
```ts
let pairs = new KeyValuePairPrinter([pair1, pair2, pair3]);
```
