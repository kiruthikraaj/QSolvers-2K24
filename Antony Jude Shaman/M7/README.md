## Milestone - 8

## Table of contents

- [Function Expressions](#function-expressions)
- [Recursion](#recursion)
- [Closure](#closure)
- [call(), apply(), bind()](#call-apply-bind)
- [this object](#this-object)
- [Memory Leaks](#memory-leaks)
- [Mimicking Block Scope](#mimicking-block-scope)
- [Synchronous and Asynchronous Programming](#synchronous-and-asynchronous-programming)
  - [Synchronous Programming](#synchronous-programming)
  - [Asynchronous Programming](#asynchronous-programming)
- [Callback Functions](#callback-functions)
  - [Callback Hell](#callback-hell)
- [Promises](#promises)
  - [Converting Callbacks to Promises](#converting-callbacks-to-promises)
- [Async/ Await](#async-await)
  - [Converting Promises to Async/Await](#converting-promises-to-asyncawait)
  - [Try Catch in Async/Await](#try-catch-in-asyncawait)

### Function Expressions

- Function expressions are the way to define functions in JavaScript. They can be named or anonymous. They can be assigned to variables, passed as arguments to other functions, and returned from other functions. They are defined using the function keyword.

```javascript
// Named function expression

const add = function add(a, b) {
  return a + b;
};

// Anonymous function expression

const add = function (a, b) {
  return a + b;
};

// both are same
console.log(add(1, 2)); // 3
```

> [!IMPORTANT]
>
> Function expressions are not hoisted, so they cannot be called before they are defined.
>
> ```javascript
> const add = function add(a, b) {
>   return a + b;
> };
> ```
>
> The above is the function expression and the const add is the reference to the anonymous function.

### Recursion

- A function calling until the base condition is met is called recursion.

```javascript
// a recursive function for fibonacci numbers

function Fibonacci(n) {
  console.log(n);
  if (n === 1) {
    return 1;
  }
  if (n === 0) {
    return 0;
  }
  return Fibonacci(n - 1) + Fibonacci(n - 2);
}

// using anonymous funtion expression
const Fibonacci = function (n) {
  if (n === 1) {
    return 1;
  }
  if (n === 0) {
    return 0;
  }
  return Fibonacci(n - 1) + Fibonacci(n - 2);
};

console.log(Fibonacci(5)); // 5
console.log(Fibonacci(6)); // 8
console.log(Fibonacci(20)); // 6765
```

> [!NOTE]  
> Recursion can take exponential time and space complexity. So, it is not recommended to use recursion for large numbers.
> Also recursion is a Top-Down approach.

### Closure

- A closure is the combination of a function bundled together with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function’s scope from an inner function.

```javascript
function closure() {
  let a = 0; // let is block scoped, it cannot be accessed by the outer functions but inner functions can access it

  function inner() {
    var c = 2; // var is a function scope so it cannot be accessed outside the function
    const b = 1; // const is a block scope so it cannot be accessed outside the block the `{}` represents the block
    console.log("Inside inner:" + a, b, c); // a, b, c are accessible here
  }

  console.log("Outside inner:" + a, b, c); // only a is accessible here, b and c are not accessible
  inner();
}
closure();

// Lets see another example to understand closure

let a = 0;

function add() {
  let a = 0;
  return ++a;
}

console.log(a); // the global variable still is 0 but the return value of add() is 1
```

> [!IMPORTANT]
>
> In the above example, the global variable a is not changed but the local variable a is changed. This is because the local variable a is in the closure of the function add().

### call(), apply(), bind()

```javascript
const person = {
  name: "Antony",
  age: 21,
};

function introduce(city) {
  console.log(
    `My name is ${this.name} and I am ${this.age} years old. I am from ${city}`
  );
}

// call() method
introduce.call(person, "Chennai"); // the optional parameters must be passed as arguments

// apply() method
introduce.apply(person, ["Chennai"]); // the optional parameters must be passed in an array

// bind() method
const me = introduce.bind(person); // creates a new function with the context of the person object
me("Chennai");
// Output of all three methods will be:
// My name is Antony and I am 21 years old. I am from Chennai
```

### this object

- The this object refers to the object that is executing the current function. In other words, the this object represents the context of the function.

```javascript
const person = {
  name: "Antony",
  age: 21,
  introduce: function () {
    console.log(`My name is ${this.name} and I am ${this.age} years old.`);
  },
};

person.introduce(); // My name is Antony and I am 21 years old.
```

> [!WARNING]
>
> - `this` may misbehave in callback functions, arrow functions, and nested functions.
>
> ```javascript
> const person = {
>   name: "Antony",
>   age: 21,
>   introduce: function () {
>     console.log(`My name is ${this.name} and I am ${this.age} years old.`);
>   },
> };
> const introduce = person.introduce; // this is lost when the function is assigned to a variable
> introduce(); // My name is undefined and I am undefined years old.
> ```
>
> **NOTE**
>
> - bind() method can be used to set the value of this in a function.
>
> ```javascript
> function executeCallback(callback) {
>   callback();
> }
>
> executeCallback(person.introduce.bind(person));
> ```
>
> The value of `this` is determined by how a function is called. It can't be set by the programmer.

### Memory Leaks

- Memory leaks are a common problem in programming, where the application uses more memory than it should. This can lead to performance issues and crashes. Memory leaks can be caused by a variety of factors, including unused variables, circular references, and long-running processes.

```javascript
function array() {
  const arr = new Array(100).fill("1"); // this creates an array of 100 1's
  return arr;
}

setInterval(() => {
  const arr = array(); // an array with 100 elements is created every second and leads to memory leak
  console.log(arr);
}, 1000);
```

### Mimicking Block Scope

- Before ES6, JavaScript does not have block scope, but it can be mimicked using IIFE (Immediately Invoked Function Expression).

```javascript
(function () {
  var a = 1;
  console.log(a); // 1
})();

console.log(a); // ReferenceError: a is not defined
// The IIFE acts as a block and the variable a is not accessible outside the block
```

> [!TIP]  
> Use let and const to create block-scoped variables in ES6.

### Synchronous and Asynchronous Programming

#### Synchronous Programming

- Synchronous programming is the default mode of execution in JavaScript. In synchronous programming, the code is executed oneby one, one after the other. This means that each line of code is executed in order, and the next line of code is not executed until the current line has finished executing.

> [!IMPORTANT]  
> This blocking nature of synchronous programming can lead to performance issues.  
> If a resource intensive task is executed synchronously, it can block the main thread and make the application unresponsive.

```javascript
// Synchronous programming

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

const sum = add(1, 2);

const product = multiply(3, 4);

console.log(sum); // 3

console.log(product); // 12
```

_**The above code is executed synchronously, the add() function is executed first and then the multiply() function is executed.**_

#### Asynchronous Programming

- Asynchronous programming allows multiple tasks to be executed concurrently. In asynchronous programming, the code is executed in a non-blocking manner. This means that the next line of code is executed before the current line has finished executing.

> [!IMPORTANT]  
> Asynchronous programming is used to perform tasks that take a long time to complete, such as network requests, file operations, and database queries.

```javascript
// Asynchronous programming

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

setTimeout(() => {
  const sum = add(1, 2);
  console.log(sum); // 3
}, 1000);

const product = multiply(3, 4);

console.log(product); // 12

// The multiply() function is executed first and then the add() function is executed after 1 second.
```

### Callback Functions

- A callback function is a function that is passed as an argument to another function. The callback function is called when a certain event occurs or when a task is completed.

```javascript
// a callback function is passed as an argument
function add(a, b, fn) {
  const c = a + b;
  fn(c); // the callback function is called with the sum as an argument
}

function display(result) {
  console.log(result); // the argument in the add() is passed to the callback function
}

add(1, 2, display); // 3
```

> [!NOTE]  
> Callback functions are commonly used in asynchronous programming to handle the completion of tasks.

### Callback Hell

- Callback hell is a situation where multiple nested callback functions are used in asynchronous programming. This can make the code difficult to read and maintain.

> [!IMPORTANT]  
> Callback hell can be avoided by using promises, async/await, and other asynchronous programming techniques.  
> **When a pyramid is created by multiple nested callbacks, it is called callback hell.**

```javascript
// A Simple Callback hell
function a(callback) {
  setTimeout(() => {
    console.log("a");
    callback();
  }, 1000);
}

function b(callback) {
  setTimeout(() => {
    console.log("b");
    callback();
  }, 1000);
}

function c(callback) {
  setTimeout(() => {
    console.log("c");
    callback();
  }, 1000);
}

a(() => {
  b(() => {
    c(() => {
      console.log("Callback hell is over");
    });
  });
});
// Output
// a
// b
// c
// Callback hell is over

// avoiding callback hell
// the below code can be used when promises are used

a()
  .then(() => {
    return b();
  })
  .then(() => {
    return c();
  })
  .then(() => {
    console.log("Callback hell is over");
  });
```

```javascript
// A more complex Callback hell
// passing result of one callback to another callback
function add(a, b, callback) {
  setTimeout(() => {
    const c = a + b;
    callback(c);
  });
}

function sub(a, b, callback) {
  setTimeout(() => {
    const c = a - b;
    callback(c);
  });
}

function mul(a, b, callback) {
  setTimeout(() => {
    const c = a * b;
    callback(c);
  });
}

add(1, 2, (sum) => {
  console.log("Callback 1:", sum); // the result the previous callback is passed to the next callback
  sub(sum, 1, (diff) => {
    console.log("Callback 2:", diff);
    mul(diff, 2, (prod) => {
      console.log("Callback 3:", prod);
    });
  });
});
// Output
// Callback 1: 3
// Callback 2: 2
// Callback 3: 4
```

### Promises

- Promises are used to handle asynchronous operations in JavaScript. A promise is an object that represents the eventual completion or failure of an asynchronous operation. A promise can be in one of three states: pending, fulfilled, or rejected.

```javascript
function promise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise is resolved");
    }, 1000);
  });
}
promise()
  .then((result) => {
    console.log(result); // Promise is resolved
  })
  .catch((error) => {
    console.error(error);
  });
```

### Bluebird Promises

- Bluebird is a popular promise library for JavaScript that provides additional features and performance improvements over the built-in promise implementation.

```bash

pnpm i -g bluebird # install bluebird globally

pnpm init  # creating package.json file

pnpm add bluebird # add the bluebird package to the project

```

```javascript
const Promise = require("bluebird"); // commonJS module, not using module syntax

function add(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const c = a + b;
      resolve(c);
    }, 1000);
  });
}

add(1, 2)
  .then((sum) => {
    console.log(sum); // 3
  })
  .catch((error) => {
    console.error(error);
  });
```

### Features of Bluebird

#### Promisify

- The promisify method is used to convert a callback-based function to a promise-based function.

```javascript
const Promise = require("bluebird");

function add(a, b, callback) {
  setTimeout(() => {
    const c = a + b;
    callback(null, c); // passing null for error and c for result
  }, 1000);
}

const promise = Promise.promisify(add);

promise(1, 2)
  .then((sum) => {
    console.log(sum); // 3
  })
  .catch((error) => {
    console.error(error);
  });
```

#### Promise.all

- The Promise.all method is used to execute multiple promises concurrently and wait for all of them to complete.

```javascript
function add(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const c = a + b;
      resolve(c);
    }, 1000);
  });
}

function sub(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const c = a - b;
      resolve(c);
    }, 1000);
  });
}

function mul(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const c = a * b;
      resolve(c);
    }, 1000);
  });
}

Promise.all([add(1, 2), sub(1, 2), mul(1, 2)])
  .then((results) => {
    console.log(results); // [3, -1, 2]
  })
  .catch((error) => {
    console.error(error);
  });
```

#### Promise.promisifyAll

- The Promise.promisifyAll method is used to convert an entire module to use promises instead of callbacks.

```javascript
const fs = Promise.promisifyAll(require("fs"));

fs.readFileAsync("file.txt", "utf8")
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
```

### Converting Callbacks to Promises

- Callback functions can be converted to promises using the Promise constructor.

```javascript
function add(a, b) {
  // the promise constructor is used to create a promise
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const c = a + b;
      resolve(c);
    }, 1000);
  });
}

add(1, 2)
  .then((sum) => {
    console.log(sum); // 3
  })
  .catch((error) => {
    console.error(error);
  });
```

#### Delay in bluebird

- The delay method is used to create a promise that resolves after a specified delay.

```javascript
const Promise = require("bluebird");

Promise.delay(1000).then(() => {
  console.log("Delayed by 1 second");
});
```

> [!IMPORTANT]
> The delay method is useful for creating delays in promise chains.

### Async/ Await

- Async/await helps in handling asynchronous operations in a synchronous manner.
- The async keyword is used to define an asynchronous function, and the await keyword is used to wait for the completion of an asynchronous operation.

> [!IMPORTANT]  
> `await` can only be used inside an async function.

```javascript
// Using async/await to avoid callback hell

function add(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const c = a + b;
      resolve(c);
    }, 1000);
  });
}

function sub(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const c = a - b;
      resolve(c);
    }, 1000);
  });
}

function mul(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const c = a * b;
      resolve(c);
    }, 1000);
  });
}

async function calculate() {
  const sum = await add(1, 2);
  console.log("Callback 1:", sum);
  const diff = await sub(sum, 1);
  console.log("Callback 2:", diff);
  const prod = await mul(diff, 2);
  console.log("Callback 3:", prod);
}

calculate();

// Output
// Callback 1: 3
// Callback 2: 2
// Callback 3: 4
```

> [!IMPORTANT]  
> **Why async needed in JS?**
>
> - JavaScript is single-threaded, meaning that it can only execute one task at a time.
> - Asynchronous programming allows JavaScript to perform multiple tasks concurrently, without blocking the main thread.
> - Event loop is used to handle asynchronous operations in JavaScript.

### Converting Promises to Async/Await

- Promises can be converted to async/await functions by using the async keyword with the function that returns a promise.

```javascript
function add(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const c = a + b;
      resolve(c);
    }, 1000);
  });
}

async function result() {
  const res = await add(1, 2);
  console.log(res);
}
```

### Try Catch in Async/Await

- The try/catch block can be used to handle errors in async/await functions.

```javascript
function add(a, b) {
  return new Promise((resolve, reject) => {
    if (typeof a !== "number" || typeof b !== "number") {
      reject(new Error("Invalid Input"));
    }
    const c = a + b;
    resolve(c);
  });
}

async function result(a, b) {
  try {
    const res = await add(a, b);
    console.log(res);
  } catch (error) {
    console.error("Something went wrong");
  }
}

result(1, 2); // 3
result("1", 2); // Something went wrong
```

> [!NOTE]  
> This is similar to the .then() and .catch() methods used with promises. The try block is used to handle the resolved value, and the catch block is used to handle the rejected value.
