const fs = require("fs");
const s = +fs.readFileSync("dev/stdin").toString().trim();

let sum = 0;
let num = 0;

while (sum <= s) {
  sum += ++num;
}

console.log(num - 1);
