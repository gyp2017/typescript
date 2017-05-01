## 9-4 Switching from internal to external modules

파일.네임스페이스.타입 형태이다.
```ts
DataAccess.DataAccess.TodoService
```

외부 모듈로 변경하기 위해서 네임스페이스를 제거한다. `export` 키워드는 남겨둔다. `import` 라인도 제거한다.
```ts
interface IIdolService {
  add(idol: Idol): Idol;
  delete(idolId: number): void;
  getAll(): Idol[];
  getById(idolId: number): Idol;
}
```

```ts
export interface Idol {
  id: number;
  name: string;
  state: IdolState;
}

export enum IdolState {
  Rookie,
  Active,
  Break,
  Retirement
}
```

`tsconfig.json`파일에 모듈 컴파일러를 설정한다. `CommonJS`, `AMD`, `System`, `UMD` 선택 가능.
```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "system"
  }
}
```
