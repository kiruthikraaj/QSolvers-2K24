# OOPS in JavaScript

# 1. Classes:

- Classes are templates for objects. 
-  It contains properties and methods.
- A single template which is used to create various objects.
- They provide a clear and concise way to create objects and deal with inheritance.

### Constructor

- The constructor is a special method used to initialize objects.
- It is called when an object of a class is created.
- It can accept parameters to set initial values for the object's properties.
- A class can have only one constructor method.

### Creation of class

We can craete a class using two ways.

1. Class declaration.

        class className{
                ...
            }

> Typeof class is a function.

2. Class expression.

        const name = class className{
            ...
        }

---

### class Constructor

- A constructor inside a class is a special method where you can create initial values.
- Constructors can have parameters to initialize the object's properties.
- If we do not have a constructor method, JavaScript will add an invisible and empty constructor method.
- It does not have any name. It is always named as `constructor`.

```js
        class Rectangle{
            constructor(length, breadth){
                this.length = length;
                this.breadth = breadth;
            }

            area(){
                console.log(this.length * this.breadth);
            }

            perimeter(){
                console.log(2*(this.length+this.breadth));
            }
        }

        let obj = new Rectangle(12,5);
        obj.area()
        obj.perimeter()
```

### What happen if no constructor is created?

- JavaScript provides a default constructor that does nothing.
- It only allows object creation.
- New instance of a class is created by we need to set the properties manually.

```js
        class Rectangle{

            area() {
                console.log(this.length * this.breadth);
            }

            perimeter() {
                console.log(2*(this.length+this.breadth));
            }
        }

        let obj = new Rectangle();

        obj.length = 12
        obj.breadth = 5

        obj.area()
        obj.perimeter()
```

# 2. Objects


-  An instance is an `individual object created from a class`. You use the new keyword to create an instance of a class.
- When you create an instance, the class constructor is called to initialize the object

In above example, `obj is the instance of class Rectangle.`


`Object Properties`

- Properties are variables that belong to an object.
- They are used to store data in an object.
- They can be defined in the constructor or set directly on the instance.

```js
        class Person{
            constructor(name,age,city){
                this.name = name
                this.age = age
                this.city = city
        }
        }

        let p1 = new Person('Kanish',22,'Chennai')
        console.log(p1)
```

In above example, `name, age, city` are the object properties.


`Object Methods`

- Methods are functions inside a class that operates on the object.

```js
        class Person{
            constructor(name,age,city){
                this.name = name
                this.age = age
                this.city = city
        }

        display(){
            console.log(this.name,this.age,this.city)
        }

        }

        let p1 = new Person('Kanish',22,'Chennai')

        p1.display()
```

In above code, display() is the object method.

---

### Inheritance

- Inheritance is a mechanism in which one class can inherit the properties and methods of another class.

- super is used within a derived class to call methods or constructors from its base class.

        class Animal{
            constructor(name){
                this.name = name
            }

            speak(){
                console.log(this.name + " makes a sound")
            }
        }

        class Cat extends Animal{
            constructor(name, color){
                super(name)
                this.color = color
            }

            speak(){
                console.log(this.name , this.color)
            }
        }

        let cat1 = new Cat("Orange car", "Orange")
        cat1.speak()

---

### Method overriding:

Method overriding is a concept tied with inheritance, when a child class inherits some method from the parent class but redefines it on its on context then it is known as method overriding.

In above code,
speak() is the method of Animal class and Cat class also have speak() method. but child method is overridden.

`super keyword`:

super is used within a derived class to call methods or constructors from its base class.

---

### Static Methods:

-  In JavaScript, static methods and properties are tied to the class itself rather than to instances of the class. 

- You call static methods and access static properties directly from the class itself.

- Define using `Static` keyword, `invoked using class name`.


        class Math{
            static Pi(){
                return 22/7
            }
        }

        console.log(Math.Pi()) // 3.142857142857143

---

