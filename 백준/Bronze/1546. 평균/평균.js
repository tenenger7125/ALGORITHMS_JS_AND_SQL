const fs = require("fs");
const [n, stringScores] = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

const scores = stringScores.split(" ").map(Number);

const max = Math.max(...scores);

console.log(scores.reduce((acc, cur) => acc + (cur / max) * 100, 0) / n);
