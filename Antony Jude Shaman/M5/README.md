## Milestone - 5

### Table of contents

- [JS Functions](#js-functions)

  - [What is a function?](#what-is-a-function)
  - [Why use functions?](#why-use-functions)
  - [Defining a function?](#defining-a-function)
  - [Function Expression](#function-expression)
  - [Function parameters](#function-parameters)
  - [Normal function vs Arrow function](#normal-function-vs-arrow-function)
  - [Function Hoisting](#function-hoisting)
  - [Function invocation using window object](#function-invocation-using-window-object)
  - [Function as a property of an object](#function-as-a-property-of-an-object)
  - [Self-Invoking Functions](#self-invoking-functions)
  - [Callback Functions](#callback-functions)
  - [Counting the number of arguments](#counting-the-number-of-arguments)
  - [Default Parameters](#default-parameters)
  - [Rest Parameters](#rest-parameters)
  - [Spread Operator](#spread-operator)
  - [Destructuring](#destructuring)
  - [Destructuring with spread operator](#destructuring-with-spread-operator)

- [this keyword](#this-keyword)
- [Arguments vs Parameters](#arguments-vs-parameters)
- [Overloading functions](#overloading-functions)
  - [Solution for function overloading](#solution-for-function-overloading)

### JS Functions

#### What is a function?

- A function is a block of code that can be called by name. The code inside a function can be executed as many times as needed. Functions can take parameters and return values.

#### Why use functions?

- Functions are used to perform specific tasks. They are useful for code reusability and modularity. Functions can be called multiple times, and they can be used to pass data between different parts of the code.

#### Defining a function?

- A function is defined using the `function` keyword, followed by the function name, a list of parameters, and the code block enclosed in curly braces.

```javascript
function HelloWorld(arg) {
  console.log(arg);
}
HelloWorld("print");
```

#### Function Expression

- A function expression is a function that is assigned to a variable. Function expressions can be named or anonymous.

```javascript
const HelloWorld = function (arg) {
  console.log(arg);
};
HelloWorld("print");
```

#### Function parameters

- Functions can take parameters, which are variables that are passed to the function when it is called. Parameters are used to pass data to the function.

```javascript
function add(a, b) {
  return a + b;
}
console.log(add(2, 3)); // Output: 5
```

#### Normal function vs Arrow function

- Arrow functions are a more concise way to write functions in JavaScript. They have a shorter syntax and do not have their own `this` keyword.

```javascript
const HelloWorld = (arg) => {
  console.log(arg);
};
HelloWorld("print");
```

#### Function Hoisting

- Function hoisting is a JavaScript mechanism that allows you to call functions before they are declared in the code.

```javascript
HelloWorld("print");

function HelloWorld(arg) {
  console.log(arg);
}
```

> [!NOTE]  
> Function declarations are hoisted to the top of the code, so you can call them before they are declared.

#### Function invocation using window object

- In the browser, functions can be invoked using the `window` object. This is because functions are properties of the `window` object.

```javascript
function HelloWorld(arg) {
  console.log(arg);
}
window.HelloWorld("print");
```

> [!NOTE]
> In HTML, the `window` object is the global object, so you can access functions using the `window` object.

#### Function as a property of an object

- Functions can be defined as properties of an object. These functions are called methods.

```javascript
const hello = {
  HelloWorld: function (arg) {
    console.log(arg);
  },
};

hello.HelloWorld("print");
```

#### Self-Invoking Functions

- A self-invoking function is a function that runs as soon as it is defined.

```javascript
// Named self-invoking function
(function HelloWorld(arg) {
  console.log(arg);
})("print");

// Anonymous self-invoking function
(function (arg) {
  console.log(arg);
})("print");

// Arrow function self-invoking
((arg) => {
  console.log(arg);
})("print");

// Empty self-invoking Arrow function
(() => {
  console.log("print");
})();

// Empty self-invoking function
(function () {
  console.log("print");
})();
```

> [!NOTE]  
> The parentheses after the declaration of the function are used to invoke the function immediately. Parameters can be passed inside the parentheses.

#### Callback Functions

- A callback function is a function that is passed as an argument to another function. The callback function is called inside the other function.

```javascript
// 1. Passing arguments to the callback function
function HelloWorld(prop) {
  console.log(prop + " Jude Shaman");
}

const callback = (arg) => {
  HelloWorld(arg);
};

callback("I am Antony");

// 2. Passing a function as an argument
function a(arg) {
  console.log(arg);
}

function b(arg) {
  arg("Hello World");
}

b(a);
```

#### Counting the number of arguments

- The `arguments` object is an array-like object that contains all the arguments passed to a function.

```javascript
const noOfArgs = () => {
  console.log(arguments.length);
};

noOfArgs(1, 2, 3, 4, 5); // Output: 5
```

#### Default Parameters

- Default parameters allow you to specify default values for function parameters.

```javascript
function add(a, b = 10) {
  return a + b;
}
```

#### Rest Parameters

- Rest parameters allow you to pass an infinite number of arguments to a function.

```javascript
// Self-invoking function with rest parameters
(function (...args) {
  console.log(args);
})(1, 2, 3, 4, 5); // Output: [1, 2, 3, 4, 5]

// Arrow function with rest parameters
const add = (...args) => {
  return args.reduce((acc, val) => acc + val, 0);
};

// Using reduce to sum all the arguments
const reducer = (...args) => {
  return args.reduce((acc, val) => acc + val, 0); // 0 is the initial value
};

console.log(reducer(1, 2, 3, 4, 5)); // Output: 15
```

#### Spread Operator

- The spread operator allows you to expand an array or object into individual elements.

```javascript
// Spread operator with arrays

const arr1 = [1, 2, 3];

const arr2 = [...arr1, 4, 5, 6];
```

#### Destructuring

- Destructuring allows you to extract values from arrays or objects and assign them to variables.

```javascript
// Destructuring arrays

const arr = [1, 2, 3];

const [a, b, c] = arr;

console.log(a, b, c); // Output: 1 2 3

// Destructuring objects

const person = { name: "Antony", age: 21 };

const { name, age } = person;
```

#### Destructuring with spread operator

- Destructuring with the spread operator allows you to extract values from arrays or objects and assign them to variables.

```javascript
// Destructuring arrays with spread operator

const arr = [1, 2, 3, 4, 5];

const [a, b, ...rest] = arr;
```

### this keyword

- The `this` keyword refers to the object that is calling the function. It changes depending on where it is being used.

```javascript
// Using this in an object

const obj = {
  name: "Antony",
  printName: function () {
    console.log(this.name);
  },
};

// Using this in a class constructor
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

// Using this in a global context

console.log(this); // Output: window
```

### Arguments vs Parameters

- Arguments are the real values passed to a function but parameters are the placeholders for the arguments.

```javascript
function hello(name) {
  console.log(name);
}

// Parameters
name = "Antony";
hello(name);

// Arguments
hello("Antony");
```

### Overloading functions

- JavaScript does not support function overloading. The last function definition will override the previous ones.

```javascript
function fnOverloading(arg) {
  console.log(arg);
}
// The above is overridden by the below function

function fnOverloading(arg1, arg2) {
  console.log(arg1, arg2);
}

fnOverloading("First"); // Output: First undefined
fnOverloading("First", "Second"); // Output: First Second
```

##### Solution for function overloading

- You can use the `arguments` object to create a function that can take a variable number of arguments.

```javascript
function fnOverloading() {
  if (arguments.length === 1) {
    console.log(arguments[0]);
  } else if (arguments.length === 2) {
    console.log(arguments[0], arguments[1]);
  }
}

fnOverloading("First"); // Output: First
fnOverloading("First", "Second"); // Output: First Second
```

### JS Linting

#### What is Linting?

- Linting is the process of analyzing code for potential errors, style issues and maintaining a consistent code style. Linters are tools that help developers write cleaner and more consistent code.

#### ESLint

- ESLint is a popular JavaScript linter that helps you find and fix problems in your JavaScript code.

#### Setting up ESLint

- You can set up ESLint in your project using the following steps:

> [!TIP]
> You can install ESLint using pnpm or yarn.
> Use pnpm for faster installation than npm.

1. Install ESLint using npm:

```bash
pnpm i eslint --save-dev # installing as a dev dependency
```

2. Initialize ESLint configuration:

```bash
pnpm dlx eslint --init
```

3. Create a file named `.eslintrc.cjs` in the root of your project:

**Let's have a look at the recent ESLint config file I used in my project:**

```javascript
module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    node: true,
  },

  plugins: ["react", "prettier", "tailwindcss"],
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:react/recommended",
    "plugin:tailwindcss/recommended",
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "tailwindcss/no-custom-classname": "off",
    "tailwindcss/classnames-order": "off",
    "no-unused-vars": "off",
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parser: "@typescript-eslint/parser",
    },
  ],
  parser: "@babel/eslint-parser",
};
```

4. Run ESLint on your project:

```bash
pnpm run lint
```

> [!NOTE]
> But before running the above command, you need to add a script in your `package.json` file.

```json
"scripts": {
  "lint": "eslint ."
}
```

5. Fix ESLint errors:

```bash
pnpm run lint:fix
```

> [!NOTE]
> The `--fix` flag will automatically fix some of the errors reported by ESLint.
> But before running the above command, you need to add a script in your `package.json` file.

```json
"scripts": {
  "lint:fix": "eslint . --fix"
}
```

### Currying in JavaScript

- Currying is a technique in which a function with multiple arguments is converted into a sequence of functions that each take a single argument.

```javascript
// Normal function without currying
function add(a, b, c) {
  return a + b + c;
}

// Currying the above function
function add(a) {
  return function add(b) {
    return function add(c) {
      return a + b + c;
    };
  };
}

console.log(add(1)(2)(3)); // Output: 6

// Using arrow functions

const add = (a) => (b) => (c) => a + b + c;

console.log(add(1)(2)(3)); // Output: 6
```
