## 9-2 Using namespaces to encapsulate private members

TypeScript의 네임스페이스를 사용해서 `IdolState` 열거형을 선언한다.
```ts
namespace GGApp.Model {
  export enum IdolState {
    Active
  }
}
```

다음과 같은 코드가 생성된다. 즉시호출(“Immediately-Invoked Function Expression”, “IIFE”) 패턴으로 코드를 은닉하고 노출될 부분을 노출시킴면서 호출한다.
```ts
var GGApp;
(function (GGApp) {
    var Model;
    (function (Model) {
        var IdolState;
        (function (IdolState) {
            IdolState[IdolState["Active"] = 0] = "Active";
        })(IdolState = Model.IdolState || (Model.IdolState = {}));
    })(Model = GGApp.Model || (GGApp.Model = {}));
})(GGApp || (GGApp = {}));
```


```ts
namespace DataAccess {

  import Idol = GGApp.Model.Idol;

  interface IIdolService {
    add(idol: Idol): Idol;
    delete(idolId: number): void;
    getAll(): Idol[];
    getById(idolId: number): Idol;
  }

  class IdolService implements IIdolService {

    private static _lastId: number = 0;

    get nextId() {
      return IdolService._lastId += 1;
    }

    constructor(private idols: Idol[]) {
    }
  
    add(idol: Idol): Idol {
      idol.id = this.nextId;
      this.idols.push(idol);
      return idol;
    }

    delete(idolId: number): void {
      let toDelete = this.getById(idolId);
      let deletedIndex = this.idols.indexOf(toDelete);
      this.idols.splice(deletedIndex, 1);
    }

    getAll(): Idol[] {
      let clone = JSON.stringify(this.idols);
      return JSON.parse(clone);
    }

    getById(idolId: number) {
      let filterd = this.idols.filter(idol => idol.id == idolId);
      if (filterd.length) {
        return filterd[0];
      }
      return null;
    }
  }
}
```


```ts
namespace DataAccess {

  let _lastId: number = 0;

  function generateIdolId() {
    return _lastId += 1;
  }

  class IdolService implements IIdolService {

    constructor(private idols: Idol[]) {
    }
```


```ts
```


```ts
```


```ts
```


```ts
```


```ts
```


```ts
```


```ts
```


```ts
```


```ts
```
