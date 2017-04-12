var o = {
  name: 'gim',
  age: 33,
  hobby: ['draw', 'music', 'movie', 12]
};

var a = [];

var f = function () {};

o.name = 33;
console.log(typeof o);
console.log(typeof a);
console.log(typeof f);

function totalLength(x, y) {
  var total = x.length + y.length; return total;
}

var result = totalLength({}, [1,2,3,4]);
