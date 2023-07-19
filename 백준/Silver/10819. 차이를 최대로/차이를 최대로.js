const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [n, numbers] = fs.readFileSync(filePath).toString().split("\n");

n = +n;
numbers = numbers.split(" ").map(Number);

const selected = [];
const visited = Array(n).fill(false);
let max = 0;

const calculate = (list) => {
  let sum = 0;
  for (let i = 1; i < list.length; i++) {
    sum += Math.abs(list[i - 1] - list[i]);
  }
  return sum;
};

const dfs = (l) => {
  if (l === n) {
    max = Math.max(calculate(selected), max);
    return;
  }

  for (let i = 0; i < n; i++) {
    if (visited[i]) continue;
    visited[i] = true;
    selected.push(numbers[i]);
    dfs(l + 1);
    visited[i] = false;
    selected.pop();
  }
};

dfs(0);

console.log(max);
