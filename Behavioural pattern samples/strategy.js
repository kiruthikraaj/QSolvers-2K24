// Strategy pattern lets us use different strategies(algorithms) for different scenarios.

// It helps in maintaining a family of algorithms and use only the required algorithm based on conditions

class Strategy {
  constructor(strategy) {
    this.strategy = strategy;
  }

  perform() {
    this.strategy.perform();
  }
}

class AddStrategy {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  perform() {
    console.log(this.a + this.b);
  }
}

class SubStrategy {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  perform() {
    console.log(this.a - this.b);
  }
}

let strategy = new Strategy(new AddStrategy(20, 10));
let strategy2 = new Strategy(new SubStrategy(20, 10));

strategy.perform();
strategy2.perform();
