const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const inputs = fs.readFileSync(filePath).toString().split("\n");

const input = (() => {
  let index = 0;
  return () => inputs[index++];
})();

const [n, m] = input().split(" ").map(Number);
const numbers = input().split(" ").map(Number);

let [left, right] = [0, 0];
let count = 0;

while (right < n && left < n) {
  const sum = numbers.slice(left, right + 1).reduce((acc, cur) => acc + cur, 0);

  if (sum === m) {
    count++;
    right++;
  } else if (sum < m) right++;
  else left++;
}

console.log(count);
