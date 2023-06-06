const fs = require("fs");
const inputs = fs.readFileSync("dev/stdin").toString().trim().split("\n");

const n = +inputs[0];
const soldiers = inputs[1].split(" ").map(Number).reverse();
const answer = [0];

function lowerBound(arr, target, start, end) {
  while (start < end) {
    const mid = Math.floor((start + end) / 2);
    if (arr[mid] >= target) end = mid;
    else start = mid + 1;
  }
  return end;
}

for (let i = 0; i < n; i++) {
  const soldier = soldiers[i];

  if (answer.at(-1) < soldier) answer.push(soldier);
  else {
    const swapIdx = lowerBound(answer, soldier, 0, answer.length - 1);
    answer[swapIdx] = soldier;
  }
}

console.log(soldiers.length - (answer.length - 1));
