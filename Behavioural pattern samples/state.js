// State pattern allows an object to change its behaviour when the internal state of the class changes.

// Behavior is defined by different state classes, each encapsulating specific actions for that state.

class State {
  handleRequest() {
    throw new Error("This method should be overridden!");
  }
}

class Red extends State {
  constructor(trafficLight) {
    super();
    this.trafficLight = trafficLight;
  }

  handleRequest() {
    console.log("Red Light");
    this.trafficLight.setState(this.trafficLight.green);
  }
}

class Green extends State {
  constructor(trafficLight) {
    super();
    this.trafficLight = trafficLight;
  }

  handleRequest() {
    console.log("Green Light");
    this.trafficLight.setState(this.trafficLight.yellow);
  }
}

class Yellow extends State {
  constructor(trafficLight) {
    super();
    this.trafficLight = trafficLight;
  }

  handleRequest() {
    console.log("Yellow Light");
    this.trafficLight.setState(this.trafficLight.red);
  }
}

class TrafficLight {
  constructor() {
    this.red = new Red(this);
    this.green = new Green(this);
    this.yellow = new Yellow(this);

    this.state = this.red;
  }

  setState(state) {
    this.state = state;
  }

  changeLight() {
    this.state.handleRequest();
  }
}

const trafficLight = new TrafficLight();

trafficLight.changeLight();
trafficLight.changeLight();
trafficLight.changeLight();
trafficLight.changeLight();
