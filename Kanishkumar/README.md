## JavaScript Case sensitivity

- Javascript is a case sensitive language.

- This means that language keywords, variables, function names, and any other identifiers are treated differently based on case.

- Example: variables firstname and Firstname are treated differently.

**Camelcase**

- CamelCase is a naming convention in JavaScript where the first letter of a variable, function, or method name is lowercase, and the first letter of each subsequent concatenated word is capitalized. 

``` 
Example: lastName 
```

## Identifiers:

- Identifiers are name given to a variable, function or a class.

Rules:
- Identifier names must start with either a letter, an underscore _, or the dollar sign $.
- It may contain numbers (0-9)
- Identifier names cannot start with numbers. 

```
Valid : firstName
Invalid : 1name
```

## Comments

 1. Single line comments start with //.

 2. Multi line comments /* ... */

 Example:

 ```
// This is an inline comment


/ *
Commented code
*/
 ```

## Strict mode

- It defines that JavaScript code should be executed in "strict mode".

- Strict mode makes it easier to write "secure" JavaScript.

```
    "use strict";
```

In strict mode,

1. Error, if the variable isnt declared.
2. Error, if we use an object without declaring it.
3. Deleting a function is not allowed.
4. Duplicating a parameter name is not allowed
5. Octal numeric literals are not allowed
6. Octal escape characters are not allowed
7. Writing to a read-only property is not allowed
8. The word eval, arguments cannot be used as a variable
9. Future reserved keywords are not allowed

        ```
            - implements
            - interface
            - package
            - private
            - protected
            - public
            - static
            
        ```
10. this keyword behaves differently in strict mode.

```
"use strict";
x = 110  // Error

"use strict";
function x(p1, p1) {}; // Error

"use strict";
let x = 010;       // Error   
let x = "\010"     // Error

```


---

## Statements

- JavaScript statements are made of: Values, Operators, Keywords, Expressions, and Comments. 
- JavaScript statements are executed in the same order as they are written, line by line.

- A semicolon marks the end of a statement in JavaScript. 

  Multiple statements are allowed if they are seperated by semicolon.

    ```
    a = 2; b = 3; z = a + b;
    ```

## Code Blocks

- JavaScript statements can be grouped together inside curly brackets. Such groups are known as code blocks.

``` 
    func name(){
        ...
        ...
        ...
    }
```

## White Space

JavaScript ignores multiple white spaces.

```
    a = 2 + 3
    a = 2+3
```

## Keywords

 - Keywords are reserved words which cannot be used for variables, labels, or function names.

 Example

 ```
 var, let, const, for, while
 ```


## Variables:

- Variables are Containers for Storing Data
- Declared using var, let, const.


Redeclared : 

```
var x =  10;
var x = 20;  // redeclared
```

Reassigned:

```
var x = 10;
x = 20; // reassigned
```

### Ways to declare a variables
```
var :
    - Fuctional or global scope
    - Redeclared and reassigned
    - Initialization not required
    
            var x = 10;
            {  
            var x = 6;
            }
            document.getElementById("demo").innerHTML = x;     // 6
    

let :
    - Block scope
    - Redeclared not allowed
    - Can be reassigned
    - Initialization not required
            
            let x = 10;
            {  
            let x = 6;  // cannot redeclared
            }
            document.getElementById("demo").innerHTML = x;     // 10
            

const:
    -Block scope
    - Redeclared not allowed
    - Cannot be reassigned
    - Initialization required

            const x = 10;
            {  
            x = 3;
            }
            document.getElementById("demo").innerHTML = x;     // None
 ```               
---

**Hoisting a variable**:

- Hoisting is a behavior in which a variable can be used before declaration.



    Using var:

        <p id="demo"></p>
        <script>

        Name = "Kanish";                 // using a variable before declaring
        var Name = "Kanishkumar";   

        document.getElementById('demo').innerHTML = Name;  // Kanishkumar
        </script>
    
    Using let:

    This will result in Reference Error.

        <script>
        try{
        Name = "Kanish";                 
        let Name = "Kanishkumar";   
        }
        catch(err)
        {
            document.getElementById('demo').innerHTML = err;  
            
            // ReferenceError: Cannot access 'Name' before initialization
        }
        </script>

    Using const:
            This wont produce any output when a variable is hoisted.

