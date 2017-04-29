

// Tuple

let x: [string, number];
x = ['park', 13];

// error
// x = ['son', '토튼햄'];

console.log(x[0].substr(1));
// error
//console.log(x[1].substr(1));

x[0] = 'goo';
x[1] = 11;

x[3] = 'ji';
x[4] = 15;

x[5] = true;
