const fs = require("fs");
const [n, ...inputs] = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

console.log(inputs.sort((a, b) => a - b).join("\n"));
