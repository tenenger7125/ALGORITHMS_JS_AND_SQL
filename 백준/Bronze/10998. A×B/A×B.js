const fs = require('fs');
const inputs = fs.readFileSync('/dev/stdin').toString().split("\n");
const [a,b] = inputs[0].split(" ");

console.log(a * b)