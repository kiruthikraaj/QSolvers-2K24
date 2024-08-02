let doc = {
  a: 1,
  b: { c: 2, d: 6 },
  e: 4,
  f: { g: 5, h: { j: 6, k: 8 } },
  i: 9,
  j: 10,
};

// Solution 1 brute force Time complexity O(n) and space complexity O(1)
function sum(obj) {
  let result = 0;

  for (let key in obj) {
    if (typeof obj[key] === "object") {
      for (let key2 in obj[key]) {
        if (typeof obj[key][key2] === "object") {
          for (let key3 in obj[key][key2]) {
            if (
              typeof obj[key][key2][key3] === "number" &&
              obj[key][key2][key3] % 2 === 0
            ) {
              result += obj[key][key2][key3];
            }
          }
        } else if (
          typeof obj[key][key2] === "number" &&
          obj[key][key2] % 2 === 0
        ) {
          result += obj[key][key2];
        }
      }
    } else if (typeof obj[key] === "number" && obj[key] % 2 === 0) {
      result += obj[key];
    }
  }

  return result;
}

// Solution 2 using stack Time complexity O(n) and space complexity O(n)
function sum(obj) {
  let result = 0;
  let stack = [obj];
  while (stack.length) {
    let curr = stack.pop();
    if (typeof curr === "object") {
      for (let key in curr) {
        stack.push(curr[key]);
      }
    } else if (curr % 2 === 0) {
      result += curr;
    }
  }
  return result;
}

// Solution 3 using recursion Time complexity O(n) and space complexity O(n)
function sum(obj) {
  let result = 0;
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      result += sum(obj[key]);
    } else if (obj[key] % 2 === 0) {
      result += obj[key];
    }
  }
  return result;
}

// Solution 4 using JSON.stringify Time complexity O(n) and space complexity O(n)
function sum(obj) {
  let result = 0;
  let str = JSON.stringify(obj);
  let arr = str.match(/\d+/g);
  arr.forEach((num) => {
    if (num % 2 === 0) {
      result += parseInt(num);
    }
  });
  return result;
}
