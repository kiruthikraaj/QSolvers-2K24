## Function Expression

We can define a function inside an expression by using function keyword.

        const demo = function(length, breadth){
        let area = length * breadth;
        return area;
        }

        console.log(demo(12,5));


Anonymous Function / IIFE:

Defining a function without name.


        (function() {
        console.log("Hello");
        })();


        !function() {
        console.log("Hello");
        }();


## Recursive Function

A function that calls itself again and again.

Example:


1. Fibonacci Sum:

        function fibonacciSum(num){
        if(num <= 1){
                return num;
        }
        else{
                return fibonacciSum(num-1)+ fibonacciSum(num-2);
        }
        }

        console.log(fibonacciSum(10));  // 55

2. Factorial:

        function factorial(num){
        if(num == 0 || num == 1){
                return 1;
        }
        else{
                return num * factorial(num-1);
        }
        }

        console.log(factorial(6));  // 720

3. String Reverse:

        function reverseString(str){
        if(str == ''){
                return str;
        }
        else{
                return reverseString(str.substr(1))+ str.charAt(0);
        }
        }

        console.log(reverseString('Hello'))
---

## Closures:

A closure is a feature in JavaScript where an inner function has access to the outer function’s variables.

The closure has three scope chains:

- it has access to its own scope — variables defined between its curly brackets
- it has access to the outer function’s variables
- it has access to the global variables

### Closures and Scope Chain

### Inner Function:

- This is the function defined within another function.
- It has access to its own scope, the scope of its parent function, and the global scope.

### Parent Function:

- This is the outer function that contains the inner function.
- The variables defined in this function are accessible to the inner function.

### Global Scope (Root):

- The outermost scope where global variables reside.
- Both the parent and inner functions have access to this scope.


Example:

        let globalScope = "I am global variable";

        function parentFunction(){
        let parentScope = "I am parent function variable";

        function innerFunction(){
                let innerScope = "I am inner function variable";

                console.log(innerScope);
                console.log(parentScope);
                console.log(globalScope);
        }

        innerFunction();
        }

        parentFunction();

---

## Closure Use cases:

- Maintaining State: Keeping track of information over time.
- Event Handlers: Handling events with context.
- Setting Timeouts: Preserving variable values over time.
- Callbacks and Asynchronous Code: Closures are essential for handling callbacks and asynchronous operations.
- Data encapsulation and private variables
- Memoization.


### Example (Maintaining State, Encapsulation, Private variable)

        function Counter(){
        let count = 0;  // Private Variable

        return {
                increment : function(){
                count++;  // state 
                },

                decrement : function(){
                count--;  // state 
                },

                tot : function(){
                console.log(count);
                }
        }
        }

        const  x = Counter();
        x.increment();
        x.increment();
        x.tot();  // 2


- In the above example, the Counter achieves encapsulation by preventing direct manipulation of the private variable count from outside the function. 

- All interactions with count are done through the provided methods (increment, decrement, and tot), ensuring controlled access to the internal state.


---

## This keyword:

- In JavaScript, this refers to the context in which a function or method is executed. 

- It is a keyword that allows access to the properties and methods of the object that is currently being interacted with.

1. Global context

        console.log(this); // global object in node js

2. Explicitly set the value of this using methods like bind(), call(), and apply().

        const person ={
        name: 'Kanish',
        age : 22
        }

        const x = function(){
        console.log(this.name);    
        }

        x.call(person)

3. Constructor functions

In a constructor function (a function used with the new keyword), this refers to the newly created instance of the object.

        function Person(name) {
        this.name = name;
        }

        const person = new Person('xyz');
        console.log(person.name); // Outputs: xyz

4. Object Method

When a function is called as a method of an object, this refers to the object itself.

        const person ={
        name: 'Kanish',
        age : 22,
        demo : function(){
                return this.name;
        }
        }


        console.log(person.demo())

5. Event Handlers:

In event handlers, this refers to the element that triggered the event.

        document.getElementById('myButton').addEventListener('click', function() {
        console.log(this); // 'this' refers to the button element
        });

