## 9-1 Organizing Your Code with Namespaces


`namespace` 키워드와 네임스페이스명으로 작성한다.
```ts
namespace Model {
}
```

`.(periods)`을 추가해서 네임스페이스 계층을 만들 수 있다.
```ts
namespace GirlGroupApp.Model {
}
```

TypeScript는 네입스페이스를 무시하고 아무런 코드를 만들지 않는다.
```ts

```

`Idol` 인터페이스를 작성한다.
```ts
namespace GirlGroupApp.Model {
  interface Idol {
    id: number;
    name: string;
    state: IdolState;
  }
}
```

TypeScript는 인터페이스도 아무런 코드를 작성하기 않기 때문에 작성되는 코드는 없다.
```ts

```

`IdolState` enum을 작성한다.
```ts
namespace GirlGroupApp.Model {
  interface Idol {
    id: number;
    name: string;
    state: IdolState;
  }

  enum IdolState {
    Rookie,
    Active,
    Break,
    Retirement
  }
}
```

작성되는 코드는 다음과 같다.
```ts
var GirlGroupApp;
(function (GirlGroupApp) {
    var Model;
    (function (Model) {
        var IdolState;
        (function (IdolState) {
            IdolState[IdolState["Rookie"] = 0] = "Rookie";
            IdolState[IdolState["Active"] = 1] = "Active";
            IdolState[IdolState["Break"] = 2] = "Break";
            IdolState[IdolState["Retirement"] = 3] = "Retirement";
        })(IdolState || (IdolState = {}));
    })(Model = GirlGroupApp.Model || (GirlGroupApp.Model = {}));
})(GirlGroupApp || (GirlGroupApp = {}));
```

같은 네임스페이스명은 여러번 같은 파일 혹은 다른 파일에서 선언되어도 유효하다. 다음과 같이 분리할 수 있다.
```ts
namespace GirlGroupApp.Model {
  interface Idol {
    id: number;
    name: string;
    state: IdolState;
  }
}

namespace GirlGroupApp.Model {
  enum IdolState {
    Rookie,
    Active,
    Break,
    Retirement
  }
}
```

같은 파일에서 다른 네임스페이스명 선언도 가능하다.
```ts
namespace GirlGroupApp.DataAccess {
  interface IIdolService {
    add(todo: Idol): Idol;
    delete(todoId: number): void;
    getAll(): Idol[];
    getById(todoId: number): Idol;
  }
}
```

네임스페이스명 안으로 타입들을 정의하면 TypeScript는 `IIdolService`에서 `Idol` 타입을 알 수 없다고 경고한다. `export` 키워드를 사용해서 노출시킬 필요가 있다.
```ts
export interface Idol { }

export enum IdolState { }

export interface IIdolService { }
```

같은 네임스페이스명을 사용하는 `Idol`와 `IdolState` 사이의 참조는 해결된다. `GirlGroupApp.DataAccess` 네임스페이스명의 `IIdolService` 인터페이스는 `GirlGroupApp.Model.Idol`로 변경해서 참조하도록 해야한다.
```ts
namespace GirlGroupApp.DataAccess {
  export interface IIdolService {
    add(todo: GirlGroupApp.Model.Idol): GirlGroupApp.Model.Idol;
    delete(todoId: number): void;
    getAll(): GirlGroupApp.Model.Idol[];
    getById(todoId: number): GirlGroupApp.Model.Idol;
  }
}
```

다른 네임스페이스명의 타입을 정의하기 위해 `import`를 사용한다.
```ts
namespace GirlGroupApp.DataAccess {

  import Idol = GirlGroupApp.Model.Idol;

  export interface IIdolService {
    add(todo: Idol): Idol;
    delete(todoId: number): void;
    getAll(): Idol[];
    getById(todoId: number): Idol;
  }
}
```

```ts
```

```ts
```
