const fs = require("fs");
const bets = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const result = bets.reduce((acc, cur) => {
  return acc + (cur === -1 ? 0 : cur);
}, 0);

console.log(result);
