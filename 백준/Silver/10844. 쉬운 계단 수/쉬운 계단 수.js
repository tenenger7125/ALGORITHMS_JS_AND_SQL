const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const inputs = fs.readFileSync(filePath).toString().split("\n");

const input = (() => {
  let index = 0;
  return () => inputs[index++];
})();

let n = +input();
const dy = Array.from({ length: n + 1 }, () => Array(10).fill(0));

for (let i = 1; i <= 9; i++) {
  dy[1][i] = 1;
}

for (let i = 2; i <= n; i++) {
  for (let j = 0; j <= 9; j++) {
    if (j > 0) dy[i][j] += dy[i - 1][j - 1];
    if (j < 9) dy[i][j] += dy[i - 1][j + 1];

    dy[i][j] %= Number(1e9);
  }
}

let sum = 0;
for (let i = 0; i <= 9; i++) {
  sum = (sum + dy[n][i]) % Number(1e9);
}
console.log(sum);