## Typeof operator

- The typeof operator returns the type of a variable or an expression.

    ```
    typeof "Kanish"         // Returns string
    typeof 3.14           // Returns number
    typeof true           // Returns boolean
    typeof 1234n          // Returns bigint
    typeof x              // Returns undefined
    ```

## Undefined

- When a variable is declared and not initialized or not assigned with any value.


```
        let x
        console.log(x)
```

## Null

In JavaScript, null is a special value that is set intentionally that represents an empty value.


```
    let number = null;
```

- In javascript, null and undefined are treated as false values.

<br />
<br />

**Comparison:**

```
undefined == null    // true
undefined === null   // false
```

---

## Boolean 

In javascript, boolean can have either two values
- True
- False

1. Boolean of undefined is false.
2. Boolean of empty string is false.
3. Boolean of null is false.
4. Boolean of NaN is false.
5. Comparing two JavaScript objects always return false.

        Boolean b=new Boolean(value);  


---

## Number

Number() converts value to a Number.

- JavaScript numbers are always stored in double-precision 64-bit binary format IEEE 754. 
- This format stores numbers in 64 bits:

        0-51 bits store the value
        52-62 bits store the exponent
        63rd bit is the sign bit
    
- When you add a string and a number in JavaScript, the result will be a string concatenation.

- Constant with 0x are hexadecimal numbers

        ```
        let num1 = 5                  // 5
        let num2 = 9.2                // 9.2

        let num3 = 3 - "kanish"  
        console.log(num3)             // undefined

        let num4 = 2 /0 
        console.log(num4)             // infinity

        let num5 = -2 /0
        console.log(num5)             // -infinity

    Scientific  Notation:

        let num6 = 5e4
        console.log(num6)             // 50000

    

--- 
<br >
Number Precision 
<br />


     Integer Precision:

        - Integers are precise upto 15 digits.

    Floating Precision:
        - They are not 100% accurate always.


    - To get accurate value, multiply and divide. 


**Numerical Strings**:
- JavaScript automatically converts the numeric strings to numbers in most operations like.

        let x  = "100" / "10";           // 10


**Number Properties**:

    - toString()	
        Returns a number as a string

    - toExponential()	
        Returns a number written in exponential notation

    - toFixed()	
        Returns a number written with a number of decimals

    - toPrecision()	
        Returns a number written with a specified length

    - valueOf()	
        Returns a number as a number

Example,
        let x = 123.09;

        document.getElementById("demo").innerHTML = x.toString();  // 123.09

        document.getElementById("demo1").innerHTML = x.toExponential(); // 1.2309 e+2

        // fixed upto certain float value
        document.getElementById("demo2").innerHTML = x.toFixed(4);  // 123. 0900

        // precise to given digits
        document.getElementById("demo3").innerHTML = x.toPrecision(4); // 123.1

--- 

## JavaScript Strings

-   Strings are used to store text.
-   Strings are surrounded with either single quotes or double quotes.
-   It can be zero or more characters.


**Template Strings**
- Templates are strings enclosed in backticks.
- Template String provide a way to interpolate variables and expressions into strings.
- Template Strings are also called Template Literals.
- Templates allow multi lines.

```
`This is a template string`
```

Created using 2 ways
1. String literal
2. Object (new keyword)

```
let name = 'kanish';  // String literal

var stringname = new String("kanish");   // String Object

