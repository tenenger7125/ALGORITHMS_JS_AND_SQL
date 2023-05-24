const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(" ");
const [d1, d2, d3] = input.map(n => +n);

if (d1 === d2 && d2 === d3) console.log(10000 + 1000 * d1);
else if (d1 === d2) console.log(1000 + 100 * d1)
else if (d2 === d3) console.log(1000 + 100 * d2)
else if (d3 === d1) console.log(1000 + 100 * d3)
else console.log(100 * Math.max(d1,d2,d3));
