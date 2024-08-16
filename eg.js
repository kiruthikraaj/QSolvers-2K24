const fs = require("fs");

setTimeout(() => {
  console.log("hello");
}, 0);

fs.readFile(__filename, () => {
  console.log("File");
});
