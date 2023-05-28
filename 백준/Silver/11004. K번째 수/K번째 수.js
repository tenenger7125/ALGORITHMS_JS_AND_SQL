const fs = require("fs");
const [line, inputs] = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [n, k] = line.split(" ");
const arr = inputs.split(" ").map(Number).sort((a, b) => a - b).map(Number)

console.log(arr[k - 1]);
