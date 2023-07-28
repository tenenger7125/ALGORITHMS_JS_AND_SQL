const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const inputs = fs.readFileSync(filePath).toString().split("\n");

const input = (() => {
  let index = 0;
  return () => inputs[index++];
})();

const n = +input();
const numbers = input().split(" ").map(Number);
const x = +input();

numbers.sort((a, b) => a - b);

let [left, right] = [0, n - 1];
let count = 0;

while (left < right) {
  const sum = numbers[left] + numbers[right];

  if (sum === x) {
    count++;
    left++;
  } else if (sum < x) left++;
  else right--;
}

console.log(count);
