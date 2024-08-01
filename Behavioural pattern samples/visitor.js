// Visitor Pattern helps performing various kinds of operations by visiting classes and not modifying it.

// By using the visitor, you can add new operations or functionalities to the objects without modifying their existing code.

class House {
  constructor() {
    if (new.target === House) {
      throw new Error("This is an abstract class");
    }
  }
  accept() {
    throw new Error("accept() must be implemented");
  }
}

class AntonyHouse extends House {
  constructor() {
    super();
    this.name = "Antony";
  }
  accept(visitor) {
    return visitor.visitAntony(this);
  }
}

class JudeHouse extends House {
  constructor() {
    super();
    this.name = "Jude";
  }
  accept(visitor) {
    return visitor.visitJude(this);
  }
}

class Visitor {
  visitAntony() {
    throw new Error("This is an interface");
  }

  visitJude() {
    throw new Error("This is an interface");
  }
}

class HouseVisitor extends Visitor {
  visitAntony(house) {
    return `Visited ${house.name} House`;
  }

  visitJude() {
    return `Visited ${house.name} House`;
  }
}

let house = new AntonyHouse();

let house2 = new JudeHouse();

let houseVisitor = new HouseVisitor();

console.log(house.accept(houseVisitor));

console.log(house2.accept(houseVisitor));
