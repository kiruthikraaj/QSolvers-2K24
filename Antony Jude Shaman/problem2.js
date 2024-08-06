// Solution 1: Works only for special characters defined in the if statement
let string = "A man, in the boat says ; I see 1-2-3 in the sky";
string = string.split("");

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

// Solution 2: Works for all the special characters under the ASCII range and also for the extended ASCII characters
let string2 = "A man, in the boat says ; I see 1-2-3 in the sky";
string = string2.split("");

i = 0;
n = string.length - 1;

function check(char) {
  const code = char.charCodeAt(0);
  return (
    // 48 - 57 = 0-9
    // 65 - 90 = A-Z
    // 97 - 122 = a-z
    // The fn excludes all the alphabets and numbers to check for special characters
    (code >= 32 && code <= 47) ||
    (code >= 58 && code <= 64) ||
    (code >= 91 && code <= 96) ||
    (code >= 123 && code <= 126) ||
    (code >= 128 && code <= 255)
  );
}

while (i < n) {
  if (check(string[i])) {
    i++;
  } else if (check(string[n])) {
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
