## 9-6 Importing modules using ECMAScript 2015 syntax


`require` 문법
```ts
import Model = require('./Model');
```

ECMAScript 2015 문법은 다음과 같다.
```ts
import * as Model from './Model';
```

ECMAScript는 별칭(aliase)을 사용할 수 있다.
```ts
import * as Model from './Model';
// import Idol = Model.Idol;
```

`{, }`(brackets) 안에 필요한 부분을 정의한다.
```ts
import { Idol } from './Model';
```

리스트 형태로 사용 가능하다.
```ts
import { Idol, IdolState } from './Model'
```

`as` 구문 뒤에 별칭을 사용할 수 있다.
```ts
import { Idol, IdolState as IState } from './Model';
```

다음과 같이 전체를 임포트 할수 있다.
```ts
import './Model';
```
