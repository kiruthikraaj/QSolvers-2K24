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

---

## Behavioral Design Pattern:

Behavioral design patterns are concerned with algorithms and the assignment of responsibilities between objects.


## 1. State Pattern:

State is a behavioral design pattern that lets an object alter its behavior when its internal state changes.

        class State{
            change(light){
                throw new Error("Error")
            }

            getStateName(){
                throw new Error("Error")
                }
        }

        class Red extends State{
            change(light){
                light.setState(new Green())
            }

            getStateName(){
                return "Red color"
            }
        }

        class Green extends State{
            change(light){
                light.setState(new Yellow())
            }

            getStateName(){
                return "Green color"
            }
        }

        class Yellow extends State{
            change(light){
                light.setState(new Red())
            }

            getStateName(){
                return "Yellow color"
            }
        }

        class TrafficLight{
            constructor(){
                this.state = new Red()
            }
            
            change(){
                this.state.change(this)
            }

            setState(state){
                this.state = state
            }

            getStateName(){
                return this.state.getStateName()
            }
        }

        light = new TrafficLight()
        console.log(light.getStateName()) // Red color
        light.change()
        console.log(light.getStateName())  // Green color



## 2. Strategy Pattern:

Strategy is a behavioral design pattern that lets you define a family of algorithms, put each of them into a separate class, and make their objects interchangeable.

        class MenuStrategy {
            choose() {
            throw new Error("Method 'choose()' must be implemented.");
            }
        }
        
        class VegetarianMenuStrategy extends MenuStrategy {
            choose() {
            return ["Vegetarian Pizza", "Paneer Curry", "Veg Burger"];
            }
        }
        
        class NonVegMenuStrategy extends MenuStrategy {
            choose() {
            return ["Mutton Biriyani", " Chicken 65", "Fish Fry"];
            }
        }

        class MenuChooser {
            constructor(menuStrategy) {
            this.menuStrategy = menuStrategy;
            }
        
            setMenuStrategy(menuStrategy) {
            this.menuStrategy = menuStrategy;
            }
        
            chooseMenu() {
            return this.menuStrategy.choose();
            }
        }
        
        const menuChooser = new MenuChooser(new NonVegMenuStrategy());

        console.log(menuChooser.chooseMenu()); 
  

## 3. Template Pattern:

The Template Pattern (Template Method Pattern) is a behavioral design pattern that defines the skeleton of an algorithm in a base class and allows subclasses to override specific steps of the algorithm without changing its structure. 

        class Beverage {
        prepare() {
            this.boilWater();
            this.addMainIngredient();
            this.pourInCup();
        }

        boilWater() {
            console.log("Boiling water...");
        }

        addMainIngredient() {
            throw new Error("addMainIngredient() must be implemented");
        }

        pourInCup() {
            console.log("Pouring into cup...");
        }
        }

        class Tea extends Beverage {
        addMainIngredient() {
            console.log("Adding tea leaves...");
        }
        }

        class Coffee extends Beverage {
        addMainIngredient() {
            console.log("Adding coffee grounds...");
        }
        }

        const tea = new Tea();
        tea.prepare();

        const coffee = new Coffee();
        coffee.prepare();



## 4. Visitor Pattern:

Visitor is a behavioral design pattern that lets you separate algorithms from the objects on which they operate.

        class AnimalVisitor {
        visitLion(lion) {
            throw new Error("This method should be overridden");
        }

        visitElephant(elephant) {
            throw new Error("This method should be overridden");
        }
        }

        class FeedVisitor extends AnimalVisitor {
        visitLion(lion) {
            console.log("Feeding the lion.");
        }

        visitElephant(elephant) {
            console.log("Feeding the elephant.");
        }
        }

        class VetCheckVisitor extends AnimalVisitor {
        visitLion(lion) {
            console.log("Checking the lion's health.");
        }

        visitElephant(elephant) {
            console.log("Checking the elephant's health.");
        }
        }
        class Animal {
        accept(visitor) {
            throw new Error("This method should be overridden");
        }
        }

        class Lion extends Animal {
        accept(visitor) {
            visitor.visitLion(this);
        }
        }

        class Elephant extends Animal {
        accept(visitor) {
            visitor.visitElephant(this);
        }
        }

        const lion = new Lion();
        const elephant = new Elephant();
        const feedVisitor = new FeedVisitor();
        const vetCheckVisitor = new VetCheckVisitor();

        lion.accept(feedVisitor);      
        lion.accept(vetCheckVisitor); 
        elephant.accept(feedVisitor);      
        elephant.accept(vetCheckVisitor); 

