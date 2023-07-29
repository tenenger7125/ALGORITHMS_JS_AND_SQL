const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const inputs = fs.readFileSync(filePath).toString().split("\n");

const input = (() => {
  let index = 0;
  return () => inputs[index++];
})();

const l = +input();
const numbers = [0, ...input().split(" ").map(Number)];
const n = +input();
numbers.sort((a, b) => a - b);

let count = 0;

for (let i = 1; i <= l + 1; i++) {
  if (numbers[i - 1] < n && n < numbers[i]) {
    let [start, end] = [Math.min(numbers[i - 1] + 1, n), numbers[i] - 1];

    for (let j = start; j <= n; j++) {
      for (let k = Math.max(j + 1, n); k <= end; k++) {
        count++;
      }
    }
  }
}

console.log(count);
