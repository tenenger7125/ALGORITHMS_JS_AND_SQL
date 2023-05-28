const fs = require("fs");
const inputs = fs.readFileSync("dev/stdin").toString().trim();
const result = [...inputs].sort((a, b) => b - a).join("");

console.log(result);
