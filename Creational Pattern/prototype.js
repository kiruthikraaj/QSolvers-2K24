class Vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    start() {
        console.log(`Starting ${this.make} ${this.model}`);
    }
}

const prototypeVehicle = new Vehicle('Generic Make', 'Generic Model');

class Car {
    constructor(make, model) {
       
        this.vehicle = Object.create(prototypeVehicle);
     
        this.vehicle.make = make;
        this.vehicle.model = model;
    }

    start() {
     
        this.vehicle.start();
    }
}


const myCar = new Car('Toyota', 'Corolla');
myCar.start(); 
console.log(`Starting ${prototypeVehicle.make} ${prototypeVehicle.model}`);
