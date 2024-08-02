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
