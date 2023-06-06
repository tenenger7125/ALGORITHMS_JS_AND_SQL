const fs = require("fs");
const inputs = fs.readFileSync("dev/stdin").toString().trim().split("\n");

const n = +inputs[0];
const cards = inputs[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
const m = +inputs[2];
const targets = inputs[3].split(" ").map(Number);

function lowerBound(arr, target, start, end) {
  while (start < end) {
    const mid = Math.floor((start + end) / 2);
    if (arr[mid] >= target) end = mid;
    else start = mid + 1;
  }
  return end;
}

function upperBound(arr, target, start, end) {
  while (start < end) {
    const mid = Math.floor((start + end) / 2);
    if (arr[mid] > target) end = mid;
    else start = mid + 1;
  }
  return end;
}

let answer = "";
for (let i = 0; i < m; i++) {
  const count = upperBound(cards, targets[i], 0, n) - lowerBound(cards, targets[i], 0, n);
  answer += count + " ";
}

console.log(answer.trim());
