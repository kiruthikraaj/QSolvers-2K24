# JS Functions:

A Function is a block of code that performs a specific task.
- It can be used as  reusable components

`Function declaration`:

Function declaratin (also called as function definition or function statement)
- It contains
- Function keyword
- Function name (user defined)
- Function parameters
- Function body inside {}


        function Addition(number1, number2) { 
            return number1 + number2; 
        }

`Function Expression`

Function expression is same as function declaration except the function name is written as a variable.

        let Addition = function(number1, number2) { 
                    return number1 + number2; 
                }

`Functin Invocation`:

It can be invoked when
- Any event occurs
- Called from JS code
- Automatically invoked


`Return Statement`:

When JavaScript reaches a return statement, the function will stop executing.


        function myFunction(a, b) {
            return a * b;
        }

`() Operator`:


        function MulBy100(x) {
        return x * 100;
        }

        let value = MulBy100(10);  // function call

---

`Parameters`:

Parameters are the variables passed into a function.

        const Student = {
        name : "kanish",
        age: 22,
        email : "kanish@gmail.com"
        }

        function printName(name){  // name is the parameter
        console.log(name);
        }

        printName(Student.name);  // kanish 


`Argument`:

Arguments are the values passed inside the function's parameter.

        const Student = {
        name : "kanish",
        age: 22,
        email : "kanish@gmail.com"
        }

        function printName(name){ 
        console.log(name);
        }

        printName(Student.name);  // Student.name is the argument


`Passing Multiple Parameters`:

Passing more than 1 parameters into a function

const Student = {
    name : "kanish",
    age: 22,
    email : "kanish@gmail.com"
    }

    function printData(name, age, email){ 
        console.log(name);
        console.log(age);
        console.log(email);
    }

    printData(Student.name, Student.age , Student.email);  


---


`Passing an entire Object as parameter`:

Instead of passing an object property, passing an entire object as parameter

        const Student = {
        name : "kanish",
        age: 22,
        email : "kanish@gmail.com"
        }

        function printData(obj){ 
                console.log(obj);
        }

        printData(Student);  

        // { name: 'kanish', age: 22, email: 'kanish@gmail.com' }

---


`Default Parameters`:

When no arguments is passed, default value will get executed.
        const Student = {
        name : "kanish",
        age: 22,
        }

        function printData(obj = { name :"default", age : 5  }){ 
                console.log(obj);
        }

        printData(Student);  //     { name: 'kanish', age: 22 }
        
        printData();   //     { name: 'default', age: 5 }


---


`Rest parameters`:

We can use spread operator to handle indefinite number of parameters to be passed.


        function printData(...list){ 
                console.log(list);
        }

        printData('kanish', 'kumar', 'ajay', 'antony');

        // [ 'kanish', 'kumar', 'ajay', 'antony' ]

        printData() // []



---

`Passing function within another function`:

We can create a function inside another function in Nested style.

        function getFullName(first, last){
        
        function join(first, last){
                const name = first + ' ' + last;
        return name;
        }

        return join(first, last);

        }


        let name = getFullName('Kanish', 'kumar');
        console.log(name);

`Arrow function`:

Array Function simplifies the syntax of creating a function.
- function keyword is removed
- It uses => operator.

                const FullName = (first, last) => {
                return first + ' '+last;
                }

                console.log(FullName('Kanish', 'Kumar'));


---

`Destructuring Assignment`:

It is used to unpack the values from an array or from an object.

        const person = {
        name: 'Kanish',
        age: 22,
        gender: 'male'    
        }

        // destructuring assignment
        let { name, age, gender } = person;

        console.log(name); // Kanish
        console.log(age); // 22
        console.log(gender); // male


Using Normal method:

        const name = ['one', 'two', 'three', 'four']
        console.log(name[0], name[1]);

By destructuring array:

        let [a, b] = ['one', 'two', 'three', 'four'] 
        console.log(a, b);


---

To access 1 and 3 only (skipping 2nd elemnt)

        const name = ['one', 'two', 'three', 'four']
        console.log(name[0], name[2]);

Using Array Destructuring

        let [a, , c] = ['one', 'two', 'three', 'four'] // skips element 2
        console.log(a, c);

---

`Using Spread Operator`:

Using Spread Operator to destructure the entire array

        let [...a] = ['one', 'two', 'three', 'four'] 

        console.log(a);

        // [ 'one', 'two', 'three', 'four' ]


---

`Destructuring assignment in an Object`:

Like arrays, we can also destructure an object in javscript.


        let marks = { x: 89, y: 94, z: 97 };
        const { x, y, z } = marks; // destructuring object

        console.log(x);
        console.log(y);
        console.log(z); 

---

`Self Inoking Function`:

A self-invoking function is a nameless (anonymous) function that is invoked immediately after its definition.

- It is not called. Invoked automatically.

Syntax:

                (function () {
                // body
                })();

Example:


Without Paraemters:

        (function() {
                console.log("Hello I am Kanishkumar");
        }) ();

With Parameters:

        (function(a, b) {
                console.log(a + b);
        })(2, 3);


---

`Function Overloading`:

Unlike other programming languages, JavaScript Does not support Function Overloading.

Overloading is about the same function having different signatures. It is compiler time polymorphism.

JavaScript does not have compile-time polymorphism in the same way as statically typed languages like C++ or Java.

Example:

        function print(){
        return "Hi";
        }

        function print(name){
        return "Hi"+ name;
        }

        function print(name, age){
        return "Hi "+name +  " "+ age;
        }


        console.log(print());  // Hi undefined undefined


In the above example, if we try to overload a method, it will get overriden by the latest one, hence by default it will consider only the 3rd case in above example. Hence method overloading is not directly possible. 

