const fs = require("fs");
const numbers = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const set = new Set(numbers.map((number) => number % 42));

console.log([...set].length);