> `this` may misbehave in callback functions, arrow functions, and nested functions.

---

## Memory leak

A memory leak occurs when a program unintentionally keeps references to objects that are no longer needed, preventing the computer from freeing up memory, which can lead to performance issues and crashes.

        let leak;

        function createLeak() {
        let largeData = new Array(1000000).fill('data');
        leak = largeData; // Keeps a reference to largeData
        }

        createLeak();
        // `largeData` is not garbage collected because `leak` still holds a reference.


## Mimicking Block Scope with IIFE

- An IIFE is a function that runs as soon as it is defined. 

It creates a new scope, which can be used to simulate block scoping.

        !function(){
        var name = 'kanish';
        console.log(name);
        }();

        console.log(name);
        // ReferenceError: name is not defined

> Before ES6, JavaScript does not have block scope. Now we can achieve with let and const.

---

## Synchronous Programming

- Every statement of the code gets executed sequencially.
- Each statement has to wait for the earlier statement to get executed.
- Synchronous is a single thread and `blocking by nature.`

```javascript
        function one(){
                console.log("one");  

        function two(){
                console.log("two"); 
        }
        two();
        }

        one();

`Blocking nature:`

        console.log("Start");
        for (let i = 0; i < 100000000000; i++) {} 
        console.log("End");
```

The loop will block the execution of the console.log("End") statement until it completes.

## Asynchronous Programming

-  Every statement in a function is not executed sequentially. It can also execute in parallel.  
- The next instruction can execute while the previous one is still executing.
- Asynchronous is a multi-threaded and non-blocking by nature.

 ```javascript
        function one(){
                setTimeout(() => {
                        console.log("One");
                }, 4000);
                function two(){
                        console.log("two");
                }
                two();
                }
        one();
```
---

## Callback Function:

 - A callback function is a function that is passed as an argument to another function.
 
 - Callback functions are useful for handling asynchronous events, such as network requests, file operations, or timers.


 ```javascript
        function display(name, callback){   // function
        callback();
        console.log(name);
        }

        function callMe(){    // callback function
        console.log("Hello");
        }

        display('Kanish', callMe);  // function call
```

Example-2

```javascript
        context = {
        greet : 'Welcome'
        }

        function display(name, callback) { // function
        callback();
        console.log(name);
        }
        
        function callMe() { // callback function
        console.log(context.greet);
        }
        
        display('Kanish', callMe); // function call
```


## Callback Hell (Pyramid of doom):

- Callback Hell is essentially nested callbacks stacked below one another forming a pyramid structure.

- It makes the code hard to read and increases complexity and can prone to errors.

```javascript

        function firstFunction(callback){
        setTimeout(() => {
                console.log("First function");
                callback();
        }, 1000);
        }

        function secondFunction(callback){
        setTimeout(() => {
                console.log("Second Function");
                callback();
        }, 1000);
        }

        function thirdFunction(callback){
        setTimeout(() => {
                console.log("Third function");
                callback();    
        }, 1000);
        }

        function fourthFunction(callback){
        setTimeout(() => {
                console.log("Fourth Function");
                callback();
        }, 1000);
        }


        firstFunction(() =>{
        secondFunction(() => {
                thirdFunction(() => {
                fourthFunction(() => {
                        setTimeout(() => {
                        console.log("Done");
                        }, 1000);
                })
                })
        })
        })
```

## Promise

- One way to achieve asynchronous operation in JS.
- A Promise is an object representing an asynchronous operation and its resulting value. 

- Promises are used to handle asynchronous operations in a more cleaner way compared to callbacks.

A promise may have one of three states.

        - Pending
        - Resolved (successful)
        - Rejected (handle errors)

- It starts in a pending state. That means the process is not complete. 
- If the operation is successful, the process ends in a resolved state. 
- If an error occurs, the process ends in a rejected state.

---

Example:

- Getting data from api, it may take some time to load and access the data, hence it can be done using asynchronous operation.

## Creation of a Promise

A Promise will have a function, that receives two arguments: resolve and reject.

