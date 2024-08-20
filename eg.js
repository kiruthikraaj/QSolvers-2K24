function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function calculate(a, b) {
  const sum = add(a, b);
  const product = multiply(a, b);
  return { sum, product };
}

const a = 5;
const b = 10;
const result = calculate(a, b);

console.log(result.sum);
console.log(result.product);
