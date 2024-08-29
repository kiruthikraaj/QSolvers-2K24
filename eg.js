const express = require("express");
const app = express();

let arr = [];

app.get("/", (req, res) => {
  res.status(200).send("Hello");
});

app.listen(3000, () => {
  console.log(`Server running`);
});

function fn() {
  let i = 0;
  while (i < 10000) {
    let temp = new Array(100).fill("hello");
    arr.push(temp);
    console.log(arr);
    i++;
  }
}
fn();
