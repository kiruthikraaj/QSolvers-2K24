function reverseString(str) {
  const rev = str.split("").reverse().join("");
  return rev;
}

let i = 0;
const str = "aabcbdeod";
const n = str.length;
let len = 0;
let count = 0;
while (i < n) {
  for (let j = i; j < n; j++) {
    console.log(str[j], str[i]);
    if (str[j] == str[i]) {
      let str2 = str.substring(i, j + 1);
      if (reverseString(str2) === str2) {
        len = Math.max(len, str2.length);
        // console.log(reverseString(str2), str2);
        count++;
      }
    }
    // console.log(str[j]);
  }
  i++;
}

console.log(len);
