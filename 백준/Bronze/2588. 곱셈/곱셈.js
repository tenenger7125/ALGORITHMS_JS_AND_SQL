const fs = require('fs');
const inputs = fs.readFileSync('/dev/stdin').toString().split("\n");
const [a, b] = inputs;
let sum = 0;

for (let i=-1; i>=-b.length; i--) {
    const calculate = a * b.at(i);
    sum += calculate
    console.log(calculate)
}

console.log(a * b)

