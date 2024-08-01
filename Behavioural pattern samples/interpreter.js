// Interpreter pattern  defines a representation for its grammar along with an interpreter that uses the representation to interpret sentences in the language.

// The interpreter pattern is not suitable and efficient for large complex grammars or expressions.

class Expression {
  interpret() {
    throw new Error("This is an interface");
  }
}

class NumberExpression extends Expression {
  constructor(variable) {
    super();
    this.variable = variable;
  }

  interpret() {
    return this.variable;
  }
}

class OperatorExpression extends Expression {
  constructor(left, operator, right) {
    super();
    this.left = left;
    this.operator = operator;
    this.right = right;
  }

  interpret() {
    const leftValue = this.left.interpret();
    const rightValue = this.right.interpret();

    switch (this.operator) {
      case "+":
        return leftValue + rightValue;
      case "*":
        return leftValue * rightValue;
      default:
        console.log("Invalid");
    }
  }
}

let operatorExpression = new OperatorExpression(
  new NumberExpression(5),
  "+",
  new OperatorExpression(new NumberExpression(3), "*", new NumberExpression(4))
);

function evaluate(obj) {
  return obj.interpret();
}

console.log(evaluate(operatorExpression));
