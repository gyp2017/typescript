# 8 Generics

## 8.1 Creating generic functions

`clone`은 JSON API를 사용해서 객체를 복제하는 함수이다. 함수의 파라메터(`value`)에 넘겨준 객체의 타입이 반환된다.
```ts
function clone(value) {
  let serialized = JSON.stringify(value);
  return JSON.parse(serialized);
}
```

함수명 다음에 `<`, `>` 기호와 제네릭 타입 파라메터(generic type parameter)의 이름을 준다. "T"는 컨벤션이다.
```ts
function clone<T>(value) {
```

함수 안에서 제네릭 타입을 사용할 수 있다. 파라메터의 타입으로 설정한다.
```ts
function clone<T>(value: T) {
```

리턴값의 타입으로 설정한다.
```ts
function clone<T>(value: T): T {
```

string 타입을 값으로 넘겨주면 "T"는 string 타입이 된다.
```ts
clone('twice')
```

number 타입이면 "T"는 number 타입이 된다.
```ts
clone(89)
```

다음과 같은 커즈컴 타입도 동작한다.
```ts
let idol: Idol = {
  id: 1,
  name: '정연',
  state: IdolState.Active
};
clone(idol)
```

객체 리터럴을 사용할 수 있다.
```ts
clone({name: '나나'})
```
