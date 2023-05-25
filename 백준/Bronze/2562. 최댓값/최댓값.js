const fs = require("fs");
const numbers = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);
const max = Math.max(...numbers);

console.log(max, numbers.indexOf(max) + 1);