```

---

## String Interpolation

Method to inject a variable or expression intto a string.

    const text = "Morning";
    const greeting = `Good, ${text}!`;
    console.log(greeting);



## String Methods

        var text = "Kanishkumar";

        document.getElementById("demo").innerHTML = text.length;   // 11

        document.getElementById("demo1").innerHTML = text.charAt(0);    // K

        document.getElementById("demo2").innerHTML = text.charCodeAt(1);  // 97

        document.getElementById("demo3").innerHTML = text[0];   // K

        document.getElementById("demo4").innerHTML = text.at(1);  // a

        document.getElementById("demo5").innerHTML = text.slice(0,6);   // Kanish

        document.getElementById("demo6").innerHTML = text.slice(-4, -1);  // uma

        document.getElementById("demo7").innerHTML = text.substr(5,3); // (start, start+3)

        document.getElementById("demo8").innerHTML = text.toUpperCase();  // toLowerCase()

        document.getElementById("demo9").innerHTML = text.concat(" ", "K");

        document.getElementById("demo10").innerHTML = text.trim(); // trimStart(), trimEnd()

        document.getElementById("demo11").innerHTML = text.padStart(15, "-"); // pads upto given length  ----Kanishkumar

        document.getElementById("demo12").innerHTML = text.repeat(2); 

        document.getElementById("demo13").innerHTML = text.replace("a", "-"); // replaceAll for all replacements

        document.getElementById("demo14").innerHTML = text.split(""); // array of chars

        document.getElementById("demo15").innerHTML = text.indexOf("a"); // indexOf(), lastIndexOf()
        
        document.getElementById("demo16").innerHTML = text.search("n");  


## Arrays

An array is a special variable, which can hold more than one value:

        const array = [item1, item2, ... itemn];   

- Declared using

1. Direct creation

        const language = ["html", "css"];

2. Empty Arry

        const language = [];
        language[0] = "html";
        language[1] = "css";

3. Using new Array()
        
        const language = new Array("html", "css");

- Access array elements using index
- Access full array using array name
- Use toString() to convert array to string
- typeOf returns arrays as objects


Array Methods:

        const lang = ["html","css", "js"];

        document.getElementById("demo").innerHTML = Array.isArray(lang);  // true

        document.getElementById("demo1").innerHTML = lang.length;  // 3

        document.getElementById("demo2").innerHTML = lang.toString(); // html,css,js

        document.getElementById("demo3").innerHTML = lang.at(2); // js

        document.getElementById("demo4").innerHTML = lang.join(" - "); // connector

        document.getElementById("demo5").innerHTML = lang.push("mongodb");

        document.getElementById("demo6").innerHTML = lang.pop(); // removes last element

        document.getElementById("demo7").innerHTML = lang.shift(); // removes first element and shifts all other elements to left

        document.getElementById("demo8").innerHTML = lang.unshift("react"); // adds new element at beginning and shift other elements to right

        document.getElementById("demo9").innerHTML = lang.sort(); // ascending

        document.getElementById("demo10").innerHTML = lang.reverse(); // descending


sort()  // modify the existing array itself
toSorted()  // craetes new array and sort it

---

## Object Types:

- Object literal is a list of property names:values inside curly braces {}.

1. Empty object:

        const person = {};

        person.firstName = "Kanish";
        person.lastName = "Kumar";
 
 2. Using new object()

        const person = new Object();
        person.firstName = "Kanish";
        person.lastName = "Kumar";

3. Object Constructor:

        const person (first, last){
            this.firstName = first;
            this.lastName = last;
        }

        const s1 = new person("Kanish", "Kumar");        
        const s2 = new person("Ajay", "Saran");

Properties:

1. Add a new property:

        Object.defineProperty(person, "age", {value:"21"})

2. getOwnPropertyNames()
    
    Returns all the property names

            Object.getOwnPropertyNames(person);

3. Functions inside object 

        var person = {
            firstName: "Kanish",
            lastName: "Kumar",
            age: 30,
            fullName: function(){
                return this.firstName + " " + this.lastName		
            }
        }

        person["fullName"]() ; // Kanish Kumar

3. Delete an object property

        delete person.age  // returns true

---

## JSON

- Java Script Object Notation

- JSON can be easily converted to JS objects

        converting JSON strings into JavaScript objects:  JSON.parse()

        converting an object into a JSON string:  JSON.stringify() 

JSON object

        myObj = {"name":"Kanish", "age":21 }

        myObj = `{"name":"Kanish", "age":21 }`  // json string

        myObj = JSON.parse(myJSON);  // to convert as js object



    
