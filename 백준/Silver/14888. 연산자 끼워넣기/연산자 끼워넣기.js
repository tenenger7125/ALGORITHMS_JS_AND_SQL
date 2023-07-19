const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [n, numbers, operators] = fs.readFileSync(filePath).toString().split("\n");

n = +n;
numbers = numbers.split(" ").map(Number);
operators = operators.split(" ").map(Number);

let max = -Infinity;
let min = Infinity;

const dfs = (l, sum) => {
  if (l === n) {
    min = Math.min(min, sum);
    max = Math.max(max, sum);
    return;
  }

  const num = numbers[l];

  if (l === 0) return dfs(l + 1, num);

  for (let i = 0; i < 4; i++) {
    if (operators[i] === 0) continue;

    operators[i]--;
    const nextSum = i === 0 ? sum + num : i === 1 ? sum - num : i === 2 ? sum * num : ~~(sum / num);
    dfs(l + 1, nextSum);
    operators[i]++;
  }
};

dfs(0, 0);

console.log(max);
console.log(min);