- `resolve(value):` Called when the asynchronous operation completes successfully.

- `reject(reason):` Called when the asynchronous operation fails.

Syntax:

        let promise = new Promise(function(resolve, reject){
        //logic
        });

Example:

The example illustrates creation of a promise

        const data = new Promise(function(resolve, reject){
            setTimeout(() => {
                const name = 'kanish'

                if(name){
                    resolve(name);
                }
                else{
                    reject('No data present')
                }
            }, 2000);
        })

### Accessing the created promise  / Chaining:

Syntax: 

    Promise_Object().then().catch().finally()

- then() = executes success state
- catch() = executes error state
- finally() = executes both success and error state


Example:

We can access the above created promise as,

        data

        .then(function(name){
        console.log(name);
        })

        .catch(function(error){
            console.log(error);
        })

        .finally(function(){
            console.log('Finally block executed');
        })


Here, since the data is known, the promise is resolved and data is printed.
Incase if data is undefined, error will be catched.

![alt text](image-1.png)

Here the output will throw the error as follows,

![alt text](image-2.png)

> Finally block executes irrespective of the result.

---

`Pros of Promises:`

- Avoid callback hell by chaining asynchronous operations in a more readable way.
- Built-in error handling with .catch method.
- Can be combined or transformed using higher-order functions such as .then and .map.

`Cons of Promises:`

- Not as widely supported as callbacks, especially in older codebases.
- Slightly more complex to understand compared to callbacks.

---


Callback for the same code:

In the callback pattern, we typically pass a callback function that handles both success and error cases.

        function fetchData(callback) {
            setTimeout(() => {
                const name = 'kanish;

                if (name) {
                    callback(null, name); 
                } else {
                    callback(new Error()); 
                }
            }, 2000);
        }

        fetchData(function(error, name) {
            if (error) {
                console.log(error);
            } else {
                console.log(name);
            }
            console.log('Finally block executed');
        });


----

### Callback vs promise:


Callbacks                                                             | Promises                                                                 |
---------------------------------------------------------------------------|--------------------------------------------------------------------------|
| Pass a function as an argument to another function                        | Chainable methods (`then`, `catch`, `finally`)                           |
| Can lead to "callback hell" with nested structures                        | More readable and maintainable chaining syntax                           |
| Must be done within the callback function                                 | Built-in error handling with `catch`                                     ||
| Passing intermediate values through nested callbacks can be difficult  | Easier to pass intermediate values through chained `then` handlers       |                                   |
| Basic asynchronous operations, event handling                             | Complex asynchronous workflows                |


----
### Promise Methods:

1. Promise.all():

**Promise.all**
- Waits for all promises to resolve or any to reject.
- Useful for running multiple asynchronous operations in parallel and waiting for all of them to complete.

```javascript
        Promise.all([promise1, promise2, promise3])
        .then(results => {
                // Handle results
        })
        .catch(error => {
                // Handle error
        });
```

Example:


        p1 = Promise.resolve(50);
        p2 = 200
        p3 = new Promise(function (resolve, reject) {
                setTimeout(resolve, 100, 'geek');
        });

        Promise.all([p1, p2, p3]).then(function (values) {
                console.log(values);
        });

        // all p1,p2,p3 fulfilles


**2. Promise.any**

- Returns the promise value as soon as any one of the promises is fulfilled

        p1 = Promise.reject(50);
        p2 = 200
        p3 = new Promise(function (resolve, reject) {
                setTimeout(reject, 100, 'geek');
        });

        Promise.any([p1, p2, p3]).then(function (values) {
                console.log(values);
        });

        // only p2 is fulfilled


**3. Promise.allSettled**

        p1 = Promise.reject(50);
        p2 = 200
        p3 = new Promise(function (resolve, reject) {
                setTimeout(resolve, 100, 'geek');
        });

        Promise.allSettled([p1, p2, p3]).then(function (values) {
                console.log(values);
        });

        // all p1,p2,p3 fulfilles

![](image-3.png)




## Bluebird promise:

