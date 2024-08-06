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

## Ways to create Object:

1. Using Object literal

        obj1 = {
            name : "Kanish",
            age : 22
        }
        console.log(obj1)


2. Using Object constructor

        person = function(name,age){
            this.name = name,
            this.age = age
        }
        obj2 = new person('Kanish', 22)
        console.log(obj2)


3. Using ES6 Class 

        class Person{
            constructor(name,age){
                this.name = name
                this.age = age
            }
        }
        obj3 = new Person('Kanish',22)
        console.log(obj3)

4. Using Object assign():

        obj4 ={}
        Object.assign(obj4, {name: 'Kanish', age: '22'})
        console.log(obj4)

5. Using defineProperties():

        obj5 ={}
        Object.defineProperties(obj5, {
            'name':{ 
                value:'Kanish',
                writable: true,
                enumerable: true,
                configurable: true
            },
            
            'age': {
                value:'22',      
                writable: true,
                enumerable: true,
                configurable: true,
            }})
        console.log(obj5)

---

## Types of Properties:

Properties are values associated with an object.

1. `Data properties:`

- value: The actual data stored in the property.
- writable: Indicates whether the value of the property can be changed or if it is read-only.
- enumerable: Specifies whether the property is visible during enumeration 
- configurable: Determines if the property can be deleted or changed.


        obj5 ={}
        Object.defineProperties(obj5, {
            'name':{ 
                value:'Kanish',
                writable: true,
                enumerable: true,
                configurable: true
            },
            
            'age': {
                value:'22',      
                writable: true,
                enumerable: true,
                configurable: true,
            }})
        console.log(obj5)

2. `Accessor properties`:

Accessor properties are defined by a pair of getter and setter functions

1. `get()` - A function that is called when the property is read. It does not accept any arguments and should return a value.


2. `set()` - A function that is called when the property is set. It accepts one argument, which is the value being assigned.


        const person = {
            name: 'kanish',

            get Name(){
                return this.name;
            },

            set Name(name){
                this.name = name;
            }
        }

        console.log(person.Name) // get()
        person.Name = 'Kumar';
        console.log(person.Name) // set()

---

## Defining Multiple Properties:

We can use Object.defineProperties() to define multiple properties at once.

       obj5 ={}
        Object.defineProperties(obj5, {
            'name':{ 
                value:'Kanish',
                writable: true,
                enumerable: true,
                configurable: true
            },
            
            'age': {
                value:'22',      
                writable: true,
                enumerable: true,
                configurable: true,
            }})
        console.log(obj5)

---

## Reading Property Attributes

        obj = {
            name : 'kanish',
            age: 22
        }

1. getOwnPropertyDescriptor():

        console.log(Object.getOwnPropertyDescriptor(obj, 'name'))

    Output

        {
                    value: 'kanish',
                    writable: true,
                    enumerable: true,
                    configurable: true
        }
                


2. getOwnPropertyDescriptors():

        console.log(Object.getOwnPropertyDescriptors(obj))

    Output

        {
            name: {
            value: 'kanish',
            writable: true,
            enumerable: true,
            configurable: true
            },
            age: { value: 22, writable: true, enumerable: true, configurable: true }
        }

---

## Design Patterns:

Design patterns are standard solutions to common software design problems. They provide a template for solving issues in software design in a reusable and scalable way. 

There are several types of design patterns, categorized mainly into three groups: 

1. Creational pattern, 
2. Structural pattern,
3. Behavioral patterns.

---

## Creational design Pattern:

- Deals with process of creating the classes and instances, which incraeses the flexibility and reuse of exisiting code.

## 1. Factory Pattern:

Factory Method is a creational design pattern that provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created.


        class sales{
            constructor(title){
                this.title = title;
            }

            desc(){
                console.log(`The job role is ${this.title}`)
            }
        }

        class dev{
            constructor(title){
                this.title = title;
            }

            desc(){
                console.log(`The job role is ${this.title}`)
            }
        }

        class Jobrole{
            static jobselect(choice, title){
            switch(choice){
                case '1':
                    return new sales(title);
                case '2':
                    return new dev(title);
                
                default:
                    throw new Error("error")
            }
        }
        }

        x =Jobrole.jobselect('2', 'dev');
        x.desc()


## 2. Singleton pattern:

Singleton is a creational design pattern that lets you ensure that a class has only one instance, while providing a global access point to this instance.

        class Singleton {
            constructor() {
                if(Singleton.instance){
                    return Singleton.instance
                }
                this.value = 5
                Singleton.instance = this

            }
            getValue(){
                return this.value
            }
        }

        const instance1 = new Singleton();
        const instance2 = new Singleton();
        console.log(instance1 === instance2); 
        console.log(instance1.getValue()); 

## 3. Prototype Pattern

Prototype is a creational design pattern that lets you copy existing objects without making your code dependent on their classes.

        class Prototype {
            constructor(name) {
            this.name = name;
            }
        
            clone() {
            return Object.create(this);
            }
        }
        
        const original = new Prototype("Original");
            const cloned = original.clone();
            
            console.log(cloned.name); 
            
            cloned.name = "Cloned";
        
        console.log(original.name); 
        console.log(cloned.name);  
  
  ---

## Constructor Pattern:


`Using ES6 Class:`

            class Book{
                constructor(title, author){
                    this.title = title;
                    this.author = author;
                }

                display(){
                    console.log(`Title: ${this.title}, Author: ${this.author}`)
                }
            }

            let book1 = new Book('Java', 'PQRS')
            console.log(book1)


`Using Function:`

            function Book(title, author){
                this.title = title;
                this.author = author;
            
            }

            Book.prototype.display = function(){
                console.log(`Title: ${this.title}, Author: ${this.author}`)

            }

            let b1 = new Book('Java', 'PQRS')
            b1.display()