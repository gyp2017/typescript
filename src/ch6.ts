// Defining custom types with Interfaces
interface Idol {
  name: string;
  active?: boolean;
}

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

var idol = { name: '모모' };
var myEl = $('#my-idol');
myEl.data('idol', idol);
var savedIdol = myEl.data('idol');
console.log(savedIdol);

myEl.idol(idol);
// element.todo(todo);
