# Conditional Statements

Conditional statements are used to handle the statements based on the conditions.

`If statement`:
  
If statement is used to execute a condition.

```
    var age = 29;

    if (age >= 18){
        console.log("You are eligible to vote");
    }

```

`If else statement`:
   
If statement is used to execute a condition.

```
    var age = 29;

    if (age >= 18){
        console.log("You are eligible to vote");
    }
    else{
        console.log("You are not eligible to vote");
    }

```

`else if statement`:
    
Else if statement is used to execute multiple alternate conditions.    

```

    if (condition1)
    statement1
    else if (condition2)
    statement2
    else if (condition3)
    statement3
    .
    .
    .
    else
    statementN

```

# Looping Statements:

1. `for loop`:

    For loop repeats until a specific condition is satisfied.

        for (initialization; condition; increment)
        {
        // statement
        }

Example:

        var sum=0;
        for(i=0; i<=10; i++)
        {
            sum = sum+i;
        }
        console.log(sum); // 55

        ---

        var i = 2; 
        for(; i<4; i++){   // initialize outside for loop
            console.log(i);
        }

        ---

        var i = 2;
        for(; ;){           // infinite loop
            console.log(i);
        }


Printing array elements in for loop:

        // print array elements
        const courses = ['html', 'css' , 'js'];
        for(let i=0; i<courses.length; i++)
        {
            console.log(courses[i]);
        }


`Nested for loop:`

It contains a for loop inside another for loop.



        for (let i = 0; i < 5; i++) {
            let line = ''
            for (let j = 0; j <=i; j++) 
                {
                    line += i + "\t";
                }
                console.log(line);
        }


---


2. `while loop`:

- The while statement creates a loop that executes a specified statement as long as the test condition evaluates to true.
- It is also called as entry controlled loop.

Syntax:
    
    while (condition){
        statement
    }


Example:

        var sum = 0
        var num = 12345
        while(num!=0){
            rem = num%10;
            sum = sum * 10 + rem; 
            num = Math.floor(num / 10);

        }
        console.log(sum); // 54321

3. `do while loop`:

    - Do while loop will execute the statements atleast once. 
    - It is called Exit controlled loop.


Syntax:

        do {
            // Statements
        }
        while(conditions)

Example:

        let i = 1;
        do {
        console.log(i);
        i++;
        } while (i <= 5);  // while loop at end ensures stmt runs atleast once.


Getting User Input using do while:

        let input;
        do {
        input = prompt("Enter a number between 1 and 10:");
        } while (input < 1 || input > 10);
        console.log("You entered: " + input);

---

`For in loop`:
    
    The JavaScript for in statement loops through the properties of an Object:

Syntax:

            for (key in object) {
            // code block
            }


Example:

        const student = {fname:"Kanish", lname:"Kumar", age:22}; 

        let txt = "";
        for (let x in student) {
        txt += student[x] + " ";
        }


For in loop can also used to access array elements.

      
        const numbers = [1,2,3,4,5];

        let txt = "";
        for (let x in numbers) {
        txt += numbers[x];
        }

---

`For of loop`:

For of is used to iterate over an iterable. 
- It can be strings as well as with arrays, set and maps.


Syntax:

        for variable of iterable{
            //code block
        }


Example (using arrays):

        const numbers = ["One", "Two", "Three"];

        let text = "";
        for (let x of numbers) {
        text += x;
        }


Example (using strings):

        const name = "Kanishkumar";

        let text = "";
        for (let x of name) {
        text += x;
        }

---


# Jump Statements:

- The break statement breaks the loop.

- The continue statement skip current iteration and moves to next in a loop.


`Break`:

        let text = "";
        for (let i = 0; i < 10; i++) {
        if (i === 3) 
        { 
            break; 
        }
        text += "The number is " + i + "<br>";   // 0 1 2

        }


`Continue`:

        let text = "";
        for (let i = 0; i < 10; i++) {
        if (i === 3) 
        { 
            continue; 
        }
        text += "The number is " + i + "<br>";   // 0 1 2 4 5 6 7 8 9

        }

---

`Return Statement`:
The return statement stops the execution of a function and returns a value.


        return value;


Example:

    function Hello(){
            return "Hello";
    }


---
# Other Statements:

`Switch case statement`

It is used to execute block of codes depending on various cases.

- It is associated with break statements. Or else it will print all the cases.
- It has a default case value.


Syntax:

        switch (num) {
        case value1:
            statement1;
            break;
        case value2:
            statement2;
            break;
        ...
        default:
            defaultStatement;
            break;
        }

Example:

        let score = 85;
        let grade; 

        switch (true) {
        case score >= 90:
            grade = "A";
            break;
        case score >= 80:
            grade = "B";
            break;
        case score >= 70:
            grade = "C";
            break;
        case score >= 60:
            grade = "D";
            break;
        default:
            grade = "F";
        }

        console.log(grade);   // Grade is B



Multiple cases with identical output:


        let result = "";
        switch (val) {
        case 1:
        case 2:
        case 3:
            result = "1, 2, or 3";
            break;
        case 4:
            result = "4 alone";
        }

Here 1,2,3 will give same o/p.


---


`With statement`: (Not recommeded)

With keyword is used as a kind of shorthand for referencing an object's properties or methods

        with (expression)
            statement


Example:

        let car = {color: 'red'}
        with(car){
        console.log(color)  // red
        }

    But, if a variable already defined in parent scope, it will overridden.

        let color = 'blue'
        let car = {color: 'red'}
        with(car){
        console.log(color)  // red
        }


Why with statement depreciated?

- Poor readability
- Scope leak
- Performance challenges

One Alternative method for with statement is to use `destructuring assignment` 
