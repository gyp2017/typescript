// Defining custom types with Interfaces
interface Idol {
  name: string;
  state?: IdolState;
}

/*
Rookie = 1
Active = 2
Break = 3
Retirement = 4
*/

// var idol: Idol = {
//   name: '사나'
// };

interface IIdolService {
  add(idol: Idol): Idol;
  delete(idolId: string): void;
  getAll(): Idol[];
  getById(idolId: string): Idol;
}

interface jQuery {
  (selector: (string | any)): jQueryElement;
  fn: any;
  version: number;
}

var $ = <jQuery>function(selector) {
}

interface jQueryElement {
  data(name: string): any;
  data(name: string, data: any): jQueryElement;
}

interface jQueryElement {
  idol(): Idol;
  idol(idol: Idol): jQueryElement;
}


$.fn.idol = function(idol?: Idol) {
  if (idol) {
    $(this).data('idol', idol)
  } else {
    return $(this).data('idol');
  } 
}

// var idol = { name: '모모' };
// var myEl = $('#my-idol');
// myEl.data('idol', idol);
// var savedIdol = myEl.data('idol');
// console.log(savedIdol);

// myEl.idol(idol);
// element.todo(todo);

enum IdolState {
  Rookie,
  Active,
  Break,
  Retirement
}

function deleteIdol(idol: Idol) {
  if (idol.state != IdolState.Rookie) {
    throw "Can't delete incomplete task!"
  }
}

// var idol: { name: string };
// idol = { age: 20 };

function totalLength1(x: (string | any[]), y: (string | any[])): number {
  var total: number = x.length + y.length;
  return total;
}

function totalLength2(x: { length: number }, y: { length: number }) {
  var total: number = x.length + y.length;
  return total;
}
