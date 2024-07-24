### Primitive data types:

<br >

- They are the basic data types. They are immutable.
- They stored directly in the varaible.
- Accessed directly

<br >
<br >

1. Number: 

Represents both integer and floating-point numbers.

        let age = 25;
        let pi = 3.14;


2. String: 

Represents sequences of characters.

        let name = "John Doe";

3. Boolean: 

Represents logical values, true or false.


        let isStudent = true;


4. Undefined: 

Represents a variable that has been declared but not assigned a value.


        let x;
        console.log(x); // undefined

5. Null: 

Represents the intentional absence of any object value.

        let y = null;

6. Symbol: 

Represents a unique and immutable value, often used as object property keys.

        let sym = Symbol('description');


---

### Reference Data types

<br >
- Reference data types are used to store collections of data and more complex entities. 
- Stores a reference to the value in memory.
- Reference data types are mutable, meaning they can be changed after they are created.
- Accessed via reference.

<br >

1. Object: 

Represents collections of key-value pairs.

        let person = {
        name: "Kanish",
        age: 22
        };


2. Array: 

Represents ordered collections of values.


        let numbers = [1, 2, 3, 4, 5];


3. Function: 

Represents callable pieces of code.


    function greet() {
        console.log("Hello, World!");
    }

---

<br >
Primitive value vs Reference value:

<br >

| Primitive Values                                                        | Reference Values                                  |
|-------------------------------------------------------------------------|--------------------------------------------------|
| Number, String, Boolean, Undefined, Null                | Object, Array, Functions |
| Stored directly in the variable                                         | Stores a reference (address) to the value in memory |
| Immutable                                  | Mutable                 |


<br >


#### Javascript Storage Engine:
<br >
JavaScript engines store their data in two places; the Stack Memory and the Heap Memory.
<br >
<br >

1. Stack Memory:
- Executes during compile time
- Stores primitive values and stores the reference to object/array values.

<br >

2. Heap Memory:

- Executes during runtine.
- Stores the objects and arrays.
<br ><br >

Primitive value:

<br >


        let x = 10;

        let y = x;

        x = 20;

        console.log(x);   // 20
        console.log(y);   // 10

Here the value of x is 20 and y is 10

- y has the copy of original value of veriable x hence, it gives 10 and hence not get updated.

- Hence it is immutable.

---
<br >

Reference value:
<br >

        let x = [1, 2, 3, 4, 5];

        let y = x;
        
        x[0] = 10;
        
        console.log(x);   // [10, 2, 3, 4, 5]

        // now the value of x[0] got updated.

- y = x means both pointing the same reference (address) and hence, changes made in an object value reflected finally.

<br >
Example 2:

<br>

        let x = {value : 10}

        let y = x

        x = 20

        console.log(x)   // 20
        console.log(y)   // 20

---

### Making mutable to immutable in Js:

Since arrays, objects are mutable, as follows,

        let numbers = ['One', 'Two', 'Three', 'Four'];

        console.log(numbers);

        numbers[1] = "Five";

        console.log(numbers)  // number[1] updated as Five

        let person = {
            name : 'kanish',
            age: '22'
        }

        console.log(person)

        person.age = 26

        console.log(person)  // age updated with 26


We can use Object.freeze() to make them immutable.

        const numbers = ['One', 'Two', 'Three', 'Four'];

        console.log(numbers);

        Object.freeze(numbers);

        numbers[1] = "Five";

        console.log(numbers)  // number[1] not changed

        const person = {
            name : 'kanish',
            age: '22'
        }

        console.log(person)

        Object.freeze(person);

        person.age = 26

        console.log(person)  // age remains 22


---

### Object seal

Object.seal() is a method used to prevent the addition or removal of properties from an object, but it still allows for modification of existing properties


Withoul Object seal

        const numbers = ['One', 'Two', 'Three', 'Four'];

        numbers.push('Six');

        console.log(numbers) 

        // [ 'One', 'Two', 'Three', 'Four', 'Six' ]


After using Object.seal()

        const numbers = ['One', 'Two', 'Three', 'Four'];

        Object.seal(numbers);
        numbers.push('Six');

        console.log(numbers) 

        // TypeError: Cannot add property 4, object is not extensible.

