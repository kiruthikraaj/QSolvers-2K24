## Function Expression


We can define a function inside an expression by using function keyword.

1. Function Name can be omitted

        const demo = function(length, breadth){
        let area = length * breadth;
        return area;
        }

        console.log(demo(12,5));

2. We can even give Function name  

        const demo = function demo(length, breadth){
        let area = length * breadth;
        return area;
        }

        console.log(demo(12,5));

Function Hoisting:

Calling function before its definition leads to reference error.

        console.log(demo())

        const demo = function (){
        console.log("Hoisted function")
}

Anonymous Function / IIFE:

Defining a function without name.

Method-1

        (function() {
        console.log("Hello");
        })();


Method-2

        !function() {
        console.log("Hello");
        }();


Function generator:

- A generator function uses the yield keyword to generate values.
- A generator function can pause its execution and later resume from where it left off, allowing for more complex control flows and producing sequences of values.
- It returns a generator object. Generator objects are used by next().

        // An example of generator function
        function* gen(){
        yield 1;
        yield 2;
        ...
        }


`Function generator expression`:

- we can define a generator function to a variable.

        const x = function* (){
        yield 10;
        yield 20;
        yield 30; 
        }

        let z = x();

        console.log(z.next().value)  // 10
        console.log(z.next().value)  // 20
        console.log(z.next().value)  // 30

---

>`Regular Functions: `
>
>To do a simple computation or action that returns a single result.
>
>`Generator Functions: `
>
>To produce a sequence of values, handle asynchronous operations with yield in conjunction with async/await, or manage complex state transitions.

Arrow Function Expression:

        const x = (a,b) => a+b;
        console.log(x(2,3));

--

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

Usage along with bind function :

```javascript
        context = {
        greet : 'Welcome'
        }

        function display(name, callback) { // function
        callback();
        console.log(name);
        }
        
        function callMe() { // callback function
        console.log(this.greet);
        }

        const bound = callMe.bind(context)
        
        display('Kanish', bound); // function call
```   
---

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

## Promises

- A Promise is an object representing the eventual completion (or failure) of an asynchronous operation and its resulting value. 

- Promises are used to handle asynchronous operations in a more manageable way compared to callbacks.

A promise may have one of three states.

        - Pending
        - Fulfilled
        - Rejected

- It starts in a pending state. That means the process is not complete. 
- If the operation is successful, the process ends in a fulfilled state. 
- If an error occurs, the process ends in a rejected state.

---

## Creation of a Promise

This executor function receives two arguments: resolve and reject.

- `resolve(value):` Called when the asynchronous operation completes successfully.

- `reject(reason):` Called when the asynchronous operation fails.

Syntax:

        let promise = new Promise(function(resolve, reject){
        //do something
        });

Example:

```javascript

        let count = 0;

        let countval = new Promise(function(resolve, reject){

        if(count == 0){
        resolve("Success");
        }
        else{
        reject("Failed");
        }
        });

        console.log(countval)
```
---

## Promise chaining


### `then()`:

- The then() method appends the resolved handler callback.

```javascript
        let count = 0

        let countVar = new Promise(function(resolve, reject){
        
        if(count === 0){
                resolve(count);
        }
        else{
                reject("Error");
        }
        })

        countVar
        .then(function(){
        setTimeout(() => {
                console.log(count+1)     
        }, 1000);
        return count;
        })

        .then(function(){
        setTimeout(() => {
                console.log(count+2)    
        }, 2000);
        return count;
        })

        .then(function(){
        setTimeout(() => {
                console.log(count+3)      
        }, 3000);
        return count;
        })

        .then(function(){
        setTimeout(() => {
                console.log(count+4)
        }, 4000);
        return count;
        })
```

### `catch():`

- Catch method appends the rejection handler callback.


```javascript

        let count = 5

        let countVar = new Promise(function(resolve, reject){
        
        if(count === 0){
                resolve(count);
        }
        else{
                reject("Error");
        }
        })

        countVar
        .then(function(){
        setTimeout(() => {
                console.log(count+1)     
        }, 1000);
        return count;
        })

        .then(function(){
        setTimeout(() => {
                console.log(count+2)    
        }, 2000);
        return count;
        })

        .catch(function(){
        console.log("Error");  // Catch block
        })
```
---

`Pros of Promises:`

- Avoid callback hell by chaining asynchronous operations in a more readable way.
- Built-in error handling with .catch method.
- Can be combined or transformed using higher-order functions such as .then and .map.

`Cons of Promises:`

- Not as widely supported as callbacks, especially in older codebases.
- Slightly more complex to understand compared to callbacks.

---