Way to achieve Method overloading,

1. Default Parameters and Type checking:

        function print(name = "", age) {
        if (name && age !== undefined) {
                return "Hi " + name + " " + age;
        } else if (name) {
                return "Hi " + name;
        } else {
                return "Hi";
        }
        }

        console.log(print()); // Hi
        console.log(print("Kanish")); // Hi Kanish
        console.log(print("Kanish", 22)); // Hi Kanish 22


     Now based n the number of arguments, the function execution differs.


---

2. Arguments object:

We can also use arguments object and based on its length, we can exhibit different behaviours.

        function print() {
        if (arguments.length === 0) {
                return "Hi";
        } else if (arguments.length === 1) {
                return "Hi " + arguments[0];
        } else if (arguments.length === 2) {
                return "Hi " + arguments[0] + " " + arguments[1]";
        }
        }

        console.log(print()); // Hi
        console.log(print("Kanish")); // Hi Kanish
        console.log(print("Kanish", 22)); // Hi Kanish 22


---

`Function Borrowing`:

1. Call()


The call() method in JavaScript allows you to invoke a function with a specific this value and arguments.



        let name ={
        first: 'Kanish',
        last: 'Kumar'
        }

        var printName = function(){
        console.log(this.first + " "+ this.last);
        }

        printName.call(name);  //call

`Multiple Objects`:

        let name1 ={
        first: 'Kanish',
        last: 'Kumar'
        }

        let name2 ={
        first: 'Kumar',
        last: 'Kanish'
        }

        var printName = function(){
        console.log(this.first + " "+ this.last);
        }

        printName.call(name1);
        printName.call(name2);


`Passing Additional Parameters`:

        Arguments can be passed directly into the function

        let name ={
        first: 'Kanish',
        last: 'Kumar'
        }


        var printName = function(city){
        console.log(this.first + " "+ this.last + " "+ city);
        }

        printName.call(name, "Chennai");    // adding argumnet list
        
        // Kanish Kumar Chennai

// The first argument is reference to this variable.
// Second argument is the argument for function parameters.


---

2. apply() method:

The apply() method is very handy if you want to use an array instead of an argument list.
If we have more than 1 argument to be passed, this comes handy.

Consider the previous example,

If i want to add parameters, state and country also, then,

       let name ={
        first: 'Kanish',
        last: 'Kumar'
        }

        var printName = function(city, state, country){
        console.log(this.first + " "+ this.last + " "+ city + " "+ state+" "+ country);
        }

        printName.apply(name, ['Chennai', 'TamilNadu', 'India']);  // array of values 

        // Kanish Kumar Chennai TamilNadu India


---

3. Bind Method:

- Used to bind and keep a copy of the method.
- The bind() function creates a new bound function.
- The bind() method creates a new function from an existing one.

        let name = {
        first: 'Kanish',
        last: 'Kumar'
        }

        var printName = function(city, state, country) {
        console.log(this.first + " " + this.last + " " + city + " " + state + " " + country);
        }

        let newFunc = printName.bind(name, 'Chennai', 'TamilNadu', 'India'); 


        newFunc(); 
        // Output: Kanish Kumar Chennai TamilNadu India

---


`Curring Function`:

- Currying in JavaScript is a process in which you can transform a function with multiple arguments into a sequence of nesting functions.

- Currying is a transformation of functions that translates a function from callable as f(a, b, c) into callable as f(a)(b)(c).

Example:


        function Demo(a){
            return function(b){
                return function(c){
                    if (a === b){
                        if (b === c){
                        return "Three values are equal";
                        }
                    }
                    else{
                        return "Three values are not equal";
                    }
                }
            }
        }

        console.log(Demo(2)(3)(2));  // Three values are not equal
        console.log(Demo(2)(2)(2));  // Three values are equal

---

`Why Curring function ?`:

- It makes the function pure and less prone to errors and side effects.

- It is used in functional programming to create a higher-order function.

---


`JS Linting`:

- Linting is a process of analyzing code to identify and fix potential errors, enforce coding standards, and ensure consistency.

`Linter`:

- A linter is a tool that scans code for  errors and deviations from coding standards.

`Different Linters`

#### ESLint: 

- Most widely used. 
- It is highly configurable and supports plugins for various frameworks and libraries.

- In ESLint we can configure our own rules as follows,

        {
            "rules": {
                "semi": ["error", "always"],
                "quotes": ["error", "double"]
            }
        }

        This rule enforces the usage of semicolon and ensures it always has double quotes  for strings.


        export default [
            {
                rules: {
                    semi: ["error", "never"]
                }
            },
            {
                rules: {
                    semi: ["warn", "always"]
                }
            }
        ];

- Defining a single role many time will overwrite the latest rule and get updated.


#### JSHint: 

It provides similar functionality but with different configuration options.

#### JSLint: 

It has fewer configuration options compared to ESLint and JSHint.


---

`Ignoring certain rules in ESLint`:

        /* eslint-disable */       (block of rules)

        // eslint-disable-next-line  (specific rule)

We can comment the specific rule from the ESLint configuration. 


---

`ESLint Setup`:


Install eslint:

        npm install eslint --save-dev

Initialize eslint:

        npx eslint --init


Define set of rules inside a file called `eslint.js`

        module.exports = {
        env: {
            browser: true,
        },
        extends: [
            'eslint:recommended',
        ],

        parserOptions: {
        },

        plugins: [
        ],

        rules: {
            'quotes': ['error', 'single'],
            'semi': ['error', 'always'],
        },
        };

Include eslint in package.json:

        "scripts": {
        "lint": "eslint .",
        "lint:fix": "eslint . --fix"
        }

Run the file:
        
        npm run lint

---