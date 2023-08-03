const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const inputs = fs.readFileSync(filePath).toString().split("\n");

const input = (() => {
  let index = 0;
  return () => inputs[index++];
})();

const n = +input();
const dy = Array.from({ length: n + 1 }, () => Array(3).fill(Infinity));

for (let i = 0; i < 3; i++) {
  dy[0][i] = 0;
}

for (let i = 1; i <= n; i++) {
  const costs = input().split(" ").map(Number);

  for (let j = 0; j < 3; j++) {
    for (let k = 0; k < 3; k++) {
      if (j !== k) dy[i][j] = Math.min(dy[i][j], dy[i - 1][k] + costs[j]);
    }
  }
}

console.log(Math.min(...dy[n]));
