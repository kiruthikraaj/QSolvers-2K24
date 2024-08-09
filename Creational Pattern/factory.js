
class Vehicle {
    constructor(name) {
        this.name = name;
    }

    getType() {
        return 'Generic Vehicle';
    }
}

class Car extends Vehicle {
    constructor(name) {
        super(name);
    }

    getType() {
        return 'Car';
    }
}

class Bike extends Vehicle {
    constructor(name) {
        super(name);
    }

    getType() {
        return 'Bike';
    }
}

class VehicleFactory {
    static createVehicle(type, name) {
        switch (type) {
            case 'car':
                return new Car(name);
            case 'bike':
                return new Bike(name);
            default:
                throw new Error('Invalid vehicle type');
        }
    }
}

try {
    const myCar = VehicleFactory.createVehicle('car', 'Toyota');
    console.log(`${myCar.name} is a ${myCar.getType()}`); 
    const myBike = VehicleFactory.createVehicle('bike', 'Harley');
    console.log(`${myBike.name} is a ${myBike.getType()}`); 

} catch (error) {
    console.error(error.message); 
}
