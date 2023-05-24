const fs = require("fs");
const inputs = fs.readFileSync("/dev/stdin").toString().split("\n");
const [str, idx] = inputs;
console.log(str[idx - 1]);