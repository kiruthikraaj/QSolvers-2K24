// Template pattern defines the skeleton of an algorithm in a superclass, allowing subclasses to define specific steps.

// The pattern promotes code reuse and consistency across similar processes while allowing customization for individual cases.

class Car {
  addPaint() {
    console.log("The car is painted");
  }
  addDoors() {
    console.log("Doors are attached to the car");
  }
  addWheels() {
    console.log("Wheels are fixed to the car");
  }

  addLogo() {
    throw new Error("Override this");
  }

  buildCar() {
    console.log("\nCar is being built");
    this.addPaint();
    this.addDoors();
    this.addWheels();
    this.addLogo();
  }
}

class Ferrari extends Car {
  addLogo() {
    this.addDoors();
    console.log("Ferrari Logo is added");
  }
}

class Koenigsegg extends Car {
  addLogo() {
    console.log("Koenigsegg Logo is added");
  }
}

let ferrari = new Ferrari();
let koenigsegg = new Koenigsegg();

ferrari.buildCar();
koenigsegg.buildCar();
