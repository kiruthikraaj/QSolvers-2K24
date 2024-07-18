## Milestone - 4

## Table of Contents

- [Statements in JS](#statements-in-js)
  - [Conditional Statements](#conditional-statements)
  - [Looping Statements](#looping-statements)
    - [Entry Control Loops](#entry-control-loops)
      - [For Loop](#for-loop)
      - [While Loop](#while-loop)
      - [For-in](#for-in)
      - [For-of](#for-of)
    - [Nested Loops](#nested-loops)
      - [Nested For Loop](#nested-for-loop)
      - [Nested While Loop](#nested-while-loop)
      - [For-While Loop](#for-while-loop)
    - [Exit Control Loops](#exit-control-loops)
      - [Do-While Loop](#do-while-loop)
  - [Jump Statements](#jump-statements)
    - [Break Statement](#break-statement)
    - [Continue Statement](#continue-statement)
    - [Return Statement](#return-statement)
  - [Switch Statement](#switch-statement)
  - [With Statement](#with-statement)

### Statements in JS

### Conditional Statements

1. **If Statement** - The if statement executes a statement if a specified condition is satisfies. If the condition is not satisfied, another statement can be executed.

```javascript
if (50 % 2 == 0) {
  console.log("50 is an even number");
}
```

2. **If-Else Statement** - The else statement executes a statement if the condition in the if statement is not satisfied.

```javascript
if (50 % 2 == 0) {
  console.log("50 is an even number");
} else {
  console.log("50 is an odd number");
}
```

3. **If-Else-If Statement** - The if-else-if statement is used to specify a new condition if the first condition is false.

```javascript
const name = "Antony";

if (name.includes("A")) {
  console.log("Name contains the letter 'A'");
} else if (name.includes("B")) {
  console.log("Name contains the letter 'B'");
} else {
  console.log("Name does not contain the letter 'A' or 'B'");
}
```

### Looping Statements

#### Entry Control Loops

1. **For Loop** - The for loop is used to execute a block of code a number of times.

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}
// Output: 0 1 2 3 4
```

- The for loop has three parts:
  - The initialization part: `let i = 0`
  - The condition part: `i < 5`
  - The increment part: `i++`

> [!NOTE]  
>  The for loop runs for n times where n is the number of times the loop is to be executed because the loop starts from 0 and runs up to n-1.  
> The loop runs for 5 times in the above example.

2. **While Loop** - The while loop is used to execute a block of code as long as the condition is true.

```javascript
while (true) {
  console.log("This is an infinite loop");
}

i = 5;
while (i > 0) {
  console.log(i);
  i--;
}
```

- The while loop has only one part:
  - The condition part: `i > 0`

> [!NOTE]
> The while loop runs for n times where n is the number of times the loop is to be executed or until the condition is false.
> The loop runs for 5 times in the above example.

3. **For-in** - The for-in loop is used to iterate over the properties of an object.

```javascript
const person = {
  name: "Antony",
  age: 21,
  address: {
    city: "Chennai",
    state: "TamilNadu",
  },
};

for (let key in person) {
  if (typeof person[key] === "object") {
    for (let key1 in person[key]) {
      console.log(key1 + ":", person[key][key1]);
    }
  } else {
    console.log(key + ":", person[key]);
  }
}

// Output
// name: Antony
// age: 21
// city: Chennai
// state: TamilNadu
```

4. **For-of** - The for-of loop is used to iterate over the elements of an array.

```javascript
const names = ["Antony", "Jude", "Shaman"];

for (let name of names) {
  process.stdout.write(name + " ");
}
// Output: Antony Jude Shaman
```

#### Nested Loops

1. **Nested For Loop** - A for loop inside another for loop.

```javascript
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    process.stdout.write(i + " " + j + " ");
  }
}
// Output: 0 0 0 1 0 2 1 0 1 1 1 2 2 0 2 1 2 2
```

2. **Nested While Loop** - A while loop inside another while loop.

```javascript
let i = 0;
while (i < 3) {
  let j = 0;
  while (j < 3) {
    process.stdout.write(i + " " + j + " ");
    j++;
  }
  i++;
}
// Output: 0 0 0 1 0 2 1 0 1 1 1 2 2 0 2 1 2 2
```

3. **For-While Loop** - A for loop inside a while loop.

```javascript
let i = 0;
while (i < 3) {
  for (let j = 0; j < 3; j++) {
    process.stdout.write(i + " " + j + " ");
  }
  i++;
}
// Output: 0 0 0 1 0 2 1 0 1 1 1 2 2 0 2 1 2 2
```

#### Exit Control Loops

3. **Do-While Loop** - The do-while loop is similar to the while loop, but the condition is checked after the execution of the block of code. It is also called as exit control loop.

```javascript
do {
  console.log("This is an infinite loop");
} while (true);

const i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
// Output: 0 1 2 3 4
```

- The do-while loop has two parts:
  - The block of code to be executed
  - The condition part: `i < 5`

> [!NOTE]
> The do-while loop runs at least once even if the condition is false.

### Jump Statements

1. **Break Statement** - The break statement is used to terminate the loop or switch statement.

```javascript
str = "Antony";
let result = "";
for (let i = 0; i < str.length; i++) {
  if (str[i] == "o") {
    break;
  }
  process.stdout.write(str[i]);
}

// Output: Ant
```

2. **Continue Statement** - The continue statement is used to skip the current iteration of the loop and continue with the next iteration.

```javascript
let str = "Antony";
let result = "";
for (let i = 0; i < str.length; i++) {
  if (str[i] == "o") {
    continue;
  }
  process.stdout.write(str[i]);
}

// Output: Antny
```

3. **Return Statement** - The return statement is used to return a value from a function.

```javascript
function add(a, b) {
  return a + b;
}

console.log(add(5, 10));
// Output: 15
```

### Switch Statement

The switch statement is used to perform different actions based on different conditions.

```javascript
function getDay(day) {
  switch (day) {
    case day:
      console.log(`Today is ${day}`);
      break;
    default:
      console.log("Day not available");
  }
}

getDay("Monday");
// Output: Today is Monday
```

### With Statement

The with statement is used to access the properties of an object without specifying the object name.

```javascript
const person = {
  name: "Antony",
  age: 21,
};

with (person) {
  console.log(name, age);
}
```
