// Mediator pattern helps in maintaining a centralized system to establish and maintain communication between the objects.

// The objects interact with each other through a mediator object

class Channel {
  constructor(user) {
    this.user = user;
    this.messages = [];
  }

  sendMessage(message) {
    let msg = `From ${this.user.name}: ` + message;
    console.log(msg);
    this.messages.push(message);
  }

  viewAllMessages() {
    console.log("\n");
    console.log(`All messages from ${this.user.name}`);
    this.messages.forEach((msg) => console.log(msg));
  }
}

class User {
  constructor(name) {
    this.name = name;
  }
}

let user1 = new Channel(new User("Antony"));
let user2 = new Channel(new User("Jude"));

user1.sendMessage("This is for Jude");
user2.sendMessage("This is for Antony");
user1.sendMessage("Hello Jude");

user1.viewAllMessages();
user2.viewAllMessages();
