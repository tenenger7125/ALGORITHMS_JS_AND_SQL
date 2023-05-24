const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(" ");
const [h, m] = input.map(n => +n);
const rule = h * 60 + m - 45;
const formatted = rule < 0 ? rule + 24 * 60 : rule

console.log(Math.floor(formatted / 60), formatted % 60)