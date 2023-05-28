const fs = require("fs");
const inputs = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

console.log(inputs.sort((a, b) => a - b).join(" "));
