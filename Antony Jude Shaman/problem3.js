function nextSmallest(arr) {
  const n = arr.length;
  let res = [];

  for (let i = 0; i < n; i++) {
    let found = false;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[i]) {
        res.push(arr[j]);
        // console.log(arr[j]);
        found = true;
        break;
      }
    }
    if (!found) {
      res.push(-1);
      // console.log(-1);
    }
  }

  return res;
}

const arr = [10, 7, 9, 3, 2, 1, 15];
const res = nextSmallest(arr);
console.log(res.join(" "));
