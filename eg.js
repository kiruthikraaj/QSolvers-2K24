// function getSize(obj) {
//   return new TextEncoder().encode(JSON.stringify(obj)).length;
// }

// const name = "abc";
// console.log(getSize(name)); // 5

// const num = 123;
// console.log(getSize(num)); // 3

// const bool = true;
// console.log(getSize(bool)); // 4

// const obj = { name: "abc" };
// console.log(getSize(obj)); // 14

// const arr = [1, 2, 3];
// console.log(getSize(arr)); // 7

// const func = function () {
//   return "abc";
// };

// console.log(getSize(func)); // 0

// const n = null;
// console.log(getSize(n)); // 4

// const u = undefined;
// console.log(getSize(u)); // 0

// Constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

let person = { name: "Antony" };

let person2 = person;

// if the person is set to null, even though the reference of person is lost, the object is still referenced by person2
person = null;

console.log(person2); // Output: { name: 'Antony' }
