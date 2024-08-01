// Observer pattern acts like an event listener that helps us to perform tasks when the state of an object changes.

// It helps in maintaining track of the state of the application

class Observer {
  constructor() {
    this.observers = [];
  }

  addObserver(user) {
    this.observers.push(user);
  }

  removeObserver(user) {
    this.observers = this.observers.filter((u) => user !== u);
  }

  notify() {
    this.observers.forEach((user) => console.log(`Hello ${user.name}`));
  }
}

class User {
  constructor(name) {
    this.name = name;
  }
}

let user1 = new User("Antony");
let user2 = new User("Jude");
let user3 = new User("Shaman");

let obs = new Observer();

[user1, user2, user3].map((user) => obs.addObserver(user));

// obs.removeObserver(user2);
obs.notify();
