const fs = require("fs");
const [n, ...cases] = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

let str = "";

for (let i = 0; i < n; i++) {
  const [a, b] = cases[i].split(" ").map(Number);
  str += a + b + "\n";
}

console.log(str.trim());
