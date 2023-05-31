const fs = require("fs");
const [a, b] = fs.readFileSync("dev/stdin").toString().trim().split(" ");
let target = b;
let count = 0;

while (+a <= +target && a !== target) {
  target =
    target.at(-1) === "1" ? target.slice(0, -1) : (target / 2).toString();
  count++;
}

console.log(a === target ? count + 1 : -1);
