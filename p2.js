let string = "A man, in the boat says ; I see 1-2-3 in the sky";
string = string.split("");
let special = [",", ";"];

console.log(string.includes(special) ? true : false);

let i = 0;
let n = string.length - 1;

while (i < n) {
  console.log(string[i], string[n]);
  if (
    string[i] === " " ||
    string[i] === "," ||
    string[i] === ";" ||
    string[i] === "-"
  ) {
    i++;
  } else if (
    string[n] === " " ||
    string[n] === "," ||
    string[n] === ";" ||
    string[n] === "-"
  ) {
    n--;
  } else {
    let temp = string[i];
    string[i] = string[n];
    string[n] = temp;
    i++;
    n--;
  }
}
console.log(string.join(""));
