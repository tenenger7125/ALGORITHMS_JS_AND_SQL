const fs = require("fs");
const [n, k] = fs.readFileSync("dev/stdin").toString().trim().split(" ");

let sum = 0;
for (let i = 1; i <= k; i++) {
  sum += i;
}

const answer = n < sum ? -1 : (n - sum) % k === 0 ? k - 1 : k;
console.log(answer);
