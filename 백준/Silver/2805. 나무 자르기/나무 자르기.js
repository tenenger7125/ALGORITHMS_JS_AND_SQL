const fs = require("fs");
const inputs = fs.readFileSync("dev/stdin").toString().trim().split("\n");

const [n, m] = inputs[0].split(" ").map(Number);
const trees = inputs[1].split(" ").map(Number);
let [start, end] = [0, Math.max(...trees)];
let height = 0;

while (start <= end) {
  const mid = Math.floor((start + end) / 2);
  const sum = trees.reduce((acc, cur) => acc + Math.max(0, cur - mid), 0);

  if (sum >= m) {
    height = mid;
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}

console.log(height);
