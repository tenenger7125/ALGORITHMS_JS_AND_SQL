const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const inputs = fs.readFileSync(filePath).toString().split("\n");

const input = (() => {
  let index = 0;
  return () => inputs[index++];
})();

const [n, m] = input().split(" ").map(Number);
const numbers = input().split(" ").map(Number);
const dy = Array(n + 1).fill(0);
let [left, right] = [0, 1];
let count = 0;

for (let i = 1; i <= n; i++) {
  dy[i] = dy[i - 1] + numbers[i - 1];
}

while (right <= n) {
  const sum = dy[right] - dy[left];
  if (sum === m) {
    count++;
    right++;
  } else if (sum < m) right++;
  else left++;
}

console.log(count);
