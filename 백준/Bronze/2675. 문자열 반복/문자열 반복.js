const fs = require("fs");
const [n, ...cases] = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

for (let i = 0; i < n; i++) {
  const [repeat, string] = cases[i].split(" ");

  console.log(string.replace(/./g, match => match.repeat(repeat)));
}
