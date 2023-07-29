const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const inputs = fs.readFileSync(filePath).toString().split("\n");

const input = (() => {
  let index = 0;
  return () => inputs[index++];
})();

const n = +input();
const dy = Array(n + 2).fill(0);
dy[1] = 1;
dy[2] = 2;

for (let i = 3; i <= n; i++) {
  dy[i] = (dy[i - 2] + dy[i - 1]) % 15746;
}

console.log(dy[n]);
