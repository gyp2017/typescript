# 6 Custom Types

## Defining custom types with Interfaces

interface는 정적 타입 언어 (C#, Java)의 interface와 같다.
`Idol` 타입의 interface를 선언한다.
ch6.ts
```js
interface Idol {
}
```

`name` 프로퍼티와 `active` 프로퍼티를 선언한다.
ch6.ts
```js
interface Idol {
  name;
  active;
}
```

`name` 프로퍼티에 string 타입을 선언한다.
`active` 프로퍼티에 boolean 타입을 선언한다.
ch6.ts
```js
interface Idol {
  name: string;
  active: boolean;
}
```

TypeScript가 생성하는 파일에는 비어있다.
interface 정의는 컴파일 타임(compile time)에만 체크를 한다.
런 타임(run time)에는 코드에 영향이 없다. 
ch6.js
```js
```

`Idol` 타입의 interface를 `idol` 변수 선언에 사용한다.
ch6.js
```js
var idol: Idol;
```

빈 리터럴 오브젝트를 할당한다.
`name` 프로퍼티가 없는 객체를 할당 되었다는 경고를 표시한다.
ch6.js
```js
var idol: Idol = {};
```

`name` 프로퍼티에 숫자를 값으로 초기화 한다.
`name` 프로퍼티에 string 타입이 아닌 number 타입이 할당 되었다는 경고를 표시한다.
ch6.js
```js
var idol: Idol = {
  name: 124
};
```

`name` 프로퍼티에 string 타입의 값으로 초기화 한다.
`active` 프로퍼티가 할당 되지 않았다는 경고를 표시한다.
ch6.js
```js
var idol: Idol = {
  name: '사나'
};
```

interface 선언에서 `active` 프로퍼티를 옵션으로 설정한다.
`property?: type`
`Idol` 객체는 `active` 프로퍼티가 선택적이고, 있다면 boolean 타입이어야 한다.
ch6.js
```js
interface Idol {
  name: string;
  active?: boolean;
}
```

`IIdolService` interface를 선언한다.
ch6.js
```js
interface IIdolService {
}
```

`Idol` 을 리턴하는 `getById` 함수를 선언한다.
```js
interface IIdolService {
  getById(id: string): Idol;
}
```

모든 `Idol`을 배열로 리턴하는 `getAll` 함수를 선언한다.
```js
interface IIdolService {
  getAll(): Idol[];
  getById(idolId: string): Idol;
}
```

`Idol` 을 삭제하는 `delete` 함수를 선언한다.
```js
interface IIdolService {
  delete(idolId: string): void;
  getAll(): Idol[];
  getById(idolId: string): Idol;
}
```

`Idol` 을 생성하는 `add` 함수를 선언한다.
```js
interface IIdolService {
  add(idol: Idol): Idol;
  delete(idolId: string): void;
  getAll(): Idol[];
  getById(idolId: string): Idol;
}
```

## Using interfaces to describe functions
함수를 설명하는 interface

동적 언어인 자바스크립트에서 함수는 다음과 같이 변수에 할당할 수 있다.
```js
var $ = function(selector) {
  // Find DOM element
}
```

함수도 객체이기 때문에 프로퍼티와 메서드를 가질 수 있다.
```js
var $ = function(selector) {
  // Find DOM element
}
$.version = 1.12;
```

우선, interface에 number 타입의 `version` 프로퍼티를 선언하다.
```js
interface jQuery {
  version: number;
}
```

자신의 함수를 정의하기 위해 이름이 없는 함수 프로퍼티를 추가한다.
이름은 없지만 파라메터와 리턴 값은 지정한다.
```js
interface jQuery {
  (selector: string): HTMLElement;
  version: number;
}
```

캐스팅 문법으로 함수에 적용한다.
```js
var $ = <jQuery>function(selector) {

}

var element = $('#container');
```

## Extending interface definitions
메소드와 프로퍼티를 추가해서 객체를 확장하는 방법

jQueryElement를 반환하도록 수정한다.
```js
interface jQuery {
  (selector: (string | any)): jQueryElement;
  fn: any;
  version: number;
}
```

jQueryElement는 HTML DOM에 데이터를 할당하거나 추출하는 `data()` 메소드가 있다.
```js
interface jQueryElement {
  data(name: string): any;
  data(name: string, data: any): jQueryElement; 
}
```

다음과 같이 사용한다.
```js
var idol = { name: '모모' };
var myEl = $('#my-idol');
myEl.data('idol', idol);
var savedIdol = myEl.data('idol');
```

jQuery는 `fn` 프로퍼티에 새로운 함수를 추가해서 API를 확장하도록 허용한다.
```js
$.fn.idol = function(idol?: Idol) {
  if (idol) {
    $(this).data('idol', idol)
  } else {
    return $(this).data('idol');
  } 
}
```

```js
element.idol(idol);
```

`jQueryElement` interface에 `idol` 메서드를 추가한다.
```js
interface jQueryElement {
  data(name: string): any;
  data(name: string, data: any): jQueryElement;

  idol(): Idol;
  idol(idol: Idol): jQueryElement;
}
```

jQuery는 써드 파티 라이브러리로 직접 구현한 것이 아니기 때문에 interface를 직접 확장하기는 좋지 않다. TypeScript는 원본 정의의 변경 없이 확장이 가능하다. jQuery의 interface에 변경 대신에 같은 이름의 새로운 interface를 만들 수 있다.
```js
interface jQueryElement {
  data(name: string): any;
  data(name: string, data: any): jQueryElement;

  idol(): Idol;
  idol(idol: Idol): jQueryElement;
}

interface jQueryElement {
}
```

새로운 interface로 커스텀 메서드를 이동한다. 원래 jQuery interface는 유지한다.
```js
interface jQueryElement {
  data(name: string): any;
  data(name: string, data: any): jQueryElement;
}

interface jQueryElement {
  idol(): Idol;
  idol(idol: Idol): jQueryElement;
}
```

`data`, `idol` 메서드를 모두 볼 수 있다.

## Defining constant values with enums
중요한 상수 값 모음

`active` 프로퍼티에 boolean 타입을 지정했었다.
```js
interface Idol {
  name: string;
  active?: boolean;
}
```

Rookie(신인), Active(활동), Break(휴식), Retirement(은퇴) 여러 상태 중의 하나 된다고 변경한다.
`active` 프로퍼티 대신에 `state` 프로퍼티로 변경한다.
```js
interface Idol {
  name: string;
  state?: 1;
}
```

다음과 같이 각 상태에 number 가 지정될 것이다.
```js
/*
Rookie = 0
Active = 1
Break = 2
Retirement = 3
*/
```

코드에서 다음과 같이 사용한다.
```js
function deleteIdol(idol: Idol) {
  if (idol.state != 2) {
    throw "Can't delete incomplete task!"
  }
}
```

“magic number”를 제거하자.
```js
enum IdolState {
  Rookie = 1,
  Active = 2,
  Break = 3,
  Retirement = 4
}
```

TypeScript는 다음과 같은 코드를 만든다.
```js
var IdolState;
(function (IdolState) {
    IdolState[IdolState["Rookie"] = 0] = "Rookie";
    IdolState[IdolState["Active"] = 1] = "Active";
    IdolState[IdolState["Break"] = 2] = "Break";
    IdolState[IdolState["Retirement"] = 3] = "Retirement";
})(IdolState || (IdolState = {}));
```

`IdolState` 오브젝트의 구조는 다음과 같다.
```js
IdolState
// {0: "Rookie", 1: "Active", 2: "Break", 3: "Retirement", Rookie: 0, Active: 1, Break: 2, Retirement: 3}
```

코드에서 enum을 사용한다.
```js
function deleteIdol(idol: Idol) {
  if (idol.state != IdolState.Rookie) {
    throw "Can't delete incomplete task!"
  }
}
```

`Idol` interface의 `state` 프로퍼티 타입을 `IdolState`로 지정한다.
```js
interface Idol {
  name: string;
  state?: IdolState;
}
```
