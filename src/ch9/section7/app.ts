import { Idol, IdolState } from './Model';
import { IdolService } from './DataAccess';

let service = new IdolService([]);

service.add({
  id: 1,
  name: '모모',
  state: IdolState.Active
});

service.add({
  name: '사나',
  state: IdolState.Rookie
});

service.add({
  name: '정연',
  state: IdolState.Retirement
});

service.add({
  name: '쯔위',
  state: IdolState.Break
});

let idols = service.getAll();

idols.forEach(idol =>
  console.log(`${idol.name} [${IdolState[idol.state]}]`)
);
