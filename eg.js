function change(person) {
  person = { ...person, name: "Jude" };
  console.log(person); // { name: 'Jude', age: 21 }
}

let person = { name: "Antony", age: 21 };

change(person);

console.log(person); // { name: 'Antony', age: 21 }

let num = 10;

let str = "Hello";

let bool = true;

let arr = [1, 2, 3];

// let a;

let b = null;

// console.log(
//   typeof num,
//   typeof str,
//   typeof bool,
//   typeof arr,
//   typeof person,
//   typeof a,
//   typeof b
// ); // number string boolean object object undefined object

let a = 10;

function outer() {
  let b = 20;

  this.inner = function () {
    let c = 30;

    console.log(a, b, c);
    console.log(this);
  };
}
