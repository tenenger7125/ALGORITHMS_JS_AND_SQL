const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const inputs = fs.readFileSync(filePath).toString().split("\n");

const input = (() => {
  let index = 0;
  return () => inputs[index++];
})();

const [n, s] = input().split(" ").map(Number);
const numbers = input().split(" ").map(Number);
const dy = Array(n + 1).fill(0);
for (let i = 1; i <= n; i++) {
  dy[i] = dy[i - 1] + numbers[i - 1];
}
let [left, right] = [0, 0];
let min = Infinity;

while (right <= n) {
  const sum = dy[right] - dy[left];

  if (sum < s) right++;
  else {
    min = Math.min(min, right - left);
    left++;
  }
}

console.log(min === Infinity ? 0 : min);