## 5. Observer Pattern

Observer is a behavioral design pattern that lets you define a subscription mechanism to notify multiple objects about any events that happen to the object they’re observing.

        class WhatsappGroup {
            constructor() {
            this.observers = [];
            }
        
            addMember(observer) {
            this.observers.push(observer);
            }
        
            notifyObservers(message) {
            this.observers.forEach(observer => observer.update(message));
            }
        }
        
        class Observer {
            constructor(name){
            this.name = name
            }
            
            update() {
            console.log(`Welcome to group ${this.name}`);
            }
        }
        
        const group = new WhatsappGroup();
        const member1 = new Observer('Kanish');
        const member2 = new Observer('Kumar');
        
        group.addMember(member1);
        group.addMember(member2);
        
        group.notifyObservers('Hello Observers!');


## 6. Mediator Pattern

Mediator is a behavioral design pattern that lets you reduce dependencies between objects. The pattern restricts direct communications between the objects and forces them to collaborate only via a mediator object.

        class Mediator {
        send(message, sender) {
            if (sender === 'A') {
            console.log(`Mediator received message from A: ${message}`);
            console.log('Mediator forwards message to B');
            } else if (sender === 'B') {
            console.log(`Mediator received message from B: ${message}`);
            console.log('Mediator forwards message to A');
            }
        }
        }

        class ColleagueA {
        constructor(mediator) {
            this.mediator = mediator;
        }

        send(message) {
            console.log(`A sends: ${message}`);
            this.mediator.send(message, 'A');
        }
        }

        class ColleagueB {
        constructor(mediator) {
            this.mediator = mediator;
        }

        send(message) {
            console.log(`B sends: ${message}`);
            this.mediator.send(message, 'B');
        }
        }

        const mediator = new Mediator();

        const colleagueA = new ColleagueA(mediator);
        const colleagueB = new ColleagueB(mediator);

        colleagueA.send('Hello from A');
        colleagueB.send('Hello from B');

## 7. Iterator Pattern

The Iterator Pattern allows sequential access to elements in a collection without exposing the underlying structure. 

        class BookCollection {
        constructor() {
            this.books = [];
        }

        addBook(book) {
            this.books.push(book);
        }

        *[Symbol.iterator]() {
            for (const book of this.books) {
            yield book;
            }
        }
        }

        const collection = new BookCollection();
        collection.addBook('Book 1');
        collection.addBook('Book 2');
        collection.addBook('Book 3');

        for (const book of collection) {
        console.log(book);
        }

## 8. Interpreter Pattern

The Interpreter Pattern defines a grammar for a language and creates an interpreter to deal with it.

        class Expression {
        interpret() {
            throw new Error("This method should be overridden.");
        }
        }

        class NumberExpression extends Expression {
        constructor(value) {
            super();
            this.value = value;
        }

        interpret() {
            return this.value;
        }
        }

        class AddExpression extends Expression {
        constructor(left, right) {
            super();
            this.left = left;
            this.right = right;
        }

        interpret() {
            return this.left.interpret() + this.right.interpret();
        }
        }

        const expression = new AddExpression(new NumberExpression(2), new NumberExpression(3));

        const result = expression.interpret();
        console.log(result); // Output: 5

## 9. Chain of Responsibility

