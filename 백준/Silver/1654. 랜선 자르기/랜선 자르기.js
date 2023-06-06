const fs = require("fs");
const [input, ...inputs] = fs.readFileSync("dev/stdin").toString().trim().split("\n");

const [k, n] = input.split(" ").map(Number);
const lines = inputs.map(Number);
let [start, end] = [1, Math.max(...lines)];
let length = 0;

while (start <= end) {
  const mid = Math.floor((start + end) / 2);
  const count = lines.reduce((acc, cur) => acc + Math.floor(cur / mid), 0);

  if (count >= n) {
    length = mid;
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}

console.log(length);
