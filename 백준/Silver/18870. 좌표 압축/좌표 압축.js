const fs = require("fs");
const [n, inputs] = fs.readFileSync("dev/stdin").toString().trim().split("\n");

const arr = inputs.split(" ").map(Number);
const schema = [...new Set(arr)]
  .sort((a, b) => a - b)
  .reduce((acc, cur, idx) => {
    acc[cur] ? acc[cur]++ : (acc[cur] = idx);
    return acc;
  }, {});

console.log(arr.map((num) => schema[num]).join(" "));
