const fs = require("fs");
const [n, numbers] = fs.readFileSync("dev/stdin").toString().trim().split("\n");

console.log(Math.min(...numbers.split(" ")), Math.max(...numbers.split(" ")));
