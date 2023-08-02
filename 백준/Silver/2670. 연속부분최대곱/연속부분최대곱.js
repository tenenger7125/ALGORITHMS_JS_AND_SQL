const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const inputs = fs.readFileSync(filePath).toString().split("\n");

const input = (() => {
  let index = 0;
  return () => inputs[index++];
})();

const n = +input();
const numbers = [];
for (let i = 0; i < n; i++) {
  numbers.push(+input());
}
const dy = Array(n).fill(0);
dy[0] = numbers[0];

for (let i = 1; i < n; i++) {
  dy[i] = Math.max(dy[i - 1] * numbers[i], numbers[i]);
}
console.log(Math.max(...dy).toFixed(3));