Chain of Responsibility is a behavioral design pattern that lets you pass requests along a chain of handlers. Upon receiving a request, each handler decides either to process the request or to pass it to the next handler in the chain.

        class Handler {
        constructor(nextHandler = null) {
            this.nextHandler = nextHandler;
        }

        handle(request) {
            if (this.nextHandler) {
            this.nextHandler.handle(request);
            }
            else{
                console.log("None can handle")
            }
        }
        }

        class HandlerA extends Handler {
        handle(request) {
            if (request === 'A') {
            console.log('HandlerA handled request A');
            } else {
            super.handle(request);
            }
        }
        }

        class HandlerB extends Handler {
        handle(request) {
            if (request === 'B') {
            console.log('HandlerB handled request B');
            } else {
            super.handle(request);
            }
        }
        }

        const handlerB = new HandlerB();
        const handlerA = new HandlerA(handlerB);

        handlerA.handle('A'); // HandlerA handled request A
        handlerA.handle('B'); // HandlerB handled request B
        handlerA.handle('C'); // None can handle


## 10. Memento Pattern:

Memento is a behavioral design pattern that lets you save and restore the previous state of an object without revealing the details of its implementation.

        class Memento {
        constructor(state) {
            this.state = state;
        }

        getState() {
            return this.state;
        }
        }

        class Originator {
        constructor() {
            this.state = '';
        }

        setState(state) {
            this.state = state;
            console.log(`State set to: ${this.state}`);
        }

        getState() {
            return this.state;
        }

        createMemento() {
            return new Memento(this.state);
        }

        restoreMemento(memento) {
            this.state = memento.getState();
            console.log(`State restored to: ${this.state}`);
        }
        }

        class Caretaker {
        constructor() {
            this.mementos = [];
        }

        saveMemento(memento) {
            this.mementos.push(memento);
        }

        getMemento(index) {
            return this.mementos[index];
        }
        }

        const originator = new Originator();
        const caretaker = new Caretaker();

        originator.setState('State 1');
        caretaker.saveMemento(originator.createMemento());

        originator.setState('State 2');
        caretaker.saveMemento(originator.createMemento());

        originator.setState('State 3');
        originator.restoreMemento(caretaker.getMemento(0)); 


## Summary

| Design Pattern        | Purpose                                      | Use Case                                      |
|-----------------------|----------------------------------------------|-----------------------------------------------|
| **Singleton**         | Ensures a single instance of a class.        | Configuration management, logging services.   |
| **Factory Method**    | Creates objects without specifying exact class. | GUI components, document parsers.            |
| **Prototype**         | Creates new objects by copying an existing object. | Object cloning, dynamic object creation.     |
| **Builder**           | Separates the construction of a complex object from its representation. | Constructing complex objects step-by-step.   |
| **Adapter**           | Converts one interface into another interface expected by the client. | Integrating with legacy systems, third-party libraries. |
| **Bridge**            | Separates abstraction from implementation, allowing them to vary independently. | Graphic libraries, database access layers.   |
| **Composite**         | Allows you to compose objects into tree structures to represent part-whole hierarchies. | File systems, organizational structures.     |
| **Decorator**         | Adds functionality to an object dynamically. | Enhancing GUI components, adding features.   |
| **Facade**            | Provides a simplified interface to a complex subsystem. | Simplifying complex APIs, system interfaces. |
| **Flyweight**         | Reduces the cost of creating and manipulating a large number of similar objects. | Text formatting, graphics rendering.         |
| **Proxy**             | Provides a surrogate or placeholder to control access to another object. | Access control, lazy initialization.         |
| **Strategy**          | Encapsulates algorithms and makes them interchangeable. | Sorting algorithms, payment processing.     |
| **Command**           | Encapsulates requests as objects for flexible command handling. | Undo/redo operations, task scheduling.       |
| **Observer**          | Notifies multiple objects of changes.        | Event handling, real-time data updates.      |
| **Mediator**          | Defines an object that encapsulates how a set of objects interact. | Communication between components, chat systems. |
| **State**             | Allows an object to alter its behavior when its internal state changes. | State machines, workflow systems.            |
| **Template Method**   | Defines the skeleton of an algorithm but lets subclasses override specific steps. | Framework design, code skeletons.            |
| **Chain of Responsibility** | Passes a request along a chain of handlers until one handles it. | Event handling, processing pipelines.        |


---

## The Constructor Pattern:

The Constructor Pattern in JavaScript is a design pattern used to create objects and initialize them with specific properties and methods.