---
<br >

### Object preventExtension

 Object.preventExtensions() is a method used to prevent the addition of new properties to an object. But allows modifications and deletin of existing properties.


        const numbers = ['One', 'Two', 'Three', 'Four'];

        Object.preventExtensions(numbers);
        numbers.pop('Two');

        console.log(numbers)  // [ 'One', 'Two', 'Three' ]

        numbers.push('Five');

        console.log(numbers) // TypeError: Cannot add property 3, object is not extensible

Allows only deletion but not addition of property.

<br >

---

### Dynamic Properties:

JavaScript objects allow you to add or modify properties dynamically.

- We have two ways
- 1. Using dot notation

            let person = {};
            person.name = "Kanish";
            person.age = 22;

- 2. Using square brackets notation

            let person = {};
            person['city'] = "Chennai";


- 3. Using spread operator

            let person = { name: "Kanish" };

            let updatedPerson = { ...person, age: 22, city: 'Chennai' };

            console.log(updatedPerson);

- 4. Using Object assign()


            let person = { name: "Kanish" };

            Object.assign( person, { age: 22, city: 'Chennai' });

            console.log(person);

---

### Determining Type

We can use Typeof operator to determine the type of operand.

        console.log(typeof "hello"); // "string"
        console.log(typeof 123); // "number"
        console.log(typeof true); // "boolean"
        console.log(typeof {}); // "object"

    For array,

        console.log(typeof [1, 2, 3]); // "object"  ❌

        console.log(Array.isArray(arr)); // true    ✅


### Passing Arguments


In JavaScript, arguments are passed by value for primitive data types and by reference for reference data types.


- Primitive values are passed by value. Changes to the argument inside a function do not affect the original value.

        function modifyValue(x) {
        x = 20;
        }

        let num = 10;
        modifyValue(num);
        console.log(num); // 10



- Reference values are passed by reference. Changes to the argument inside a function affect the original object.

        function modifyObject(obj) {
        obj.key = "world";
        }

        let myObj = { key: "hello" };
        modifyObject(myObj);
        console.log(myObj.key); // "world"


---

### Copying values

#### Shallow Copy:

- In Shallow copy, a copy of the object will be created and it does not affect the original object. 
- Shallow copy is done by using the spread operator (...) or Object.assign() method.
- But it copies only top level properties.


        let person ={
        name : 'Kanish',
        age : 22,
        }

        console.log(person);

        let copy = {...person}

        copy.age = 23;

        copy.address.city = 'bangalore';

        console.log(copy);    // copy object is created
        console.log(person);  // copy object  does not affect real object if it does not have nested properties


With nested properties,

`Using ... operator:`

        let person ={
        name : 'Kanish',
        age : 22,
        address : {city: 'chennai', state :'tamilnadu'}
        }

        let copy = {...person}

        copy.age = 23;
        copy.address.city = 'bangalore';

        console.log(copy);    // copy object is created
        console.log(person);  // copy object affects the value of nested properties but not the direct properties.


        Output of person object :

        {
        name: 'Kanish',
        age: 23,
        address: { city: 'chennai', state: 'tamilnadu' }
        }

        Output of copy object:

        {
        name: 'Kanish',
        age: 22,
        address: { city: 'chennai', state: 'tamilnadu' }
        }


`Using Object.assign():`

        let person ={
        name : 'Kanish',
        age : 22,
        address : {city: 'chennai', state :'tamilnadu'}
        }

        let copy = Object.assign({}, person)

        copy.age = 23;
        copy.address.city = 'bangalore';

        console.log(copy);    // copy object is created
        console.log(person);  // copy object affects the value of nested properties but not the direct properties.


----

#### Deep Copy:

Deep copy creates a copy of all the properties including the nested properties.

To create a deep copy, we have following methods.


1. Using JSON parse() and JSON stringify():

        const person ={
        name: 'Kanish',
        age :22,
        address : {city: 'chennai', state: 'tamilnadu'}
        }

        console.log(person);

        let copy = JSON.parse(JSON.stringify(person))

        copy.address.city= 'madurai';
        console.log(copy);
        console.log(person);  // original unaffected 


