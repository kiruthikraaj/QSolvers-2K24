## Milestone - 6

## Table of contents

- [Mutable and Immutable Data Types in JavaScript](#mutable-and-immutable-data-types-in-javascript)
  - [Mutable Data Types](#mutable-data-types)
  - [Immutable Data Types](#immutable-data-types)
  - [let vs const vs var](#let-vs-const-vs-var)
    - [let](#let)
    - [const](#const)
    - [var](#var)
  - [Immutability in objects](#immutability-in-objects)
  - [Immutability in arrays](#immutability-in-arrays)
    - [Deep Freeze](#deep-freeze)
  - [Primitive and Reference Values](#primitive-and-reference-values)
  - [Primitive Data Types](#primitive-data-types)
  - [Reference Data Types](#reference-data-types)
  - [Copying values](#copying-values)
  - [Deep Copy vs Shallow Copy](#deep-copy-vs-shallow-copy)
    - [Shallow Copy](#shallow-copy)
    - [Deep Copy](#deep-copy)
  - [Argument Passing](#argument-passing)
  - [Determining type](#determining-type)
  - [Execution Context and Call Stack](#execution-context-and-call-stack)
    - [Example for Execution Context and Call Stack](#example-for-execution-context-and-call-stack)
  - [Scope Chain Augmentation](#scope-chain-augmentation)
  - [No Block-Level Scopes](#no-block-level-scopes)

## Mutable and Immutable Data Types in JavaScript

- In JavaScript, data types are classified into two categories:
  1. Mutable data types
  2. Immutable data types

### Mutable Data Types

Mutable data types are those data types whose values can be changed after they are created. In JavaScript, objects and arrays are mutable data types.

```javascript
let person = { name: "Antony", age: 21 };

person.age = 22;

console.log(person); // { name: "Antony", age: 22 }
```

### Immutable Data Types

Immutable data types are those data types whose values cannot be changed after they are created. In JavaScript, primitive data types are immutable.

```javascript
let name = "Antony";

name[0] = "a";

console.log(name); // Antony
```

### let vs const vs var

In JavaScript, there are three ways to declare a variable: `let`, `const`, and `var`.

#### let

`let` is used to declare a variable whose value can be changed.

```javascript
let age = 21;

age = 22;

console.log(age); // 22
```

#### const

`const` is used to declare a variable whose value cannot be changed.

```javascript
const age = 21;

age = 22; // TypeError: Assignment to constant variable.

console.log(age);
```

#### var

`var` is used to declare a variable whose value can be changed.

```javascript
var age = 21;

age = 22;

console.log(age); // 22
```

### Immutability in objects

In JavaScript, objects are mutable data types. To make an object immutable, we can use `Object.freeze()`.

```javascript
const person = { name: "Antony", age: 21 };

Object.freeze(person);

person.age = 22;

console.log(person); // { name: "Antony", age: 21 }
```

### Immutability in arrays

In JavaScript, arrays are mutable data types. To make an array immutable, we can use `Object.freeze()`.

```javascript
const numbers = [1, 2, 3, 4, 5];

Object.freeze(numbers);

numbers.push(6);

console.log(numbers); // [1, 2, 3, 4, 5]
```

#### Object.seal() vs Object.freeze() vs Object.preventExtensions()

- `Object.seal()`: Prevents new properties from being added to an object and marks all existing properties as non-configurable.

- `Object.freeze()`: Prevents new properties from being added to an object, prevents existing properties from being removed, and marks all existing properties as non-configurable.

- `Object.preventExtensions()`: Prevents new properties from being added to an object but allows existing properties to be removed.

```javascript
const person = { name: "Antony", age: 21, address: { city: "Chennai" } };

// Object.seal()

Object.seal(person);

person.age = 22;

delete person.age;

console.log(person); // { name: "Antony", age: 22 }

// Object.freeze()

Object.freeze(person);

person.age = 23;

delete person.age;

console.log(person); // { name: "Antony", age: 22 }

// Object.preventExtensions()

Object.preventExtensions(person);

person.address.city = "Bangalore";

delete person.age;

console.log(person); // { name: "Antony", address: { city: "Bangalore" } }
```

> [!NOTE]
>
> - `Object.seal()`, `Object.freeze()` and `Object.preventExtensions()` are shallow operations. They only affect the properties of the object that you call them on, and do not affect the properties of nested objects.

#### Deep Freeze

`Object.freeze()` only freezes the first level of the object. To freeze nested objects, we can use a function like `deepFreeze()`.

```javascript
function deepFreeze(person) {
  Object.keys(person).forEach((key) => {
    if (typeof obj[key] === "object" && !Object.isFrozen(person[key])) {
      deepFreeze(person[key]);
    }
  });

  return Object.freeze(person);
}

const person = { name: "Antony", age: 21, address: { city: "Chennai" } };

deepFreeze(person);

person.address.city = "Bangalore";

console.log(person); // { name: "Antony", age: 21, address: { city: "Chennai" } }
```

### Primitive and Reference Values

- In JavaScript, data types are classified into two categories:

  1. Primitive data types
  2. Reference data types

### Primitive Data Types

#### Immutability

```javascript
let name = "Antony";

name[0] = "a";

console.log(name); // Antony
```

### Reference Data Types

#### Mutability

```javascript
let person = { name: "Antony", age: 21 };

person.age = 22;

console.log(person); // { name: "Antony", age: 22 }
```

### Copying values

- In JavaScript, values are copied by reference for reference data types and by value for primitive data types.

```javascript
// Primitive data type
let a = 10;

let b = a;

b = 20;

console.log(a); // 10

// Reference data type
let person = { name: "Antony", age: 21 };

let copy = person;

copy.age = 22;

console.log(person); // { name: "Antony", age: 22 }
```

> [!IMPORTANT]  
> When we copy a reference data type, we are copying the reference to the object, not the object itself. So, any changes made to the copy will affect the original object.
> To avoid this, we can use `Object.assign()` or the spread operator (`...`).
>
> ```javascript
> let person = { name: "Antony", age: 21 };
>
> let copy = Object.assign({}, person);
>
> copy.age = 22;
>
> console.log(person); // { name: "Antony", age: 21 }
>
> let copy = { ...person };
>
> copy.age = 22;
>
> console.log(person); // { name: "Antony", age: 21 }
> ```

### Deep Copy vs Shallow Copy

#### Shallow Copy

- A shallow copy refers to copying the top-level properties of an object or the elements of an array. Ch

```javascript
let person = { name: "Antony", age: 21, address: { city: "Chennai" } };

let copy = { ...person };

copy.address.city = "Bangalore";

console.log(person); // { name: "Antony", age: 21, address: { city: "Bangalore" } }
```

#### Deep Copy

- A deep copy refers to copying all the properties of an object or all the elements of an array, including nested objects or arrays.

```javascript
// Using JSON.parse() and JSON.stringify()

let person = { name: "Antony", age: 21, address: { city: "Chennai" } };

let copy = JSON.parse(JSON.stringify(person));

copy.address.city = "Bangalore";

console.log(person); // { name: "Antony", age: 21, address: { city: "Chennai" } }
console.log(copy); // { name: "Antony", age: 21, address: { city: "Bangalore" } }
```

### Argument Passing

- In JavaScript, arguments are passed by value for primitive data types and by reference for reference data types.

```javascript
// Primitive data type

function change(num) {
  num = 20;
}

let num = 10;

change(num);

console.log(num); // 10

// Reference data type

function change(person) {
  person.name = "Jude";
}

let person = { name: "Antony", age: 21 };

change(person);

console.log(person); // { name: "Jude", age: 21 }
```

> [!TIP]
>
> To avoid changing the original object, we can create a copy of the object and pass it as an argument.
>
> ```javascript
> function change(person) {
>   person = { ...person, name: "Jude" };
>   console.log(person); // { name: "Jude", age: 21 }
> }
>
> let person = { name: "Antony", age: 21 };
>
> change(person);
>
> console.log(person); // { name: "Antony", age: 21 }
> ```

### Determining type

- To determine the type of a variable, we can use the `typeof` operator.

```javascript
let num = 10;

let str = "Hello";

let bool = true;

let arr = [1, 2, 3];

let person = { name: "Antony", age: 21 };

let a;

let b = null;

console.log(
  typeof num,
  typeof str,
  typeof bool,
  typeof arr,
  typeof person,
  typeof a,
  typeof b
); // number string boolean object object undefined object
```

> [!WARNING]
>
> - The `typeof` operator returns `"object"` for `array` and `null`.
> - To check if a variable is an array, we can use `Array.isArray()`.
>
> ```javascript
> let arr = [1, 2, 3];
>
> console.log(Array.isArray(arr)); // true
> ```

### Execution Context and Call Stack

- In JavaScript, the execution context is the environment in which the JavaScript code is executed. It consists of the scope chain, variable object, and `this` keyword.

- The call stack is a data structure that stores the execution context of the currently running function. It follows the Last In First Out (LIFO) principle. When a function is called, its execution context is pushed onto the call stack, and when the function returns, its execution context is popped off the call stack.

#### Example for Execution Context and Call Stack

```javascript
function first() {
  console.log("Inside first function");
  second();
  console.log("Back to first function");
}

function second() {
  console.log("Inside second function");
}

console.log("Global context start");
first();
console.log("Global context end");
```

- The output of the above code will be:

```plaintext
Global context start
Inside first function
Inside second function
Back to first function
Global context end
```

- The call stack for the above code will be:

| `Call Stack`             |
| ------------------------ |
| Second Execution Context |
| First Execution Context  |
| Global Execution Context |

### Scope Chain Augmentation

- The scope chain is a list of variables that are accessible to a function. A child function has access to the variables in its parent function, but not vice versa.

```javascript
function outer() {
  let b = 20;

  this.inner = function () {
    let c = 30;

    console.log(a, b, c);
    console.log(this);
  };
}

const o = new outer();
o.inner();
```

### No Block-Level Scopes

- In JavaScript, variables declared with `var` have function-level scope, while variables declared with `let` and `const` have block-level scope.

```javascript
{
  var a = 10;
  let b = 20;
  const c = 30;
}

console.log(a); // 10
console.log(b); // ReferenceError: b is not defined
console.log(c); // ReferenceError: c is not defined
```

> [!WARNING]
>
> Variables declared with `var` are hoisted to the top of the function, while variables declared with `let` and `const` are not hoisted.
