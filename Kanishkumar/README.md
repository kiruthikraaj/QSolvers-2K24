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

Using arrow  function:

        const fibonacciSum  = num => {
        if(num <= 1){
                return num;
        }
        else{
                return fibonacciSum(num-1)+ fibonacciSum(num-2);
        }
        }


        console.log(fibonacciSum(10));


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


