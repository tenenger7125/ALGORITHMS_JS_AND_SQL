const fs = require("fs");
const [n, ...inputs] = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

const arr = inputs
  .map((input) => input.split(" "))
  .map(([age, name]) => [+age, name]);

const result = arr
  .sort((a, b) => a[0] - b[0])
  .map((el) => el.join(" "))
  .join("\n");

console.log(result);
