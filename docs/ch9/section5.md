## 9-5 Importing modules using Require syntax

`Model`파일 모듈을 임포트 하기 위해 다음과 같이 파일 경로(path)를 작성한다. 파일 확장자(.js or .ts)는 명시하지 않는다.
`DataAccess.ts`
```ts
import Model = require('./Model');
```

`Model` 모듈을 다음과 같이 사용한다.
`DataAccess.ts`
```ts
import Model = require('./Model');

interface IIdolService {
  add(idol: Model.Idol): Model.Idol;
  delete(idolId: number): void;
  getAll(): Model.Idol[];
  getById(idolId: number): Model.Idol;
}
```

혹은 다음과 같이 사용한다.
`DataAccess.ts`
```ts
import Model = require('./Model');
import Idol = Model.Idol;

interface IIdolService {
  add(idol: Idol): Idol;
  delete(idolId: number): void;
  getAll(): Idol[];
  getById(idolId: number): Idol;
}
```

다음과 같은 사용은 TypeScript가 지원하지 않는다.
```ts
import Idol = require('./Model').Idol;
```