Bluebird is a popular library for working with Promises in JavaScript. It offers additional features and performance improvements over native Promises.

### Installation:

        npm install bluebird

Example usage:

        const Promise = require('bluebird');

        const promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('Hello from Bluebird!'), 1000);
        });

        promise.then(result => {
        console.log(result); 
        });


## Key Features

- Bluebird is optimized for performance, making it suitable for high-performance applications.

- Provides methods like `.map()`, `.reduce()`, and `.all()` for effective handling and aggregation of promises.

- Allows for the cancellation of promises, enabling you to halt execution when necessary.

- Improved error handling with `.catch()` and detailed stack traces for better debugging.

-  Methods like `.isFulfilled()` and `.isRejected()` to inspect the current state of a promise.

- Includes `Promise.promisify()` to convert callback-based functions into promises.


### 1. Promise.resolved()

        const Promise = require('bluebird')

        const resolved = Promise.resolve("Resolved")

        resolved .then( value => {
        console.log(value)
        })

### 2. Promise.reject()

        const Promise1 = require('bluebird')

        const rejected = Promise1.reject("Rejected")

        rejected .then( value => {
        console.log(value)
        })

### 3. Bluebird.delay()

Returns a promise that resolves after a specified delay.

        const Bluebird = require('bluebird');

        Bluebird.delay(2000)
            .then(() => {
                console.log('This message appears after a 2-second delay');
            })
            .catch(error => {
                console.error('An error occurred:', error);
            });

### 4. Bluebird.map()

Maps over an array and returns a promise that resolves with an array of results.

            const Bluebird = require('bluebird');

            const numbers = [1, 2, 3, 4, 5];

            Bluebird.map(numbers, number => number * 2)
                .then(results => {
                    console.log('Doubled numbers:', results);
                })
                .catch(error => {
                    console.error('An error occurred:', error);
                });


5. Bluebird.Promisify:

The promisify method is used to convert a callback-based function to a promise-based function.

        const Promise = require("bluebird");

        function multiply(x, y, callback) {
        setTimeout(() => {
            const z = x * y; 
            callback(null, z); 
        }, 1000); 
        }

        const promise = Promise.promisify(multiply);

        promise(3, 4)
        .then((result) => {
            console.log(result); 
        })
        .catch((error) => {
            console.error(error);
        });

The original multiply function uses a callback, Bluebird.promisify abstracts away the callback handling and allows you to work with the function using promises.

---

### Async / await:

-  Using async and await with promises simplifies asynchronous code and makes it look more like synchronous code.
- Async/await helps in handling asynchronous operations in a synchronous manner.

Async/await can return only success state.
Hence, error can be handled using (Exception Handling) try catch finally blocks.

    function add(x, y) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        const result = x + y;
        resolve(result); 
        }, 1000);
    });
    }

    async function calculateSum() {
        try {
            const sum = await add(3, 4); 
            console.log(sum); // Output: 7
            console.log("Hi")
        } 
        catch (error) {
            console.error(error); 
        }
    }

        console.log("Bye");
        calculateSum();

// async keyword is needed when we use await inside a function.

- The await keyword is placed before the call to a function or variable that returns a promise.

Though, entire code asynchronously that function that as await alone will run synchronously.

---

## Callback to Promise

    function subtract(x, y) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        const difference = x - y;
        resolve(difference);
        }, 1000);
    });
    }

    subtract(5, 3)
    .then((result) => {
        console.log(result); // 2
    })
    .catch((error) => {
        console.error(error);
    });


## Promise to async /await

    function subtract(x, y) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        const difference = x - y;
        resolve(difference);
        }, 1000);
    });
    }

    async function result() {
        const res = await subtract(5, 3);
        console.log(res); // Output: 2
    }

---

Why `async` in js?

- async functions let you write asynchronous code that looks and behaves like synchronous code, making it easier to read and understand.

- With async functions, you can use try/catch blocks to handle errors, similar to synchronous code, making error management simpler.

- async function always returns a promise, allowing you to use await inside it to pause execution until the promise resolves, streamlining asynchronous operations.

---
