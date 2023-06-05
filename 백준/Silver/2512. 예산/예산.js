const fs = require("fs");
const inputs = fs.readFileSync("dev/stdin").toString().trim().split("\n");

const n = +inputs[0];
const budgets = inputs[1].split(" ").map(Number);
const m = +inputs[2];

let start = 1;
let end = Math.max(...budgets);
let answer = 0;

while (start <= end) {
  const mid = Math.floor((start + end) / 2);
  const sum = budgets.reduce((acc, cur) => acc + Math.min(cur, mid), 0);

  if (sum <= m) {
    answer = mid;
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}

console.log(answer);
