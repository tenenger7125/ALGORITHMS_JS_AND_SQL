const fs = require("fs");
const [n, ...inputs] = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

const dots = inputs.map((input) => input.split(" ").map(Number));

const result = dots
  .sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]))
  .map((dot) => dot.join(" "));

console.log(result.join("\n"));
