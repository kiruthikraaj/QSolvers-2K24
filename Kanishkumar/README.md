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

## Encapsulation:

Encapsulation is an OOP principle that involves bundling the data (properties) and methods (functions) that operate on the data into a single unit, known as a class in JavaScript.


### Private variables:

We cannot access the private variable directly outside the class. But it is acccessible when it is used within a public method.
It starts with # or _


        class Person{
        #age;

            constructor(name, age){
                this.name = name;
                this.#age = age
            }


        }

        var p1 = new Person("Kanish", 22)
        console.log(p1.#age) 

// Property '#age' is not accessible outside class 'Person' because it has a private identifier.

        class Person{
        #age;

            constructor(name, age){
                this.name = name;
                this.#age = age
            }

            display(){
                console.log(this.name+" is "+this.#age + " years old")
            }


        }

        var p1 = new Person("Kanish", 22)
        p1.display()

Now we can access the private variable using a public method.


- It provides a controlled method to access private variables using public method.


To access private variables, we can use getter setter methods.

        class Person{
            #name;

            constructor(name){
                this.#name = name
            }
        }


        let p1 = new Person("Kanish")
        console.log(p1.name)   // cannot access


But with getter methods, we can be get the name:

        class Person{
            #name;

            constructor(name){
                this.#name = name
            }

            get name(){
                return this.#name
            }
        
        }

        let p1 = new Person("Kanish")
        console.log(p1.name)  // get name


To set the name, we can use setter() method,


            class Person{
                #name;

                constructor(name){
                    this.#name = name
                }

                get name(){
                    return this.#name
                }

                set name(name){
                    if(typeof name === 'string'){
                        this.#name = name
                    }
                    else{
                        console.error("Invalid name")
                    }
                }
            }


            let p1 = new Person("Kanish")
            p1.name = 'Akash' // set new name
            console.log(p1.name) 

----

## Multi level inheritance:

Multilevel Inheritance involves a chain of inheritance where a class inherits from another class, which in turn inherits from yet another class.


        class Animal{
            constructor(name){
                this.name = name
        }

        display(){
            console.log(this.name + " is an animal")
        }
        }

        class Dog extends Animal{
            constructor(name, breed){
                super(name)
                this.breed = breed
        }
        info1(){
            console.log(this.name + " is a " + this.breed + " dog")
        }
        }

        class Cat extends Animal{
            constructor(name, color){
                super(name)
                this.color = color
        }

        info2(){
            console.log(this.name + " is a " + this.color + " cat")
        }
        }


        p1 = new Cat("Cat","orange")
        p1.display()
        p1.info2()

        p2 = new Dog("Dog","labrador")
        p2.display()
        p2.info1()


## Abstraction:

Abstraction hides the implementation details and exposes only what is necessary.

`Abstract Class`:

An abstract class is a class that cannot be instantiated.

`Abstract Method`:

- A type of method that is only declared and has no implementation or “function body” is known as the Abstract method. 

-The abstract method must be declared inside the Abstract Class. Where its definition can be added in its subclass.

----
