## Milestone - 3

## Table of Contents

- [Operators in Javascript](#operators-in-javascript)
  - [Arithmetic Operators](#arithmetic-operators)
  - [Unary Operators](#unary-operators)
  - [Bitwise Operators](#bitwise-operators)
  - [Boolean Operators](#boolean-operators)
  - [Assignment Operators](#assignment-operators)
  - [Relational Operators](#relational-operators)
  - [Conditional (Ternary) Operator](#conditional-ternary-operator)
  - [Comma Operator](#comma-operator)
  - [Spread Operator](#spread-operator)
  - [Nullish Coalescing Operator](#nullish-coalescing-operator)
  - [Optional Chaining Operator](#optional-chaining-operator)

## Operators in Javascript

### Arithmetic Operators

- **Addition (+)** : Adds two operands - 10 + 20 = 30

- **Subtraction (-)** : Subtracts two operands - 20 - 10 = 10

- **Multiplication (\*)** : Multiplies two operands - 10 \* 20 = 200

- **Division (/)** : Divides two operands - 20 / 10 = 2

- **Modulus (%)** : Returns the division remainder - 20 % 10 = 0

- **Increment (++)** : Increases the value of the operand by 1 - a++ or ++a

- **Decrement (--)** : Decreases the value of the operand by 1 - a-- or --a

### Unary Operators

- **Unary plus (+)** : Converts an operand to Number - +10

- **Unary negation (-)** : Converts an operand to Number and negates the value - -10

- **Unary Increment (++)** : Increases the value of the operand by 1 - a++

- **Unary Decrement (--)** : Decreases the value of the operand by 1 - a--

- **Logical Not (!)** : Converts an operand to Boolean and returns the opposite - !true

- **Bitwise Not (~)** : Inverts the bits of the operand - ~5 = -6 (0101 -> 1010)

- **typeof** : Returns the type of the operand - typeof 10 = number

- **delete** : Deletes an personect, an personect's property - delete person.prop

- **void** : Evaluates an expression and returns undefined - void(0)

> [!TIP]  
> Void can be used in place of href="javascript:void(0)" to prevent the page from refreshing or navigating away from the current page.
>
> ```html
> <a href="javascript:void(0)">Click me</a>
> ```

### Bitwise Operators

- **Bitwise AND (&)** : Returns 1 if both the bits are 1 else 0

```javascript
5 & 3 = 1 (0101 & 0011 = 0001)
```

- **Bitwise OR (|)** : Returns 1 if either of the bits is 1 else 0

```javascript
5 | 3 = 7 (0101 | 0011 = 0111)
```

- **Bitwise XOR (^)** : Returns 1 if the bits are different else 0

```javascript
5 ^ 3 = 6 (0101 ^ 0011 = 0110)
```

- **Bitwise Left Shift (<<)** : Shifts the bits to the left by the specified number of positions

```javascript
5 << 1 = 10 (0101 << 1 = 1010)
```

- **Bitwise Right Shift (>>)** : Shifts the bits to the right by the specified number of positions

```javascript
5 >> 1 = 2 (0101 >> 1 = 0010)
```

- **Bitwise Zero Fill Right Shift (>>>)** : Shifts the bits to the right by the specified number of positions and fills 0

```javascript
5 >>> 1 = 2 (0101 >>> 1 = 0010)
```

### Boolean Operators

- **Logical AND (&&)** : Returns true if both the operands are true

```javascript
true && true = true
```

- **Logical OR (||)** : Returns true if either of the operands is true

```javascript
true || false = true
```

- **Logical NOT (!)** : Returns true if the operand is false

```javascript
!true = false
```

> [!NOTE]
> Everything with a Value is **true**
> Everything without a Value is **false**

### Assignment Operators

- **Assignment (=)** : Assigns the value of the right side to the left side

```javascript
a = 10;
```

- **Addition Assignment (+=)** : Adds the right side value to the left side and assigns the result to the left side

```javascript
a += 10((a = a + 10));
```

- **Subtraction Assignment (-=)** : Subtracts the right side value from the left side and assigns the result to the left side

```javascript
a -= 10((a = a - 10));
```

- **Multiplication Assignment (\*=)** : Multiplies the right side value with the left side and assigns the result to the left side

```javascript
a *= 10 (a = a \* 10)
```

- **Division Assignment (/=)** : Divides the left side value by the right side and assigns the result to the left side

```javascript
a /= 10((a = a / 10));
```

- **Modulus Assignment (%=)** : Returns the division remainder and assigns the result to the left side

```javascript
a %= 10((a = a % 10));
```

- **Left Shift Assignment (<<=)** : Shifts the bits to the left by the specified number of positions and assigns the result to the left side

```javascript
a <<= 1((a = a << 1));
```

- **Right Shift Assignment (>>=)** : Shifts the bits to the right by the specified number of positions and assigns the result to the left side

```javascript
a >>= 1((a = a >> 1));
```

- **Zero Fill Right Shift Assignment (>>>=)** : Shifts the bits to the right by the specified number of positions and fills 0, assigns the result to the left side

```javascript
a >>>= 1((a = a >>> 1));
```

### Relational Operators

- **Equal (==)** : Returns true if the operands are equal

```javascript
5 == 5; // true
```

- **Not Equal (!=)** : Returns true if the operands are not equal

```javascript
5 != 3; // true
```

- **Strict Equal (===)** : Returns true if the operands are equal and of the same type

```javascript
5 === 5; // true
```

- **Strict Not Equal (!==)** : Returns true if the operands are not equal and of the same type

```javascript
5 !== "5"; // true
```

- **Greater Than (>)** : Returns true if the left side is greater than the right side

```javascript
5 > 3; // true
```

- **Less Than (<)** : Returns true if the left side is less than the right side

```javascript
5 < 3; // false
```

- **Greater Than or Equal (>=)** : Returns true if the left side is greater than or equal to the right side

```javascript
5 >= 3; // true
```

- **Less Than or Equal (<=)** : Returns true if the left side is less than or equal to the right side

```javascript
5 <= 3; // false
```

### Conditional (Ternary) Operator

- **Conditional (?:)** : Returns the value based on the condition

```javascript
condition ? value1 : value2;

5 > 3 ? "true" : "false"; // true
```

### Comma Operator

- **Comma (,)** : Evaluates each of its operands from left to right and returns the value of the last operand

```javascript
var a = (5, 10, 15, 20);

console.log(a); // 20
```

### Spread Operator

- **Spread (...)** : Allows an iterable to expand in places where 0+ arguments are expected

```javascript
const arr = [1, 2, 3];

console.log(...arr); // 1 2 3
```

### Nullish Coalescing Operator

- **Nullish Coalescing (??)** : Returns the right-hand side operand when the left-hand side operand is null or undefined

```javascript
const a = null;

const b = a ?? 10;
```

### Optional Chaining Operator

- **Optional Chaining (?.)** : Eliminates the need to explicitly check for null or undefined using if conditions

```javascript
const person = {
  name: "Antony",
  address: {
    city: "Chennai",
  },
};

console.log(person.address?.city); // Chennai
```
