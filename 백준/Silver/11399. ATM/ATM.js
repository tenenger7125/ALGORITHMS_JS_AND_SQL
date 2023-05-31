const fs = require("fs");
const [n, input] = fs.readFileSync("dev/stdin").toString().trim().split("\n");

const atm = input
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
const dp = Array(n).fill(0);

dp[0] = atm[0];

for (let i = 1; i < n; i++) {
  dp[i] = dp[i - 1] + atm[i];
}

console.log(dp.reduce((acc, cur) => acc + cur, 0));
