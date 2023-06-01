const fs = require("fs");
const inputs = fs.readFileSync("dev/stdin").toString().trim().split("\n");

const [n, balloons] = [+inputs[0], inputs[1].split(" ").map(Number)];

const dp = Array(n + 1).fill(0);
let count = 0;

for (let i = 0; i < n; i++) {
  balloons[i];

  if (dp[balloons[i]] > 0) dp[balloons[i]]--;
  else count++;

  if (balloons[i] >= 1) dp[balloons[i] - 1]++;
}

console.log(count);
