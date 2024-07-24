// let a = 0;

// function add() {
//   let a = 0;
//   return ++a;
// }

// console.log(a); // the global variable still is 0 but the return value of add() is 1

// const person = {
//   name: "Antony",
//   age: 21,
//   introduce: function () {
//     console.log(`My name is ${this.name} and I am ${this.age} years old.`);
//   },
// };
// function executeCallback(callback) {
//   callback();
// }

// executeCallback(person.introduce.bind(person));

// function array() {
//   const arr = new Array(100).fill("1");
//   return arr;
// }

// setInterval(() => {
//   const arr = array();
//   console.log(arr);
// }, 1000);

// (function () {
//   var a = 1;
//   console.log(a); // 1
// })();

// console.log(a);

// function add(a, b) {
//   return a + b;
// }

// function multiply(a, b) {
//   return a * b;
// }

// setTimeout(() => {
//   const sum = add(1, 2);
//   console.log(sum); // 3
// }, 1000);

// const product = multiply(3, 4);

// console.log(product); // 12

// a callback function is passed as an argument
// function add(a, b, fn) {
//   const sum = a + b;
//   fn(sum); // the callback function is called with the sum as an argument
// }

// function display(result) {
//   console.log(result); // the argument in the add() is passed to the callback function
// }

// add(1, 2, display); // 3

// fetch("https://jsonplaceholder.typicode.com/posts/100")
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.error("Error:", error));

// console.log(
//   "This is after the fetch request. But it's executed first because fetch is asynchronous"
// );

// function a(callback) {
//   setTimeout(() => {
//     console.log("a");
//     callback();
//   }, 1000);
// }

// function b(callback) {
//   setTimeout(() => {
//     console.log("b");
//     callback();
//   }, 1000);
// }

// function c(callback) {
//   setTimeout(() => {
//     console.log("c");
//     callback();
//   }, 1000);
// }

// a(() => {
//   b(() => {
//     c(() => {
//       console.log("Callback hell is over");
//     });
//   });
// });

// function add(a, b, callback) {
//   setTimeout(() => {
//     const c = a + b;
//     callback(c);
//   });
// }

// function sub(a, b, callback) {
//   setTimeout(() => {
//     const c = a - b;
//     callback(c);
//   });
// }

// function mul(a, b, callback) {
//   setTimeout(() => {
//     const c = a * b;
//     callback(c);
//   });
// }

// add(1, 2, (sum) => {
//   console.log("Callback 1:", sum);
//   sub(sum, 1, (diff) => {
//     console.log("Callback 2:", diff);
//     mul(diff, 2, (prod) => {
//       console.log("Callback 3:", prod);
//     });
//   });
// });

// function add(a, b) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const c = a + b;
//       resolve(c);
//     }, 1000);
//   });
// }

// function sub(a, b) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const c = a - b;
//       resolve(c);
//     }, 1000);
//   });
// }

// function mul(a, b) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const c = a * b;
//       resolve(c);
//     }, 1000);
//   });
// }

// async function calculate() {
//   const sum = await add(1, 2);
//   console.log("Callback 1:", sum);
//   const diff = await sub(sum, 1);
//   console.log("Callback 2:", diff);
//   const prod = await mul(diff, 2);
//   console.log("Callback 3:", prod);
// }

// calculate();

// function add(a, b) {
//   return new Promise((resolve, reject) => {
//     if (typeof a !== "number" || typeof b !== "number") {
//       reject(new Error("Invalid"));
//     }
//     const c = a + b;
//     resolve(c);
//   });
// }

// async function result() {
//   try {
//     const res = await add(1, 2);
//     console.log(res);
//   } catch (error) {
//     console.error("Something went wrong");
//   }
// }

// result();

// function promise() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Promise is resolved");
//     }, 1000);
//   });
// }
// promise()
//   .then((result) => {
//     console.log(result); // Promise is resolved
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// converting promise to async/await

// var Promise = require("bluebird");

// function add(a, b) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const c = a + b;
//       resolve(c);
//     }, 1000);
//   });
// }

// add(1, 2)
//   .then((sum) => {
//     console.log(sum); // 3
//   })
//   .catch((error) => {
//     console.error(error);
//   });

var Promise = require("bluebird");

// function add(a, b, callback) {
//   setTimeout(() => {
//     const c = a + b;
//     callback(null, c);
//   }, 1000);
// }

// const promise = Promise.promisify(add);

// promise(1, 2)
//   .then((sum) => {
//     console.log(sum); // 3
//   })
//   .catch((error) => {
//     console.error(error);
//   });

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

Promise.r([add(1, 2), sub(1, 2), mul(1, 2)])
  .then((results) => {
    console.log(results); // [3, -1, 2]
  })
  .catch((error) => {
    console.error(error);
  });