`Using constructor function`:

        function Person(name, age) {
        this.name = name;
        this.age = age;
        
        this.getFullName = function() {
            return `${this.name}, Age: ${this.age}`;
        };
        }

        const person1 = new Person('Kanish Kumar', 22);
        console.log(person1.getFullName()); // Kanish Kumar, Age: 22

`Using Class`:

        class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        
        getFullName() {
            return `${this.name}, Age: ${this.age}`;
        }
        }

        const person1 = new Person('Kanish Kumar', 22);
        console.log(person1.getFullName()); // Kanish Kumar, Age: 22

---

## Prototype Pattern:

The Prototype Pattern in JavaScript is a creational design pattern that allows you to create new objects by copying existing ones, known as prototypes. This pattern is useful when the creation of an object is costly or complex, and you want to create a new object based on an existing one.

## Dynamic Protype Pattern:

The dynamic prototype pattern is used to define methods on a prototype in a way that ensures the methods are only defined once, regardless of how many instances of the object are created.

        function Person(first, last){
        this.first = first;
        this.last = last;

        if( typeof Person.prototype.getName!== 'function')
                {
                    Person.prototype.getName = function(){
                    return this.first + ' ' + this.last;
                }
            }

            if(typeof Person.prototype.About!== 'function') 
                {
                    Person.prototype.About = function(){
                    return "Student"
                }
            }
        }
        
        p1 = new Person("Kanish", "Kumar")
        console.log(p1.getName())

        console.log(p1.About())

## Combination Constructor/ Prototype Pattern:

Leverages the cmbination of both. The constructor handles the instance-specific properties, while the prototype handles shared methods and properties.

        function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        }

        Person.prototype.getFullName = function() {
        return `${this.firstName} ${this.lastName}`;
        };

        const kanish = new Person("Kanish", "Kumar", 22);
        console.log(kanish.getFullName()); // Output: Kanish Kumar

## Durable Constructor Pattern

The Durable Constructor Pattern is a design pattern in JavaScript that aims to create secure, immutable objects by minimizing the exposure of an object's internals. It does so by restricting access to properties and methods, preventing unintended modification. 

        function DurablePerson(name) {
        // Private variable
        let _name = name;

        // Public method
        return {
            getName: function () {
                return _name;
            }
        };
        }

        const person = DurablePerson("Kanish");

        console.log(person.getName()); 
        console.log(person._name); // undefined 

## Parasitic Constructor Pattern:

The Parasitic Constructor Pattern is a JavaScript design pattern where a constructor function creates and customizes an object without directly using this. Instead, it creates a new object, augments it with properties and methods, and then returns this modified object.

        function Person(name, age) {
            const person = {};
            person.name = name;
            person.age = age;
            person.getInfo = function() {
                return `Name: ${this.name}, Age: ${this.age}`;
            };
            return person;
        }

        const person1 = Person('Kanish', 22);
        console.log(person1.getInfo()); 

## Prototype Chaining:

Prototype chaining is a mechanism in JavaScript where an object inherits properties and methods from another object via its prototype.

`Function based`:

        const parent = {
        greet: function() {
            console.log("Hello");
        }
        };

        const child = Object.create(parent);
        child.greet(); // Output: "Hello"


`Class based`:

        class Parent {
        greet() {
            console.log("Hello");
        }
        }

        class Child extends Parent {}

        const childInstance = new Child();
        childInstance.greet(); // Output: "Hello"


## Inheritance:

`Class`:

        class Parent {
        greet() {
            console.log("Hello from Parent");
        }
        }

        class Child extends Parent {
        greet() {
            console.log("Hello from Child");
        }
        }

        const childInstance = new Child();
        childInstance.greet(); // Output: "Hello from Child"


`Prototype based`:

        const parent = {
        greet: function() {
            console.log("Hello from Parent");
        }
        };

        const child = Object.create(parent);
        child.greet = function() {
        console.log("Hello from Child");
        };

        child.greet(); // Output: "Hello from Child"


---

## Constructor Stealing:

