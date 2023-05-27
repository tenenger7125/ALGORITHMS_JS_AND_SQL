const fs = require("fs");
const [n, ...string_array] = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

string_array.forEach((str) => console.log(str.toLowerCase()));
