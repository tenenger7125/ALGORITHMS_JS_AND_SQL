const fs = require("fs");
const inputs = fs.readFileSync("dev/stdin").toString().trim().split("\n");

const [n, k] = inputs.map(Number);

let [start, end] = [1, k];
let answer = 0;

while (start <= end) {
  const mid = Math.floor((start + end) / 2);
  let count = 0;

  for (let i = 1; i <= n; i++) {
    count += Math.min(Math.floor(mid / i), n);
  }

  if (count >= k) {
    answer = mid;
    end = mid - 1;
  } else {
    start = mid + 1;
  }
}

console.log(answer);
