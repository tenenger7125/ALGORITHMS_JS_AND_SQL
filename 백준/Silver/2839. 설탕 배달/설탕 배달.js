const fs = require("fs");
const weight = +fs.readFileSync("dev/stdin").toString().trim();

const dp = Array(weight + 1).fill(Infinity);

dp[3] = 1;
dp[5] = 1;

for (let i = 3; i <= weight; i++) {
  if (i >= 3) dp[i] = Math.min(dp[i], dp[i - 3] + 1);
  if (i >= 5) dp[i] = Math.min(dp[i], dp[i - 5] + 1);
}

console.log(dp[weight] !== Infinity ? dp[weight] : -1);
