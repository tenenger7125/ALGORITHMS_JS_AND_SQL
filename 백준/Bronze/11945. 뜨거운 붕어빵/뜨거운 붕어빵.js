const fs = require("fs");
const [input, ...bung] = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

bung.forEach((row) => console.log(row.split("").reverse().join("")));
