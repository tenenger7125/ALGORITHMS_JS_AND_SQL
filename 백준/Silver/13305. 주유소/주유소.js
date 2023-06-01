const fs = require("fs");
const inputs = fs.readFileSync("dev/stdin").toString().trim().split("\n");

const [n, distances, gasStations] = [
  +inputs[0],
  inputs[1].split(" ").map(Number),
  inputs[2].split(" ").map(Number),
];

const dp = gasStations;

for (let i = 1; i < n; i++) {
  dp[i] = Math.min(dp[i - 1], dp[i]);
}

console.log(distances.reduce((acc, cur, idx) => acc + cur * dp[idx], 0));
