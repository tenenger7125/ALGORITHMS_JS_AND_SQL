const fs = require("fs");
const [n, ...string_array] = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

for (let i = 0; i < n; i++) {
  console.log(`${i + 1}. ${string_array[i]}`);
}
