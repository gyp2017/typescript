// Defining custom types with Interfaces
interface Idol {
  name: string;
  active?: boolean;
}

var idol: Idol = {
  name: '사나'
};

interface IIdolService {
  add(idol: Idol): Idol;
  delete(id: string): void;
  getAll(): Idol[];
  getById(id: string): Idol;
}
