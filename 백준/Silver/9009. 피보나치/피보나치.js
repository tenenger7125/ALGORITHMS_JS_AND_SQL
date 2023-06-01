const fs = require("fs");
const [t, ...inputs] = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

for (let i = 0; i < t; i++) {
  const fibo = [0, 1];
  const answer = [];
  let n = inputs[i];
  let idx = 2;

  while (true) {
    const num = fibo[idx - 1] + fibo[idx - 2];

    if (num > n) break;

    idx++;
    fibo.push(num);
  }

  for (let k = fibo.length - 1; k >= 0; k--) {
    if (n === 0) break;

    if (n - fibo[k] >= 0) {
      answer.push(fibo[k]);
      n -= fibo[k];
    }
  }

  console.log(answer.sort((a, b) => a - b).join(" "));
}
