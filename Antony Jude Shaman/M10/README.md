## Milestone - 10

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
