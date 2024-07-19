// curring fn
function add(a) {
  return function add(b) {
    return function add(c) {
      return a + b + c;
    };
  };
}

console.log(add(5)(2)(3));

console.log(myFunction(5));

function myFunction(y) {
  return y * y;
}

// const HelloWorld = function (arg) {
//   console.log(arg);
// };
// HelloWorld("print");

// (function HelloWorld(arg) {
//   console.log(arg);
// })("print");

// (() => {
//   console.log("print");
// })();

function HelloWorld(prop) {
  console.log(prop + " Jude Shaman");
}

const callback = (arg) => {
  HelloWorld(arg);
};

callback("I am Antony");

function a(arg) {
  console.log(arg);
}

function b(arg) {
  arg("Hello World");
}

b(a);

const noOfArgs = () => {
  console.log(arguments.length);
};

noOfArgs(1, 2, 3, 4, 5); // Output: 5

(function (...args) {
  console.log(args);
})(1, 2, 3, 4, 5); // Output: [1, 2, 3, 4, 5]

const reducer = (...args) => {
  return args.reduce((acc, val) => acc + val, 0);
};

console.log(reducer(1, 2, 3, 4, 5)); // Output: 15

class Person {
  constructor(name) {
    this.name = name;
    this.printName = () => {
      console.log(this.name); // Output: Antony
    };
  }
}

const person = new Person("Antony");
person.printName();

// function fnOverloading(arg) {
//   console.log(arg);
// }

// function fnOverloading(arg1, arg2) {
//   console.log(arg1, arg2);
// }

// fnOverloading("First"); // Output: First undefined
// fnOverloading("First", "Second"); // Output: First Second

function fnOverloading() {
  if (arguments.length === 1) {
    console.log(arguments[0]);
  } else if (arguments.length === 2) {
    console.log(arguments[0], arguments[1]);
  }
}

fnOverloading("First"); // Output: First
fnOverloading("First", "Second"); // Output: First Second

const add = (a) => (b) => (c) => a + b + c;

console.log(add(1)(2)(3)); // Output: 6
