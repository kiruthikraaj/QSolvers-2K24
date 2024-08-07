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
  
## Builder Pattern

Builder is a creational design pattern that lets you construct complex objects step by step. 

        class Pizza{
            constructor(){
                this.crust = ''
                this.sauce = ''
                this.topping =[]
            }

            describe(){
                return `A ${this.crust} crust pizza with ${this.sauce} sauce and toppings: ${this.topping.join(', ')}`;
            }
        }

        class PizzaBuilder{
            constructor(){
                this.pizza = new Pizza()
            }

            setcrust(crust){
                this.pizza.crust = crust;
                return this
            }

            setsauce(sauce){
                this.pizza.sauce = sauce;
                return this
            }

            settopping(topping){
                this.pizza.topping.push(topping);
                return this;
            }

            build(){
                return this.pizza
            }
        }

        builder= new PizzaBuilder();
        pizza = builder
        .setcrust('medium')
        .setsauce('chilli')
        .settopping('olive , tomato')
        .build()

        console.log(pizza.describe())


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

---

## Structural Design Pattern

## 1. Facade Pattern:

Facade is a structural design pattern that provides a simplified interface to a library, a framework, or any other complex set of classes.


        class Grinder {
            grind() {
                console.log("Grinding coffee beans.");
            }
        }

        class WaterHeater {
            heatWater() {
                console.log("Heating water to the perfect temperature.");
            }
        }

        class Brewer {
            brew() {
                console.log("Brewing the coffee.");
            }
        }

        class CoffeeMachineFacade {
            constructor() {
                this.grinder = new Grinder();
                this.waterHeater = new WaterHeater();
                this.brewer = new Brewer();
            }

            makeCoffee() {
                console.log("Starting coffee preparation...");
                this.grinder.grind();
                this.waterHeater.heatWater();
                this.brewer.brew();
                console.log("Coffee is ready!");
            }
        }

        const coffeeMachine = new CoffeeMachineFacade();
        coffeeMachine.makeCoffee();


## 2. Decorator Pattern:

Decorator is a structural design pattern that lets you attach new behaviors to objects by placing these objects inside special wrapper objects that contain the behaviors.

        class Pizza {
            cost() {
                return 10; 
            }

            description() {
                return "Pizza";
            }
        }

        class PizzaDecorator {
            constructor(pizza) {
                this.pizza = pizza;
            }

            cost() {
                return this.pizza.cost();
            }

            description() {
                return this.pizza.description();
            }
        }

        class CheeseDecorator extends PizzaDecorator {
            cost() {
                return super.cost() + 2; 
            }

            description() {
                return super.description() + ", Cheese";
            }
        }

        class PepperoniDecorator extends PizzaDecorator {
            cost() {
                return super.cost() + 3; 
            }

            description() {
                return super.description() + ", Pepperoni";
            }
        }

        let myPizza = new Pizza();

        myPizza = new CheeseDecorator(myPizza);
        myPizza = new PepperoniDecorator(myPizza);
        console.log(myPizza.description()); 
        console.log(`Cost: $${myPizza.cost()}`); 


## 3. Adapter Pattern

Adapter is a structural design pattern that allows objects with incompatible interfaces to collaborate.

        class OldCalculator {
            constructor() {
            this.operations = function(term1, term2, operation) {
                switch (operation) {
                case 'add':
                    return term1 + term2;
                case 'sub':
                    return term1 - term2;
                default:
                    return NaN;
                }
            };
            }
        }

        class NewCalculator {
            constructor() {
            this.add = function(term1, term2) {
                return term1 + term2;
            };
            this.sub = function(term1, term2) {
                return term1 - term2;
            };
            }
        }
        
        class CalculatorAdapter {
            constructor() {
            const newCalculator = new NewCalculator();
            this.operations = function(term1, term2, operation) {
                switch (operation) {
                case 'add':
                    return newCalculator.add(term1, term2);
                case 'sub':
                    return newCalculator.sub(term1, term2);
                default:
                    return NaN;
                }
            };
            }
        }

        const oldCalc = new OldCalculator();

        const adaptedCalc = new CalculatorAdapter();

        console.log(oldCalc.operations(3, 2, 'add')); // Output: 5

        console.log(adaptedCalc.operations(3, 2, 'add')); // Output: 5


## 4. Bridge Pattern

