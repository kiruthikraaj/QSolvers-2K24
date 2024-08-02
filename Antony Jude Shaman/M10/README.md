## Milestone - 10

### Table of Contents

- [Types of Properties in Javascript](#types-of-properties-in-javascript)
- [Defining multiple properties](#defining-multiple-properties)
- [Reading property attributes](#reading-property-attributes)
- [Object Creation](#object-creation)
- [Design Patterns](#design-patterns)
  - [Creational Patterns](#creational-patterns)
    - [Singleton Pattern](#singleton-pattern)
    - [Factory Pattern](#factory-pattern)
    - [Builder Pattern](#builder-pattern)
    - [Prototype Pattern](#prototype-pattern)
    - [Constructor Pattern](#constructor-pattern)
  - [Structural Patterns](#structural-patterns)
    - [Decorator Pattern](#decorator-pattern)
    - [Adapter Pattern](#adapter-pattern)
    - [Composite Pattern](#composite-pattern)
    - [Facade Pattern](#facade-pattern)
    - [Bridge Pattern](#bridge-pattern)
    - [Flyweight Pattern](#flyweight-pattern)
    - [Proxy Pattern](#proxy-pattern)
  - [Behavioral Patterns](#behavioral-patterns)
    - [Observer Pattern](#observer-pattern)
    - [Strategy Pattern](#strategy-pattern)
    - [State Pattern](#state-pattern)
  - [Combination Constructor/Prototype Pattern](#combination-constructorprototype-pattern)
  - [Object.create() vs new Object()](#objectcreate-vs-new-object)
  - [Dynamic Prototype Pattern](#dynamic-prototype-pattern)
  - [Parasitic Constructor Pattern](#parasitic-constructor-pattern)
  - [Durable Constructor Pattern](#durable-constructor-pattern)
  - [Inheritance in JavaScript](#inheritance-in-javascript)
  - [Prototype Chaining and Constructor Stealing](#prototype-chaining-and-constructor-stealing)
  - [Parasitic Inheritance](#parasitic-inheritance)
  - [Combination Inheritance](#combination-inheritance)
  - [Parasitic Combination Inheritance](#parasitic-combination-inheritance)
  - [S.O.L.I.D Principles](#solid-principles)
  - [A Car Showroom application to demonstrate the SOLID principles](#a-car-showroom-application-to-demonstrate-the-solid-principles)

### Types of Properties in Javascript

1.  **Data Properties**:

    - **Value**: Contains the property's value.
    - **Writable**: Determines if the property's value can be changed.
    - **Enumerable**: Determines if the property will be returned in a for-in loop.
    - **Configurable**: Determines if the property can be deleted or changed.

    ```javascript
    let obj = {};

    Object.defineProperty(obj, "name", {
      value: "Antony",
      writable: true,
      enumerable: true,
      configurable: true,
    });

    console.log(obj.name); // Antony
    ```

2.  **Accessor Properties**:

    - **Get**: A function that will be called when the property is read.
    - **Set**: A function that will be called when the property is written to.

    ```javascript
    let obj = {
      name: "Antony",
      age: 21,
      get fullName() {
        return this.name;
      },
      set fullName(name) {
        this.name = name;
      },
    };

    obj.fullName = "Antony Jude";

    console.log(obj.fullName); // Antony Jude
    ```

3.  **Property Attributes**:

    - **Value**: Contains the property's value.
    - **Writable**: Determines if the property's value can be changed.
    - **Enumerable**: Determines if the property will be returned in a for-in loop.
    - **Configurable**: Determines if the property can be deleted or changed.
    - **Get**: A function that will be called when the property is read.
    - **Set**: A function that will be called when the property is written to.

    ```javascript
    let obj = {
      name: "Antony",
      age: 21,
    };

    let desc = Object.getOwnPropertyDescriptor(obj, "name");

    console.log(desc);
    ```

4.  **Own Properties**:

    - **Own properties** are properties that are defined directly on the object.
    - Own properties can be accessed using the object name.

    ```javascript
    let obj = {
      name: "Antony",
      age: 21,
    };

    console.log(obj.name); // Antony
    ```

5.  **Inherited Properties**:

    - **Inherited properties** are properties that are inherited from the prototype of the object.
    - Inherited properties can be accessed using the object name.

    ```javascript
    let obj = {
      name: "Antony",
      age: 21,
      __proto__: {
        country: "India",
      },
    };
    console.log(obj.country); // India
    ```

### Defining multiple properties

```javascript
let obj = {};

Object.defineProperties(obj, {
  name: {
    value: "Antony",
    writable: true,
    enumerable: true,
    configurable: true,
  },
  age: {
    value: 21,
    writable: true,
    enumerable: true,
    configurable: true,
  },
});
```

### Reading property attributes

```javascript
let obj = {
  name: "Antony",
  age: 21,
};

let desc = Object.getOwnPropertyDescriptor(obj, "name");

console.log(desc);
```

### Object Creation

1.  **Object Literal**:

    ```javascript
    let obj = {
      name: "Antony",
      age: 21,
    };
    ```

2.  **Object Constructor**:

    ```javascript
    function Person(name, age) {
      this.name = name;
      this.age = age;
    }

    let obj = new Person("Antony", 21);
    ```

3.  **Object.create()**:

    ```javascript
    let obj = Object.create(
      {},
      {
        name: {
          value: "Antony",
          writable: true,
          enumerable: true,
          configurable: true,
        },
        age: {
          value: 21,
          writable: true,
          enumerable: true,
          configurable: true,
        },
      }
    );
    ```

4.  **Object.defineProperties()**:

    ```javascript
    Object.defineProperties(
      {},
      {
        name: {
          value: "Antony",
          writable: true,
          enumerable: true,
          configurable: true,
        },
        age: {
          value: 21,
          writable: true,
          enumerable: true,
          configurable: true,
        },
      }
    );
    ```

### Design Patterns

#### Creational Patterns

1.  **Singleton Pattern**:

- **Singleton** is a creational pattern that lets you ensure that a class has only one instance, while providing a global access point to this instance.

  ```javascript
  const num = (function () {
    let instance;

    function createInstance() {
      const object = new Object("Hello");
      return object;
    }

    return {
      getInstance: function () {
        if (!instance) {
          instance = createInstance();
        }
        return instance;
      },
    };
  })();

  const instance1 = num.getInstance();
  const instance2 = num.getInstance();

  console.log(instance1 === instance2); // true
  ```

> [!IMPORTANT]
>
> The following code is also Singleton Pattern
>
> ```javascript
> const person = {
>   name: "Antony",
>   age: 21,
> };
>
> Object.freeze(person);
>
> person.country = "India";
>
> console.log(person);
> ```

2.  **Factory Pattern**:

- **Factory** is a creational pattern that provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created.

  ```javascript
  function Car(options) {
    this.model = options.model;
    this.price = options.price;
  }

  function CarFactory() {
    this.createCar = function (options) {
      return new Car(options);
    };
  }

  const factory = new CarFactory();

  const car1 = factory.createCar({ model: "Audi", price: 100232 });
  const car2 = factory.createCar({ model: "BMW", price: 202323 });

  console.log(car1);
  console.log(car2);
  ```

3.  **Builder Pattern**

- **Builder** is a creational pattern that lets you construct complex objects step by step. The pattern allows you to produce different types and representations of an object using the same construction code.

```javascript
class CarBuilder {
  constructor() {
    this.car = new Car();
  }

  setModel(model) {
    this.car.model = model;
    return this;
  }

  setPrice(price) {
    this.car.price = price;
    return this;
  }

  build() {
    return this.car;
  }
}

class Car {
  constructor(model, price) {
    this.model = model;
    this.price = price;
  }

  get() {
    return `${this.model} - ${this.price}`;
  }
}

let carBuilder = new CarBuilder();

let car = carBuilder.setModel("Ferrari").setPrice(122321).build();

console.log(car.get()); // Ferrari - 122321
```

4.  **Prototype Pattern**:

- **Prototype** is a creational pattern that lets you copy existing objects without making your code dependent on their classes.

```javascript
function Car(model, price) {
  this.model = model;
  this.price = price;
}

Car.prototype.get = function () {
  return `${this.model} - ${this.price}`;
};

let car1 = new Car("Ferrari", 100232);

console.log(car1.get()); // Ferrari - 100232
```

5. **Constructor Pattern:**

```javascript
function Car(model, price) {
  this.model = model;
  this.price = price;
}

let car1 = new Car("Ferrari", 100232);

console.log(car1);
```

#### Structural Patterns

1.  **Decorator Pattern**:

- **Decorator** is a structural pattern that allows adding new behaviors to objects dynamically by placing them inside special wrapper objects called decorators.

```javascript
function Car() {
  this.price = 100232;
}

Car.prototype.getPrice = function () {
  return this.price;
};

function CarWithAC(car) {
  this.car = car;
  this.price = 5000;
}

CarWithAC.prototype.getPrice = function () {
  return this.car.getPrice() + this.price;
};

let car = new Car();

console.log(Object.getPrototypeOf(car)); // { getPrice: [Function (anonymous)] }
car = new CarWithAC(car);

console.log(car.getPrice()); // 105232
```

2.  **Adapter Pattern**:

- **Adapter** is a structural pattern that allows objects with incompatible interfaces to collaborate.

```javascript
function Car() {
  this.price = 100232;
}

Car.prototype.getPrice = function () {
  return this.price;
};

function CarAdapter(car) {
  this.car = car;
  this.getPrice = function () {
    return this.car.getPrice() + 5000;
  };
}

let car = new Car();

console.log(car.getPrice()); // 100232

car = new CarAdapter(car);

console.log(car.getPrice()); // 105232
```

3.  **Composite Pattern**:

- **Composite** is a structural pattern that lets you compose objects into tree structures to represent part-whole hierarchies.

```javascript
class Component {
  constructor(name) {
    this.name = name;
  }

  getPrice() {
    throw new Error("This method must be overwritten!");
  }
}

class Composite extends Component {
  constructor(name) {
    super(name);
    this.children = [];
  }

  add(child) {
    this.children.push(child);
  }

  remove(child) {
    this.children = this.children.filter((c) => c !== child);
  }

  getPrice() {
    return this.children.reduce((acc, child) => acc + child.getPrice(), 0);
  }
}

class Leaf extends Component {
  constructor(name, price) {
    super(name);
    this.price = price;
  }

  getPrice() {
    return this.price;
  }
}

let root = new Composite("root");

let branch1 = new Composite("branch1");

let branch2 = new Composite("branch2");

let leaf1 = new Leaf("leaf1", 100);

let leaf2 = new Leaf("leaf2", 200);

let leaf3 = new Leaf("leaf3", 300);
root.add(branch1);

root.add(branch2);

branch1.add(leaf1);

branch1.add(leaf2);

branch2.add(leaf3);

console.log(root.getPrice()); // 600
```

4.  **Facade Pattern**:

- **Facade** is a structural pattern that provides a simplified interface to a complex system.

```javascript
class Engine {
  start() {
    console.log("Engine starting...");
  }
}

class Fuel {
  supply() {
    console.log("Fuel supplying...");
  }
}

class CarFacade {
  constructor() {
    this.engine = new Engine();
    this.fuel = new Fuel();
  }

  start() {
    console.log("Car starting...");
    this.engine.start();
    this.fuel.supply();
  }
}

let facade = new CarFacade();

facade.start();
```

5.  **Bridge Pattern**:

- **Bridge** is a structural pattern that lets you split a large class or a set of closely related classes into two separate hierarchies—abstraction and implementation which can be developed independently of each other.

```javascript
class Shape {
  constructor(color) {
    this.color = color;
  }

  applyColor() {
    throw new Error("applyColor method must be implemented");
  }
}

class Circle extends Shape {
  applyColor() {
    console.log(`Applying ${this.color.getColor()} to the circle`);
  }
}

class Color {
  getColor() {
    throw new Error("getColor method must be implemented");
  }
}

class RedColor extends Color {
  getColor() {
    return "red";
  }
}

const red = new Circle(new RedColor());
red.applyColor();
```

6.  **Flyweight Pattern**:

- **Flyweight** is a structural pattern that lets you fit more objects into the available amount of RAM by sharing common parts of state between multiple objects, instead of keeping all of the data in each object.

```javascript
class Car {
  constructor(model, price) {
    this.model = model;
    this.price = price;
  }
}

class CarFactory {
  constructor() {
    this.cars = [];
  }

  create(model, price) {
    const car = this.getCar(model);
    if (car) {
      return car;
    } else {
      const newCar = new Car(model, price);
      this.cars.push(newCar);
      return newCar;
    }
  }

  getCar(model) {
    return this.cars.find((car) => car.model === model);
  }
}

const factory = new CarFactory();

const car = factory.create("Lambo", 123242);
```

7.  **Proxy Pattern**:

- **Proxy** is a structural pattern that lets you provide a substitute or placeholder for another object. A proxy controls access to the original object, allowing you to perform something either before or after the request gets through to the original object.

```javascript
class Car {
  drive() {
    console.log("Driving...");
  }
}

class CarProxy {
  constructor(driver) {
    this.driver = driver;
    this.car = new Car();
  }

  drive() {
    this.driver.age < 18
      ? console.log("Driver too young to drive")
      : this.car.drive();
  }
}

const car = new CarProxy({ name: "Antony", age: 21 });

const car2 = new CarProxy({ name: "Jude", age: 17 });

car.drive();
car2.drive();
```

#### Behavioral Patterns

1.  **Observer Pattern**:

- **Observer** is a behavioral pattern that lets you define a subscription mechanism to notify multiple objects about any events that happen to the object they're observing.

```javascript
class ObserverClass {
  constructor() {
    this.observers = [];
  }

  subscribe(user) {
    this.observers.push(user);
  }

  unsubscribe(user) {
    this.observers = this.observers.filter((subscriber) => subscriber !== user);
  }

  notify() {
    this.observers.forEach((subscriber) => subscriber.call());
  }
}
```

2.  **Strategy Pattern**:

- **Strategy** is a behavioral pattern that lets you define a family of algorithms, put each of them into a separate class, and make their objects interchangeable.

```javascript
class Strategy {
  constructor() {
    this.strategy = null;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  execute() {
    this.strategy.execute();
  }
}

class Strategy1 {
  execute() {
    console.log("Strategy 1");
  }
}

class Strategy2 {
  execute() {
    console.log("Strategy 2");
  }
}

let strategy = new Strategy();

strategy.setStrategy(new Strategy1());

strategy.execute(); // Strategy 1
```

3.  **State Pattern**:

- **State** is a behavioral pattern that lets an object alter its behavior when its internal state changes. It appears as if the object changed its class.

```javascript
class State {
  constructor() {
    this.state = null;
  }

  setState(state) {
    this.state = state;
  }

  execute() {
    this.state.execute();
  }
}

class State1 {
  execute() {
    console.log("State 1");
  }
}

class State2 {
  execute() {
    console.log("State 2");
  }
}

let state = new State();

state.setState(new State1());

state.execute(); // State 1
```

### Combination Constructor/Prototype Pattern

```javascript
// using constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.getDetails = function () {
  return `${this.name} - ${this.age}`;
};

let person = new Person("Antony", 21);

console.log(person.getDetails()); // Antony - 21

// using class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return `${this.name} - ${this.age}`;
  }
}

let person = new Person("Antony", 21);

console.log(person.getDetails()); // Antony - 21
```

### Object.create() vs new Object()

```javascript
// using Object.create()

let person = Object.create({
  name: {
    value: "Antony",
    writable: true,
    enumerable: true,
    configurable: true,
  },
  age: {
    value: 21,
    writable: true,
    enumerable: true,
    configurable: true,
  },
});

console.log(person.name); // Antony

// using new Object()
let person = new Object({
  name: {
    value: "Antony",
    writable: true,
    enumerable: true,
    configurable: true,
  },
  age: {
    value: 21,
    writable: true,
    enumerable: true,
    configurable: true,
  },
});

console.log(person.name); // Antony
```

### Dynamic Prototype Pattern

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;

  if (typeof this.getDetails !== "function") {
    Person.prototype.getDetails = function () {
      return `${this.name} - ${this.age}`;
    };
  }
}

let person = new Person("Antony", 21);

console.log(person.getDetails()); // Antony - 21
```

> [!NOTE]
>
> The main difference between the prototype pattern and the dynamic prototype pattern is that the dynamic prototype pattern checks if the method is already defined before defining it.
> And the method are defined inside the constructor function in the dynamic prototype pattern.

### Parasitic Constructor Pattern

```javascript
function Person(name, age) {
  let obj = {};

  obj.name = name;
  obj.age = age;

  obj.getDetails = function () {
    return `${this.name} - ${this.age}`;
  };

  return obj;
}

let person = Person("Antony", 21);

console.log(person.getDetails()); // Antony - 21
```

### Durable Constructor Pattern

```javascript
function Person(name, age) {
  let obj = {};

  obj.name = name;
  obj.age = age;

  obj.getDetails = function () {
    return `${this.name} - ${this.age}`;
  };

  return obj;
}

let person = new Person("Antony", 21);
Object.freeze(person);

person.name = "Jude";

console.log(person.getDetails()); // Antony - 21
```

> [!NOTE]
>
> The durable constructor pattern is used to prevent the properties from being changed after the object is created.

### Inheritance in JavaScript

1.  **Prototype Inheritance**:

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.getDetails = function () {
  return `${this.name} - ${this.age}`;
};

function Student(name, age, grade) {
  Person.call(this, name, age);
  this.grade = grade;
}

Student.prototype = Object.create(Person.prototype);

Student.prototype.constructor = Student;

Student.prototype.getGrade = function () {
  return this.grade;
};

let student = new Student("Antony", 21, "A");

console.log(student.getDetails()); // Antony - 21

console.log(student.getGrade()); // A
```

2.  **Class Inheritance**:

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return `${this.name} - ${this.age}`;
  }
}

class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }

  getGrade() {
    return this.grade;
  }
}

let student = new Student("Antony", 21, "A");

console.log(student.getDetails()); // Antony - 21

console.log(student.getGrade()); // A
```

### Prototype Chaining and Constructor Stealing

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return `${this.name} - ${this.age}`;
  }
}

class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }

  getGrade() {
    return this.grade;
  }
}

let student = new Student("Antony", 21, "A");

console.log(student.getDetails()); // Antony - 21

console.log(student.getGrade()); // A
```

### Parasitic Inheritance

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return `${this.name} - ${this.age}`;
  }
}

class Temp extends Person {
  constructor() {
    super();
  }
}

class Student extends Temp {
  constructor(name, age, grade) {
    super();
    this.name = name;
    this.age = age;
    this.grade = grade;
  }

  getGrade() {
    return this.grade;
  }
}

let student = new Student("Antony", 21, "A");

console.log(student.getDetails()); // Antony - 21

console.log(student.getGrade()); // A
```

### Combination Inheritance

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return `${this.name} - ${this.age}`;
  }
}

class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }

  getGrade() {
    return this.grade;
  }
}

let student = new Student("Antony", 21, "A");

console.log(student.getDetails()); // Antony - 21

console.log(student.getGrade()); // A
```

### Parasitic Combination Inheritance

```javascript
// class

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return `${this.name} - ${this.age}`;
  }
}

class Temp extends Person {
  constructor() {
    super();
  }
}

class Student extends Temp {
  constructor(name, age, grade) {
    super();
    this.name = name;
    this.age = age;
    this.grade = grade;
  }

  getGrade() {
    return this.grade;
  }
}

let student = new Student("Antony", 21, "A");

console.log(student.getDetails()); // Antony - 21

console.log(student.getGrade()); // A
```

### S.O.L.I.D Principles

- Solid principles are the design principles that enable us to manage most of the software design problems. The SOLID principles are:

1.  **Single Responsibility Principle**:

    - A class should have one, and only one, reason to change. This means that a class should have only one job.

2.  **Open/Closed Principle**:

    - You should be able to extend a class's behavior, without modifying it.

3.  **Liskov Substitution Principle**:

    - Derived classes must be substitutable for their base classes. That a child class should be able to do what the parent class can do.

4.  **Interface Segregation Principle**:

    - Make fine-grained interfaces that are client-specific. General-purpose interfaces define methods that may not be used by all clients.

5.  **Dependency Inversion Principle**:

    - Depend on abstractions, not on concretions. High-level modules should not depend on low-level modules. Both should depend on abstractions.

### A Car Showroom application to demonstrate the SOLID principles

```javascript
const readline = require("readline");

// abstract class for payments
class PaymentGateway {
  constructor(user, username) {
    if (this.constructor === PaymentGateway) {
      throw new TypeError("Cannot instantiate abstract class");
    }
    this.user = user;
    this.username = username;
  }

  processPayment() {
    throw new Error("Method 'processPayment()' must be implemented.");
  }

  async loadingDots(message) {
    process.stdout.write(message);
    for (let i = 0; i < 3; i++) {
      await new Promise((resolve) => setTimeout(resolve, 500));
      process.stdout.write(". ");
    }
    process.stdout.write("\n");
  }
}

class PayPal extends PaymentGateway {
  constructor(user, username) {
    super(user, username);
  }

  processPayment(amount) {
    return new Promise(async (resolve, reject) => {
      await this.loadingDots("Processing payment ");
      if (this.user.walletAmount >= amount) {
        this.user.walletAmount -= amount;
        setTimeout(() => {
          process.stdout.write("\n");
          console.log(
            `Payment of $${amount} processed using PayPal account: ${this.username}`
          );
          resolve(true);
        }, 2500);
      } else {
        reject("No Balance in Paypal account");
      }
    });
  }
}

class GPay extends PaymentGateway {
  constructor(user, username) {
    super(user, username);
  }

  processPayment(amount) {
    return new Promise(async (resolve, reject) => {
      await this.loadingDots("Processing payment ");
      if (this.user.walletAmount >= amount) {
        this.user.walletAmount -= amount;
        setTimeout(() => {
          process.stdout.write("\n");
          console.log(
            `Payment of $${amount} processed using GPay account: ${this.username}`
          );
          resolve(true);
        }, 2000);
      } else {
        reject("No balance in GPay account");
      }
    });
  }
}

class Card extends PaymentGateway {
  constructor(user, username) {
    super(user, username);
  }

  async processPayment(amount) {
    return new Promise(async (resolve, reject) => {
      let cardNumber = await askUser("Enter card number(16 digits): ");
      cardNumber = cardNumber.trim().replace(/\s/g, "");
      const cvv = await askUser("Enter CVV: ");

      await this.loadingDots("Checking card validity ");
      if (cardNumber.length !== 16) {
        process.stdout.write(`Card is invalid\n`);
        reject("Invalid card number");
      } else {
        console.log(`Card is valid`);
        await this.loadingDots("Processing payment ");

        if (this.user.walletAmount >= amount) {
          this.user.walletAmount -= amount;
          await new Promise((resolve) => setTimeout(resolve, 2000));
          console.log(
            `Payment of ${amount} processed using card number:  ${cardNumber.slice(
              0,
              4
            )} ${cardNumber.slice(4, 8)} ${cardNumber.slice(
              8,
              12
            )} ${cardNumber.slice(12, 16)}`
          );
          resolve(true);
        } else {
          reject("No balance");
        }
      }
    });
  }
}

// Abstract class for user
class UserAbstract {
  constructor(name, walletAmount) {
    if (this.constructor === UserAbstract) {
      throw new TypeError("Cannot instantiate abstract class");
    }
    this.name = name;
    this.walletAmount = walletAmount;
  }

  getWallet() {
    throw new Error("Method 'getWallet()' must be implemented.");
  }

  setWallet() {
    throw new Error("Method 'setWallet()' must be implemented.");
  }

  buy() {
    throw new Error("Method 'buy()' must be implemented.");
  }

  viewUserInfo() {
    throw new Error("Method 'viewUserInfo()' must be implemented.");
  }

  viewCarCollection() {
    throw new Error("Method 'viewCarCollection()' must be implemented.");
  }
}

// Implementing the abstract class
class User extends UserAbstract {
  constructor(name, walletAmount) {
    super(name, walletAmount);
    this.carCollection = [];
  }

  getWallet() {
    console.log(`Your wallet balance: $${this.walletAmount}`);
  }

  setWallet(amount) {
    this.walletAmount = amount;
    console.log(`Your wallet balance is now: $${this.walletAmount}`);
  }

  async buy(car, paymentMethod) {
    if (car.quantity > 0) {
      console.log(
        `You are buying ${car.name} - ${car.brand} for $${car.price}`
      );
      console.log("Available Add-Ons for this car:");
      car.viewAddOns();

      const addOn = await askUser(
        "Enter add-ons numbers or press Enter to skip: "
      );

      const selectedAddOns = addOn
        .split(" ")
        .map((num) => parseInt(num.trim()) - 1)
        .filter((num) => num >= 0 && num < car.addOns.length);

      const carDecorator = new CarDecorator(car);
      selectedAddOns.forEach((index) => {
        carDecorator.addOn(car.addOns[index]);
      });

      const totalPrice = carDecorator.getTotal();
      const payment =
        paymentMethod === "paypal"
          ? new PayPal(this, this.name.replace(" ", ""))
          : paymentMethod === "gpay"
          ? new GPay(this, this.name.replace(" ", ""))
          : new Card(this, this.name.replace(" ", ""));

      try {
        const success = await payment.processPayment(totalPrice);
        if (success) {
          this.carCollection.push(carDecorator);
          car.quantity -= 1;
          console.log(
            `${this.name} bought ${car.name} ${
              selectedAddOns.length > 0 ? "with add-ons " : ""
            }for $${totalPrice}`
          );
          if (car.quantity === 0) {
            carObserver.notify(`${car.brand} ${car.name} is now sold out`);
          } else if (car.quantity <= 2) {
            carObserver.notify(`${car.brand} ${car.name} is now low in stock`);
          }
          this.getWallet();
          return true;
        }
      } catch (error) {
        console.log(`Payment failed: ${error}`);
        console.log(`Current Balance: $${this.walletAmount}`);
      }
    } else {
      console.log(`${car.name} is out of stock.`);
    }
    return false;
  }

  viewUserInfo() {
    console.log(
      `${this.name} has $${this.walletAmount} remaining and the following cars:`
    );
    this.viewCarCollection();
  }

  viewCarCollection() {
    if (this.carCollection.length > 0) {
      this.carCollection.forEach((car, index) => {
        console.log(`${index + 1}. ${car.getCarInfo()}`);
        car.viewAddOns();
      });
    } else {
      console.log(`${this.name} has no cars in collection`);
    }
  }
}

// Factory pattern for user class
class UserFactory {
  constructor() {
    this.users = [];
  }

  createUser(userData) {
    const user = new User(userData.name, userData.walletAmount);
    this.users.push(user);
    return user;
  }

  viewUsers() {
    console.log("All Users:");
    this.users.forEach((user, index) => {
      console.log(`${index + 1}. ${user.name}`);
    });
  }
}

class Car {
  constructor(brand, name, price, quantity, addOns) {
    this.brand = brand;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.addOns = addOns ? addOns : [];
  }

  getPrice() {
    return this.price;
  }

  getCarInfo() {
    return `${this.brand} ${this.name} - $${this.price}`;
  }

  viewAddOns() {
    if (this.addOns.length > 0) {
      this.addOns.forEach((addOn, index) => {
        console.log(`     ${index + 1}. ${addOn.name} - $${addOn.price}`);
      });
    } else {
      console.log("   No Add-Ons available");
    }
  }
}

// factory pattern for car class
class CarFactory {
  constructor() {
    this.cars = [];
  }

  // createCar(carData) {
  //   const car = new Car(
  //     carData.brand,
  //     carData.name,
  //     carData.price,
  //     carData.quantity,
  //     carData.addOns
  //   );
  //   this.cars.push(car);
  //   return car;
  // }

  createCar(carData) {
    const car = new CarBuilder()
      .setBrand(carData.brand)
      .setName(carData.name)
      .setPrice(carData.price)
      .setQuantity(carData.quantity)
      .setAddOns(carData.addOns)
      .build();
    this.cars.push(car);
    return car;
  }

  viewCars() {
    console.log("Cars Available:");
    this.cars.forEach((car, index) => {
      console.log(
        `${index + 1}. ${car.name} - $${car.getPrice()} - ${
          car.quantity
        } available`
      );
    });
  }

  addStock(car, quantity) {
    car.quantity += Number(quantity);
    console.log(`${quantity} ${car.name} added to stock`);
    console.log(`Total ${car.name} in stock: ${car.quantity}`);
    carObserver.notify(`${car.brand} ${car.name} stock updated by ${quantity}`);
  }
}

// builder pattern for car
class CarBuilder {
  constructor() {
    this.car = new Car();
  }

  setBrand(brand) {
    this.car.brand = brand;
    return this;
  }

  setName(name) {
    this.car.name = name;
    return this;
  }

  setPrice(price) {
    this.car.price = price;
    return this;
  }

  setQuantity(quantity) {
    this.car.quantity = quantity;
    return this;
  }

  setAddOns(addOns) {
    this.car.addOns = addOns;
    return this;
  }

  build() {
    return this.car;
  }
}

// Decorator pattern for car
class CarDecorator extends Car {
  constructor(car) {
    super(car.brand, car.name, car.price, car.quantity, car.addOns);
    this.car = car;
    this.addOns = [];
    this.total = car.getPrice();
  }

  addOn(addOn) {
    this.addOns.push(addOn);
    this.total += addOn.price;
    return this.total;
  }

  getTotal() {
    return this.total;
  }

  getCarInfo() {
    return `${this.car.getCarInfo()}`;
  }

  viewAddOns() {
    if (this.addOns.length > 0) {
      console.log("   Add-Ons:");
      this.addOns.forEach((addOn, index) => {
        console.log(`     ${index + 1}. ${addOn.name} - $${addOn.price}`);
      });
    } else {
      console.log("   No Add-Ons");
    }
  }

  getPrice() {
    return this.total;
  }
}

// Observer pattern for car and its a singleton pattern
class CarObserver {
  constructor() {
    if (CarObserver.instance) {
      return CarObserver.instance;
    }
    this.users = [];
    CarObserver.instance = this;
  }

  static getInstance() {
    if (!CarObserver.instance) {
      CarObserver.instance = new CarObserver();
    }
    return CarObserver.instance;
  }
  subscribe(user) {
    if (this.users.includes(user)) {
      console.log(`${user.name} is already subscribed to car updates`);
      return;
    }
    this.users.push(user);
    console.log(`${user.name} subscribed to car updates`);
  }

  unsubscribe(user) {
    if (!this.users.includes(user)) {
      console.log(`${user.name} is not subscribed to car updates`);
      return;
    }
    this.users = this.users.filter((u) => u !== user);
    console.log(`${user.name} unsubscribed from car updates`);
  }

  notify(message) {
    this.users.forEach((user) => {
      console.log(`${user.name}, ${message}`);
    });
  }

  viewSubscribers() {
    console.log("Subscribers:");
    this.users.forEach((user, index) => {
      console.log(`${index + 1}. ${user.name}`);
    });
  }
}

const carObserver = new CarObserver();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askUser = (question) =>
  new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });

async function main() {
  console.log("Welcome to Antony's Car Showroom");

  const carData = [
    {
      brand: "Koenigsegg",
      name: "Jesko",
      price: 1999999,
      quantity: 4,
      addOns: [
        { name: "Neon Lights", price: 1200 },
        { name: "Insurance", price: 100000 },
      ],
    },
    {
      brand: "Mercedes",
      name: "Maybach",
      price: 823341,
      quantity: 2,
      addOns: [
        { name: "Insurance", price: 50000 },
        { name: "Bulletproof Glass", price: 25000 },
        { name: "Tinted Windows", price: 5000 },
        { name: "Titanium Rims", price: 10000 },
      ],
    },
    {
      brand: "Bugatti",
      name: "Chiron",
      price: 3034300,
      quantity: 3,
      addOns: [
        { name: "Alloy Wheels", price: 15000 },
        { name: "Insurance", price: 50000 },
      ],
    },
    {
      brand: "Lamborghini",
      name: "Aventador",
      price: 421345,
      quantity: 10,
      addOns: [
        { name: "Insurance", price: 50000 },
        { name: "Custom Horns", price: 5000 },
      ],
    },
    {
      brand: "Koenigsegg",
      name: "Vegera",
      price: 3423341,
      quantity: 3,
      addOns: [
        { name: "Matte Finish", price: 20000 },
        { name: "Insurance", price: 50000 },
      ],
    },
    {
      brand: "Ferrari",
      name: "F8",
      price: 300000,
      quantity: 1,
      addOns: [
        { name: "Racing Tires", price: 10000 },
        { name: "Insurance", price: 50000 },
      ],
    },
  ];

  const userData = [
    { name: "Antony Jude", walletAmount: 202452390 },
    { name: "Jude Shaman", walletAmount: 143986000 },
    { name: "Shaman", walletAmount: 900342300 },
  ];

  const carFactory = new CarFactory();
  const userFactory = new UserFactory();

  const cars = carData.map((data) => carFactory.createCar(data));
  const users = userData.map((data) => userFactory.createUser(data));

  users.forEach((user) => carObserver.subscribe(user));

  const viewUser = async () => {
    while (true) {
      userFactory.viewUsers();
      const userNumber = await askUser("Enter user number to view: ");
      users[userNumber - 1].viewUserInfo();

      const choice = await askUser(
        "Do you want to view another user? (yes/no): "
      );
      if (choice.toLowerCase() === "no" || choice.toLowerCase() === "n") {
        break;
      }
    }
  };

  const buyCar = async (userNumber) => {
    while (true) {
      carFactory.viewCars();
      process.stdout.write(
        `Your balance: $${users[userNumber - 1].walletAmount}\n`
      );
      const carNumber = await askUser("Enter car number to buy: ");
      const paymentMethod = await askUser(
        "Select payment method (PayPal/GPay/Card): "
      );
      if (
        paymentMethod.trim().toLowerCase() !== "paypal" &&
        paymentMethod.trim().toLowerCase() !== "gpay" &&
        paymentMethod.trim().toLowerCase() !== "card"
      ) {
        console.log("Invalid payment method");
        continue;
      }
      const res = await users[userNumber - 1].buy(
        cars[carNumber - 1],
        paymentMethod.trim().toLowerCase()
      );

      if (res) {
        const choice = await askUser(
          "Do you want to buy another car? (yes/no): "
        );
        if (choice.toLowerCase() === "no" || choice.toLowerCase() === "n") {
          break;
        }
      }
    }
  };

  const addStock = async () => {
    while (true) {
      carFactory.viewCars();
      const carNumber = await askUser("Enter car number to add stock: ");
      const carQuantity = await askUser("Enter quantity: ");
      carFactory.addStock(cars[carNumber - 1], carQuantity);

      const choice = await askUser(
        "Do you want to add stock to another car? (yes/no): "
      );
      if (choice.toLowerCase() === "no" || choice.toLowerCase() === "n") {
        break;
      }
    }
  };

  const carSubscribe = async () => {
    const userNumber = await askUser("Enter user number to subscribe: ");
    carObserver.subscribe(users[userNumber - 1]);
  };

  const carUnsubscribe = async () => {
    const userNumber = await askUser("Enter user number to unsubscribe: ");
    carObserver.unsubscribe(users[userNumber - 1]);
  };

  while (true) {
    process.stdout.write("\n");
    console.log("1. View User");
    console.log("2. Buy Car");
    console.log("3. Add Car Stock");
    console.log("4. Subscribe to Car Updates");
    console.log("5. Unsubscribe from Car Updates");
    console.log("6. Exit");
    const option = await askUser("Enter an option: ");
    switch (option) {
      case "1":
        await viewUser();
        break;
      case "2":
        userFactory.viewUsers();
        const userNumber = await askUser(
          "Enter the user number to buy a car: "
        );
        await buyCar(userNumber);
        break;
      case "3":
        await addStock();
        break;
      case "4":
        carObserver.viewSubscribers();
        await carSubscribe();
        break;
      case "5":
        carObserver.viewSubscribers();
        await carUnsubscribe();
        break;
      case "6":
        console.log("Thank you for using Antony's Car Showroom");
        rl.close();
        return;
      default:
        console.log("Invalid option");
    }
  }
}

main();
```

> [!IMPORTANT]
>
> ### How this application demonstrates the SOLID principles:
>
> 1. **Single Responsibility Principle**:
>
>    - Each class has a single responsibility. For example, the `User` class is responsible for managing user data, the `Car` class is responsible for managing car data, the `PaymentGateway` class is responsible for processing payments, and the `CarObserver` class is responsible for managing car subscriptions.
>
> 2. **Open/Closed Principle**:
>
>    - The classes are open for extension but closed for modification. For example, the `Car` class can be extended to add new features without modifying the existing code, the `PaymentGateway` class can be extended to add new payment methods without modifying the existing code, and the `User` class can be extended to add new user features without modifying the existing code.
>
> 3. **Liskov Substitution Principle**:
>
>    - The `User` class can be substituted with any subclass of `User` without affecting the behavior of the application. For example, a `PremiumUser` class can be created that extends the `User` class and provides additional features without affecting the existing functionality. Similarly, the `Car` class can be substituted with any subclass of `Car` without affecting the behavior of the application. In this way, the child classes can be used interchangeably with the parent classes without changing the application logic.
>
> 4. **Interface Segregation Principle**:
>
>    - The `User` class provides fine-grained interfaces that are client-specific. For example, the `User` class provides methods like `getWallet()`, `setWallet()`, `buy()`, `viewUserInfo()`, and `viewCarCollection()` that are specific to the user. Similarly, the `PaymentGateway` class provides methods like `processPayment()` and `loadingDots()` that are specific to payment processing. And they are implemented in the `User` and `PaymentGateway` classes, respectively.
>
> 5. **Dependency Inversion Principle**:
>
>    - The classes depend on abstractions, not on concretions. For example, the `User` class depends on the `PaymentGateway` abstract class to process payments, allowing different payment methods like PayPal, GPay, and Card to be used without changing the user class. Similarly, the `Car` class depends on the `CarObserver` abstract class to manage car subscriptions, allowing users to subscribe to car updates without changing the car class.
>
> ### The application uses the following design patterns:
>
> 1. **Factory Pattern**:
>
>    - The `UserFactory` and `CarFactory` classes use the factory pattern to create instances of the `User` and `Car` classes, respectively. This allows the application to create objects without specifying the exact class of object that will be created.
>
> 2. **Builder Pattern**:
>
>    - The `CarBuilder` class uses the builder pattern to construct instances of the `Car` class with a flexible and readable syntax. This allows the application to create complex objects step by step and customize their properties.
>
> 3. **Decorator Pattern**:
>
>    - The `CarDecorator` class uses the decorator pattern to add additional features to instances of the `Car` class. This allows the application to extend the functionality of cars by adding add-ons and calculating the total price of the car with add-ons.
>
> 4. **Observer Pattern**:
>
>    - The `CarObserver` class uses the observer pattern to manage car subscriptions and notify users about car updates. This allows the application to notify users when a car is sold out or low in stock and keep track of subscribers who are interested in car updates.
>
> 5. **Singleton Pattern**:
>
>    - The `CarObserver` class uses the singleton pattern to ensure that only one instance of the class is created. This allows the application to have a single point of access to the `CarObserver` instance and prevent multiple instances from being created.
>
> 6. **Abstract Class Pattern**:
>
>    - The `PaymentGateway` and `UserAbstract` classes use the abstract class pattern to define abstract methods that must be implemented by subclasses. This allows the application to enforce a common interface for payment gateways and users and provide a template for implementing specific functionality.
>
> 7. **Template Method Pattern**:
>
>    - The `PaymentGateway` class uses the template method pattern to define a skeleton of an algorithm in the `processPayment()` method and allow subclasses to override specific steps. This allows the application to provide a common payment processing flow while allowing subclasses to customize payment methods.
>
> 8. **Strategy Pattern**:
>
>    - The `PaymentGateway` class uses the strategy pattern to define a family of payment algorithms and make them interchangeable. This allows the application to switch between different payment methods like PayPal, GPay, and Card without changing the payment processing logic.
>
> 9. **State Pattern**:
>
>    - The `PaymentGateway` class uses the state pattern to define different states of payment processing like loading, processing, and error. This allows the application to change the behavior of payment processing based on the current state and provide a clear separation of concerns.
>
> 10. **Command Pattern**:
>
>     - The `main()` function uses the command pattern to implement a menu-driven interface for interacting with the application. This allows the application to provide a set of commands that users can choose from and execute specific actions based on user input.
>
> 11. **Constructor Pattern**:
>
>     - The `Car` and `User` classes use the constructor pattern to initialize object properties and provide a simple and consistent way to create instances of cars and users. This allows the application to create objects with predefined properties and behavior.
