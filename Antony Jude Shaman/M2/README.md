## Milestone 2

### Table of Contents

### Case Sensitivity

- JavaScript is case-sensitive. This means that variables, function names, and other identifiers must always be typed with a consistent capitalization of letters.

```javascript
let a = 5;
let A = 10;
// These are two different variables
```

### Identifiers

- Identifiers are names given to variables, functions, classes, etc. in JavaScript. They can contain letters, digits, underscores, and dollar signs. Identifiers must begin with a letter, an underscore, or a dollar sign. They cannot begin with a digit.

```javascript

// Valid identifiers

let name = "Antony Jude Shaman";

let _name = "Antony Jude Shaman";

let $name = "Antony Jude Shaman";

// Invalid identifiers

let 1name = "Antony Jude Shaman";

let name-1 = "Antony Jude Shaman";

let name@ = "Antony Jude Shaman";

```

### Comments

- Comments are used to explain the code and make it more readable. JavaScript supports single-line and multi-line comments.

```javascript
// This is a single-line comment

/* 
  This is a multi-line comment.
  All the text between the opening and closing tags is commented out.
*/
```

### Strict Mode

- Strict mode is a way to opt into a restricted variant of JavaScript. It eliminates some JavaScript silent errors by changing them to throw errors. It also fixes mistakes that make it difficult for JavaScript engines to perform optimizations.

```javascript
"use strict";

let a = 10;
```

### Keywords and Reserved Words

- JavaScript has a set of reserved words that cannot be used as identifiers. These words are used by the language itself and have special meanings.

> [!NOTE]  
> _Some of the reserved words in JavaScript are_  
> `let`, `const`, `function`, `if`, `else`, `while`, `for`, `return`, `break`, `continue` `switch`, `case`, `default`, `try`, `catch`, `finally`, `throw`, `new`, `delete`, `typeof`, `this`, `null`, `undefined`, `true`, `false`, `NaN`, `Infinity`, `super`, `class`, `extends`, `export`, `import`, `async`, `await`, `static`, `public`, `private`, `protected`, `interface`, `implements`, `let`, `const`, `var`, `void`

### Statements

- JavaScript statements are composed of expressions. They are executed from top to bottom, one after the other.

- Semi-colons are used to separate statements in JavaScript.

```javascript
let a = 10; // Variable declaration

if (a > 5) {
  // Conditional statement
  console.log("a is greater than 5");
}

for (let i = 0; i < 5; i++) {
  // Loop
  console.log(i);
}
```

### Variables

- Variables are used to store data values in JavaScript. They are declared using the `let`, `const`, or `var` keyword.

```javascript
let x = 10; // Number

const name = "Antony Jude Shaman"; // String

var y = true; // Boolean
```

#### Scope

- The let and const keywords are block-scoped, which means they are only accessible within the block they are declared in.

- The var keyword is function-scoped, which means it is accessible throughout the function it is declared in.

  ```javascript
  if (true) {
    let a = 10;
    var b = 20;
  }

  console.log(a); // ReferenceError: a is not defined

  console.log(b); // 20
  ```

### typeof Operator

- The typeof operator is used to determine the data type of a variable.

```javascript
let a = 10;

console.log(typeof a); // number

const name = "Antony Jude Shaman";

console.log(typeof name); // string
```

### Data Types

- JavaScript has several data types, including primitive and non-primitive types. Primitive data types include numbers, strings, booleans, null and undefined. Non-primitive data types include objects and functions.

```javascript
// Primitive data types

let num = 10; // Number

let str = "Hello"; // String

let bool = true; // Boolean

let n = null; // Null

let u = undefined; // Undefined

// Non-primitive data types

let obj = { name: "Antony Jude Shaman" }; // Object

const hello = () =>  "Hello"; // Arrow Function

const hello() {
  return "Hello";
}; // Normal Function
```

### Object types

- Objects are used to store collections of data and more complex entities. They are created using the object literal syntax `{}` or the `new Object()` constructor.

```javascript
// Object literal syntax

let person = {
  name: "Antony Jude Shaman",
  age: 25,

  greet() {
    console.log("Hello");
  },
};

// Object constructor

class Car {
  constructor(model, year) {
    this.model = model;
    this.year = year;
  }
}

let car = new Car("Koenigsegg", 2024);

car.model = "Koenigsegg";

car.year = 2024;
```

### Arrays

- Arrays are used to store multiple values in a single variable. They are created using square brackets `[]`.

```javascript
const names = ["Antony", true, 10, { name: "Antony Jude Shaman" }];

console.log(names[0]); // Antony

console.log(names[3].name); // Antony Jude Shaman
```

> [!NOTE]
> Arrays can store values of different data types. In the example above, the array `names` contains a string, a boolean, a number, and an object.

### JSON

- JSON (JavaScript Object Notation) is a lightweight data interchange format. It is easy for humans to read and write and easy for machines to parse and generate.

```json
const person = {
  "name": "Antony Jude Shaman",
  "age": 21,
  "city": "Chennai",
  "country": "India"
}

console.log(person.name); // Antony Jude Shaman

console.log(person.age); // 21
```
