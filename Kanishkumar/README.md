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

            Object.assign(person, { age: 22, city: 'Chennai' });

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