2. Using Lodash library  [ cloneDeep() ]


        const a = require('lodash')

        const person ={
        name: 'Kanish',
        age :22,
        address : {city: 'chennai', state: 'tamilnadu'}
        }

        const copy = a.cloneDeep(person);
        copy.address.city = 'madurai';

        console.log(copy);
        console.log(person);

---

### Execution Context:
<br >

- It is an environment where javascript code gets executed.

- It has two phases 

1. Creation phase

It is responsible for creating the variables, objects, functions available in the code to get executed.

1. Variable object (Contains all variables, functions in current scope)
2. Scope chain (List of variables, objects accessible in current scope)
3. this keyword 


<br >
2. Execution phase

<br>

It is responsible for assigning values to variables, execution of the functions and managing call stack.

1. Assigning values to variables
2. Executing function calls
3. Managing the call stack (push and pop)

<br >


### JavaScript Execution Context

| Creation Phase           | Execution Phase  |
|--------------------------|------------------|
| Variable Objects (VO)     |Assignment           |
| Scope Chain              | Execution        |
| "this" keyword           | Manage Callstack   |



1. Variable Object:

- Variable object considers all the variables, functions, arguments available in the current scope.
        
        function outer() {
        var a = 1;

        function inner() {
                var b = 2;
                console.log(a); // Variable a is found in the outer scope
                }

                inner();
        }

        outer();


Outer Scope:

- Variable object: a, inner()

Inner Scope:

- Variable object: b

Hence, variable Object is

                {
                "outer": {
                "a": undefined,
                "inner": function
                },
                "inner": {
                "b": undefined
                }
                }

### Scope Chain:

- Scope chain is a list of all the variable objects in the current scope and all the parent scopes.

Scope chain execution order:


        Global Execution Context
        |
        |-- outer Execution Context
                |
                |-- inner Execution Context


When inner scope is executed,
VO of inner -> VO of outer -> Global Environment

During inner scope, 

- b is assigned 2.
- console.log(a) searches for a in the current scope.
- a is not found in inner's scope, so it looks up the Scope Chain.
- a is found in outer's scope, so 1 is logged to the console.


---

### Components in Execution context

1. Memory Component

- Refers the memory space needed for a code component.

2. Code component

- Represents the actual code this is being executed for that context.


### Call Stack:

- The Call Stack is a mechanism for keeping track of function calls in a program. 
- It follows a Last In, First Out (LIFO) structure.

Initially it is empty

When javascript code starts to run, GEC (Global Execution Context) is added to stack.
It represents global scope.

When a function call is executed, the function execution context is popped and new context is created.


                1. function greetings() {
                2.         console.log("Welcome to the JS world!");
                3. }

                4. greetings();

- In above code,

When the code starts to run,


- GEC is added to call stack
- When line 4 is executed, function greetings is called.
- Function execution context is created and pushed to call stack.
- Function execution context is popped from call stack when the function returns.
- GEC is popped from call stack when the code execution is finished.


>Reference
> <br>
> <br>
>https://dev.to/jahid6597/javascript-execution-context-a-deep-dive-4kno


---
### Scope Chain Augmentation

Scope Types: 

JavaScript has three main types of scope: Global, Function, and Block scope.

1. Global Scope: 

        Variables declared globally are accessible everywhere.

2. Function Scope: 

        Variables declared within a function are only accessible within that function.

3. Block Scope:

        Using let and const allows for variables to be confined to the block they are declared in.

4. Lexical Scope: 

        Inner functions have access to the variables of their outer functions.


        const x = 10;

        function one(){
                const y = 20;

                function two(){
                        console.log(x); // searches for x in current scope -> parent scope -> global scope
                        console.log(y); // finds y in parent scope
                }

                two();
        }

        one();

For 'x' the scope chain is `current scope -> parent scope -> global scope`

---

### No Block level Scope:

- Var does not have Block scope
- Const and let has block scope

Var: 

        {
        var x =10;
        }

        console.log(x); // 10

Let:

        {
        let y =20;
        }
        console.log(y);  // ReferenceError: y is not defined


Const:

        {
        const z = 10;
        }
        console.log(z); // ReferenceError: z is not defined


---