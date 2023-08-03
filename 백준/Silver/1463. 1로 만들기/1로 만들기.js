const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const inputs = fs.readFileSync(filePath).toString().split("\n");

const input = (() => {
  let index = 0;
  return () => inputs[index++];
})();

let n = +input();
const dy = Array(n + 1).fill(Infinity);
dy[1] = 0;

for (let i = 2; i <= n; i++) {
  if (i % 3 === 0) dy[i] = Math.min(dy[i], dy[i / 3] + 1);
  if (i % 2 === 0) dy[i] = Math.min(dy[i], dy[i / 2] + 1);
  if (i > 1) dy[i] = Math.min(dy[i], dy[i - 1] + 1);
}

console.log(dy[n]);
