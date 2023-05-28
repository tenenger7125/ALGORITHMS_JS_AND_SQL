const fs = require("fs");
const [n, ...inputs] = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

const result = [...new Set(inputs)].sort((a, b) => {
  if (a.length === b.length) return a >= b ? 1 : -1;

  return a.length - b.length;
});

console.log(result.join("\n"));
