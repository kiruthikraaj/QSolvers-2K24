// Command Pattern helps in encapsulation of requests as objects.
// 1. Invoker
// 2. Receiver

// The user does not need to know the operations performed to execute the command request.

class TV {
  constructor() {
    this.state = false;
  }
  perform() {
    if (!this.state) {
      console.log("TV is On");
    } else {
      console.log("TV is off");
    }
    this.state = !this.state;
  }
}

class Remote {
  pressButton() {
    throw new Error("This is an interface");
  }
}

class RemoteController extends Remote {
  constructor(command) {
    super();
    this.command = command;
  }

  pressButton() {
    this.command.perform();
  }
}

let remote = new RemoteController(new TV());

remote.pressButton();
remote.pressButton();