Constructor Stealing is a technique in JavaScript where a constructor function from one object is used within another constructor function to borrow functionality or properties

        function Parent(name) {
        this.name = name;
        this.sayHello = function() {
            console.log(`Hello from ${this.name}`);
        };
        }

        function Child(name, age) {
        // Steal properties from Parent
        Parent.call(this, name);
        this.age = age;
        }

        const childInstance = new Child("Kanish", 22);

        childInstance.sayHello(); 
        console.log(childInstance.age); 

---

### Prototypal Inheritance:

Prototypal inheritance involves objects inheriting directly from other objects, without using constructor functions.

        const parent = {
        greet: function() {
            console.log('Hello from Parent');
        }
        };

        const child = Object.create(parent);
        child.greet(); // Output: "Hello from Parent"


## Combination Inheritance:

Combination inheritance combines both constructor and prototypal inheritance.

        function Parent(name) {
        this.name = name; 
        }

        Parent.prototype.greet = function() {
        console.log(`Hello from ${this.name}`);
        };

        function Child(name) {
        Parent.call(this, name);   // Cnstructor Inheritance
        }

        Child.prototype = Object.create(Parent.prototype);  // Prototypal inheritance
        Child.prototype.constructor = Child;

        const child = new Child('Kanish');
        child.greet(); 

## Parasitic Inheritance:

In parasitic inheritance, you create a new object based on an existing object (the "prototype"), and then you add or change properties and methods on the new object. This is done without altering the original prototype object.

`Class based`:

        class Parent {
        greet() {
            console.log('Hello from parent!');
        }
        }

        class Child extends Parent {
        greet() {
            console.log('Hello from child!');
        }
        }

        const parent = new Parent();
        const child = new Child();

        parent.greet(); // Outputs: Hello from parent!
        child.greet();  // Outputs: Hello from child!

`Function based`:

        const parent = {
            greet: function() {
                console.log('Hello from Parent');
            }
        };

        function createChild() {
            const child = Object.create(parent);
            child.sayHello = function() {
                console.log('Hello from Child');
            };
            return child;
        }

        const child = createChild();

        child.greet(); // Output: "Hello from Parent"
        child.sayHello(); // Output: "Hello from Child"

The function createChild() in the example is used to encapsulate the process of creating and customizing a new object based on the parent object. 

---

## Parasitic Combination Inheritance

It combines the combination and parasitic inheritance.
This pattern uses a mix of constructor function and prototypal inheritance while also modifying the object.


        function Parent(name) {
        this.name = name;
        }

        Parent.prototype.greet = function() {
        console.log(`Hello from ${this.name} (parent)!`);
        };

        // Parasitic Inheritance function
        function createChildPrototype() {
        const childPrototype = Object.create(Parent.prototype); 
        childPrototype.greet = function() {
            console.log(`Hello from ${this.name} (child)!`);
        };

        childPrototype.bye = function() {
            console.log(`Bye from ${this.name} (child)!`);
        };

        return childPrototype;
        }

        // Child constructor function
        function Child(name) {
        Parent.call(this, name); 
        }

        Child.prototype = createChildPrototype();

        const parent = new Parent('John');
        const child = new Child('Jane');

        parent.greet(); 
        child.greet();  
        child.bye();    

---

## SOLID Principles:

The SOLID principles are a set of five design principles aimed at improving the structure and maintainability of object-oriented software. 

## 1. Single Responsibility Principle (SRP)
A class should have only one reason to change, meaning it should have only one job or responsibility.

## 2. Open/Closed Principle (OCP)
Software entities should be open for extension but closed for modification.

## 3. Liskov Substitution Principle (LSP)
Subtypes must be substitutable for their base types without altering the correctness of the program.

## 4. Interface Segregation Principle (ISP)
Clients should not be forced to depend on interfaces they do not use.

## 5. Dependency Inversion Principle (DIP)
High-level modules should not depend on low-level modules. Both should depend on abstractions. Abstractions should not depend on details. Details should depend on abstractions.

## Dependency Injection:

Dependency Injection (DI) is a design pattern in which an object receives its dependencies from an external source rather than creating them itself. This pattern promotes loose coupling between components, making the system more modular, easier to test, and maintain.

## Code Snippet:

https://github.com/kiruthikraaj/QSolvers-2K24/tree/kanish-solid-principles

