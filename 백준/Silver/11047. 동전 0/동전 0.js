const fs = require("fs");
const [line, ...coins] = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [n, k] = line.split(" ");

console.log(
  coins.reverse().reduce(
    ([count, k], cur) => {
      return [count + Math.floor(k / cur), k % cur];
    },
    [0, +k]
  )[0]
);
