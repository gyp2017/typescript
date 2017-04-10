## ECMAScript 2015 Features

### 1 Optional Parameters
```javascript
var container = document.getElementById('container');

function countdown(initial, final, interval) {

  var current = initial;

  while (current > final) {
    container.innerHTML = current;
    current -= interval;
  }
}

countdown(10, 0, 1);
```

```javascript
var container = document.getElementById('container');

function countdown(initial, final = 10, interval = 1) {

  var current = initial;

  while (current > final) {
    container.innerHTML = current;
    current -= interval;
  }
}

countdown(10);
countdown(10, 4);
countdown(10, 4, 2);
```

### 2 Template Strings

```js

var todo = {
  id: 123,
  name: "Pick up drycleaning",
  completed: true
};

container.innerHTML = `
  <div todo='${todo.id}' class="list-group-item}">
    <i class="${ todo.completed ? "" : "hidden" } text-success glyphicon gly\ phicon-ok"></i>
    <span class="name">${todo.name}</span>
  </div>
`
```

### 3 Let and const
```js
for(var x = 0; x <= 5; x++) {
  var counter = x;
}
console.log(counter);
```

```js
for(var x = 0; x <= 5; x++) { let counter = x;
}
console.log(counter);
```

```js
for(var x = 0; x < 5; x++) {
  const counter = x; counter = 1;
}
```

### 4 For..of Loops

```js
var array = [ "Pick up drycleaning", "Clean Batcave", "Save Gotham" ];

for (var index in array) {
  var value = array[index];
  console.log(`${index}: ${value}`);
}
```

```js
var array = [
  "Pick up drycleaning",
  "Clean Batcave",
  "Save Gotham"
];

for (var value of array) {
  console.log(value);
}
```


### 5 Arrow Functions

```js
var container = document.getElementById('container');

function Counter(el) {
  this.count = 0;
  el.innerHTML = this.count;
  
  el.addEventListener('click', function () {
    this.count += 1;
    el.innerHTML = this.count;
  })
}
new Counter(container);
```

```js
  el.addEventListener('click', (event) => el.innerHTML = (this.count += 1))
```

return 생략가능.
파라미터가 한 개이면 괄호를 생략.
```js
var filtered = [ 1, 2, 3 ].filter(x => x > 0);
```

### 6 Destructuring

```js
var array = [123, "Pick up drycleaning", false];
var id = array[0], title= array[1], completed = array[2];
```

변수의 할당 선언 가능
```js
var array = [123, "Pick up drycleaning", false];
var [id, title, completed] = array;
```

```js
var a = 1;
var b = 5;

var temp = a;
a = b;
b = temp;
```

값 교환 가능
```js
[a, b] = [b, a];
```

오브젝트의 속성을 할당 해서 변수 선언 가능.
```js
var todo = {
  id: 123,
  title: "Pick up drycleaning",
  completed: false
};

var { id, title, completed } = todo;
```

속성명(completed)과 다른 이름(isCompleted)의 변수로 지정가능.
```js
var { completed: isCompleted, title, id } = getTodo(123);
```


```js
function countdown({ initial: current, final: final = 0, interval: interval = 1 }) {
  while (current > final) {
    console.log(current);
    current -= interval;
  }
}
```

### 7 The Spread Operator

```js
function add() {
  var values = Array.prototype.splice.call(arguments, [1]),
      total = 0;

  for (var value of values) {
    total += value;
  }

  return total;
}
```

```js
function add(...values) {
  var total = 0;

  for (var value of values) {
    total += value;
  }

  return total;
}

add(1, 2, 3, 4, 5);
```

```js
function calculate(action, ...values) {
  var total = 0;
  
  for (var value of values) {
    switch(action) {
      case 'add':
        total += value;
        break;
      case 'subtract':
        total -= value;
        break;
    }
  }

  return total;
}

calculate('subtract', 1, 2, 3, 4, 5);
```

```js
var source = [ 3, 4, 5 ];

var target = [ 1, 2, ...source , 6, 7 ];
```

```js
var list = [ 1, 2, 3 ];
var toAdd = [ 4, 5, 6 ];

Array.prototype.push.apply(list, toAdd);
```

```js
list.push(...toAdd);
```

### 8 Computed Properties

```js
var support = {
  'os_Windows': isSupported('Windows'),
  'os_iOS': isSupported('iOS'),
  'os_Android': isSupported('Android'),
}

function isSupported(os) {
  return Math.random() >= 0.5;
}
```

```js
const osPrefix = 'os_';

var support = {
  [osPrefix + 'Windows']: isSupported('Windows'),
  [osPrefix + 'iOS']: isSupported('iOS'),
  [osPrefix + 'Android']: isSupported('Android'),
}

function isSupported(os) {
  return Math.random() >= 0.5;
}
```