Bridge is a structural design pattern that lets you split a large class into two separate hierarchies - abstraction and implementation which can be developed independently of each other.

        class Device {
            turnOn() {}
            turnOff() {}
            setVolume(volume) {}
        }
        
        class TV extends Device {
            turnOn() {
            console.log("TV is now ON");
            }
        
            turnOff() {
            console.log("TV is now OFF");
            }
        
            setVolume(volume) {
            console.log(`TV volume set to ${volume}`);
            }
        }
        
        class Radio extends Device {
            turnOn() {
            console.log("Radio is now ON");
            }
        
            turnOff() {
            console.log("Radio is now OFF");
            }
        
            setVolume(volume) {
            console.log(`Radio volume set to ${volume}`);
            }
        }
        
        class RemoteControl {
            constructor(device) {
            this.device = device;
            }
        
            togglePower() {
            console.log("Toggling power");
            this.device.turnOn();
            }
        
            volumeUp() {
            console.log("Increasing volume");
            this.device.setVolume(10); 
            }
        
            volumeDown() {
            console.log("Decreasing volume");
            this.device.setVolume(-10);
            }
        }
        
        const tv = new TV();
        const radio = new Radio();
        
        const tvRemote = new RemoteControl(tv);
        const radioRemote = new RemoteControl(radio);
        
        tvRemote.togglePower();
        tvRemote.volumeDown();


## 5. Proxy Pattern

Proxy is a structural design pattern that lets you provide a substitute or placeholder for another object. A proxy controls access to the original object, allowing you to perform something either before or after the request gets through to the original object.

class Document {
    view() {
      console.log("Viewing the document content...");
    }
  }
  class DocumentProxy {
    constructor(name, role) {
      this.userName = name;
      this.userRole = role;
      this.document = new Document();
    }
  
    view() {
      if (this.userRole === 'admin') {
        this.document.view();
      } else {
        console.log(`User Access denied.`);
      }
    }
  }
  
const adminDocument = new DocumentProxy('Kanish', 'admin');
const guestDocument = new DocumentProxy('Kumar', 'guest');

adminDocument.view(); 
guestDocument.view();

## 6. Composite Pattern:

Composite is a structural design pattern that lets you compose objects into tree structures and then work with these structures as if they were individual objects.

        // Component
        class TeamMember {
            constructor(name) {
            this.name = name;
            }
        
            display() {
            throw new Error("This method should be overridden");
            }
        }
        
        // Leaf
        class Employee extends TeamMember {
            display() {
            console.log(`Employee: ${this.name}`);
            }
        }
        
        // Composite
        class Team extends TeamMember {
            constructor(name) {
            super(name);
            this.members = [];
            }
        
            add(member) {
            this.members.push(member);
            }
        
            display() {
            console.log(`Team: ${this.name}`);
            this.members.forEach(member => member.display());
            }
        }
        
        const alice = new Employee("Alice");
        const bob = new Employee("Bob");

        const developmentTeam = new Team("Development Team");
        const designTeam = new Team("Design Team");

        developmentTeam.add(alice);
        designTeam.add(bob);

        const company = new Team("Company");
        company.add(developmentTeam);
        company.add(designTeam);

        company.display();


## 7. Flyweight Pattern

The Flyweight design pattern is a structural pattern that focuses on optimizing memory usage by sharing a common state among multiple objects. 

It aims to reduce the number of objects created and to decrease memory footprint, particularly useful when dealing with a large number of similar objects.

        class Genre {
            constructor(name) {
            this.name = name; // Shared state
            }
        
            showBooks(books) {
            console.log(`Genre: ${this.name}`);
            books.forEach(book => console.log(`  Book: ${book}`));
            }
        }
        
        class GenreFactory {
            constructor() {
            this.genres = {};
            }
        
            getGenre(name) {
            if (!this.genres[name]) {
                this.genres[name] = new Genre(name);
            }
            return this.genres[name];
            }
        }
        
        const factory = new GenreFactory();

        const booksByGenre = [
        { genre: 'Science Fiction', books: ['Dune', 'Neuromancer'] },
        { genre: 'Fantasy', books: ['The Hobbit', 'Harry Potter'] },
        { genre: 'Science Fiction', books: ['Foundation', 'Ender\'s Game'] },
        { genre: 'Mystery', books: ['Sherlock Holmes', 'Gone Girl'] }
        ];

        booksByGenre.forEach(({ genre, books }) => {
        const genreFlyweight = factory.getGenre(genre);
        genreFlyweight.showBooks(books);
        });
