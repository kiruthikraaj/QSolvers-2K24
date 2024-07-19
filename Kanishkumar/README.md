## Operators:

## 1. Unary Operator:

- Unary operator is an operator that takes only one operand. It can be prefix or postfix.


    `Unary Plus`:
    
    Unary plus operator is used to convert an operand to a number data type. 

    
        let a = '7';
        document.getElementById("demo1").innerHTML = typeof a;   // string
        document.getElementById("demo2").innerHTML = typeof +a;  // number

    `Unary Minus`:

    The operator converts a value into a number and negates it

        let x = '7'
        let y = -x                 // -7 


    `Increment operator (prefix)`:

    - The operator uses to inserts one value before the incremental value by one

            var x =  2;
            document.getElementById("demo").innerHTML = ++x;   // 3


    `Decrement operator (prefix)`:

    - The operator uses to subtracts one value before the incremental value by one
 
            var x = 2;
            document.getElementById("demo").innerHTML = --x;   // 1

    `Increment operator (postfix)`:

    - The operator uses to inserts one value after the incremental value by one

            var x = 2;
            document.getElementById("demo").innerHTML = x++;   // 2

   `Decrement operator (postfix)`:

    - The operator uses to subtracts one value after the incremental value by one

            var x = 2;
            document.getElementById("demo").innerHTML = x--;   // 2

---


## 2. Bitwise Operator:

`& Operator (AND)`:

    - Only if both bits are 1, set resultant as 1.

    let a = 5; // 0101
    let b = 3; // 0011
    let result = a & b; // 0001 (1)
    console.log(result); // Output: 1


`| operator (OR)`:
    
    - If any 1 bits is 1, set resultant as 1.

`~ operator (NOT)`:
    
    - Invert all the bits.

`^ operator (XOR)`:

    - If both bits are same, resultant is 0.

`<< Left shift operator`:

    - Shifts the operands left by n bits.

      Example: 3<<2 

            3 = 0000 0011  (shift towards left by 2 bits)
            -------------
            12 = 0000 1100

`>> Right shift operator`:

    - Shifts the operands right by n bits.

      Example: 5>>2 
      
            5 = 0000 0101 (shift towards right by 2 bits)
            -------------
            1 = 0000 0001

`>>> Unsigned right shift operator`:

Zero-fill right shift - The bits are shifted to the right and those excess bits are discarded, while 0 bit is added from the left.


    const a = 5; //  00000101
    const b = 2; //  00000010

    console.log(a >>> b); //  00000001   // 1

---

## 3. Boolean Operators:

`AND (&&)`:

Returns only if both condition satisfies.

        let hour = 12;
        let minute = 30;

        if (hour == 12 && minute == 30) {
        alert( 'The time is 12:30' );
        }

`OR (||)`:

Returns if one of the condition satisfies.

        let hour = 11;

        if (hour== 12 || hour == 11){
            alert("The time is either 12 or 11);
        }

`NOT (!)`:

Returns the opposite of the condition.

    let name = "kanish";

    if(name!=""){
        alert("Name is not empty");
    }

---

## 4. Arithmetic operators:

`Addition`:

Produces the sum of two operators.

        Number + Number -> addition
                1 + 2            // 3

        Boolean + Number -> addition
                true + 1        // 2

        Boolean + Boolean -> addition
                false + false   // 0

        Number + String -> concatenation
                5 + "demo"     // "5demo"

        String + Boolean -> concatenation
                "k" + false    // "kfalse"

        String + String -> concatenation
                "kan" + "ish"  // "kanish"

`Subtraction`:

The subtraction operator subtracts the two operands, producing their difference.

        5 - 3                 //  2
        3 - 5                 // -2
        "kanish" - 3             // NaN


`Multiplication`:

The multiplication (*) operator produces the product of the operands.

        console.log(3 * 4);    // 12

        console.log(-3 * 4);   // -12

        console.log('3' * 2);  // 6

        console.log('foo' * 2);   //Nan

`Division`:

Divides two operands.

        1 / 2                  // returns 0.5
        1.0 / 2.0              // returns 0.5
        2.0 / 0                // returns Infinity
        2.0 / -0.0             // returns -Infinity

---

## 5. Relational Operators:

A relational operator compares its operands and returns a Boolean value based on comparison.

`in operator`:

The in operator returns true if the specified property is in the specified object.

        propNameOrNumber in objectName


    Example:

        const letter = ["A", "B", "C"];
        0 in letter; // returns true
        6 in letter; // returns false

`instanceOf operator`:

The instanceof operator returns true if the specified object is of the specified object type. The syntax is:

        objectName instanceof objectType

    Example:

        <p id="demo"></p>
 
        const letter = ["A", "B", "C"];

        document.getElementById("demo").innerHTML =
            (letter instanceof Array)                      // True 

---

## 6. Equality Operator:

The equality (==) operator checks whether its two operands are equal, returning a Boolean result.

            console.log(1 == 1);
            //true

            console.log('hello' == 'hello');
            //true

            console.log('1' == 1);
            //true

            console.log(0 == false);
            //true

 `Strict Equality ====`:
    
    The strict equality operator always considers values and the types.

            console.log(1 === 1);
            //true

            console.log('hello' === 'hello');
            //true

            console.log('1' === 1);
            //false

            console.log(0 === false);
            //false

---

## 7. `Conditional Operator`:

A ternary operator evaluates a condition and executes a block of code based on the condition.
    
            condition ? expression1 : expression2.

        Example:

        function Voting(age) {
            return age >= 18 ? 'yes' : 'no';
        }

---

## 8. `Assignment Operator`:

The assignment (=) operator is used to assign a value to a variable or property.


        | **Operation**              | **Syntax** |
        |----------------------------|------------|
        | Addition Assignment        | `a += b`   |
        | Subtraction Assignment     | `a -= b`   |
        | Multiplication Assignment  | `a *= b`   |
        | Division Assignment        | `a /= b`   |
        | Remainder Assignment       | `a %= b`   |
        | Exponentiation Assignment  | `a **= b`  |


Example:

            let x = 2;
            const y = 3;

            console.log(x);
            //  2

            console.log((x = y + 1)); 
            //  4

`Left Shift Assignment` (<<=):

Shifts the operands left by n bits and assign the value to left operand.

        let x = 5; // 0000 0101
        x <<= 1;  // 0000 1010, x is now 10


`Right Shift Assignment` (>>=):

Shifts the operands right by n bits and assign the value to left operand.

        let x = 10; // 0000 1010
        x >>= 1;   // 0000 0101, x is now 5

---

## 9.`Comma operator`:

The comma (,) operator evaluates each of its operands (from left to right) and returns the value of the last operand.

    expr1, expr2 ...

Example: 
            
        const a = 1, b = 2;

---

## 10. `Spread Operator`:

Spread (...) : Allows an iterable to expand in places where 0+ arguments are expected

        const values = [3,6,9];

        console.log(...values); // 3,6,9
