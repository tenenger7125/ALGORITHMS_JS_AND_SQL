const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const inputs = fs.readFileSync(filePath).toString().split("\n");

const input = (() => {
  let index = 0;
  return () => inputs[index++];
})();

const n = +input();
const arr = input().split(" ").map(Number);
const dy = Array(n).fill(1);

for (let i = 1; i < n; i++) {
  const numbers = [];

  for (let j = i - 1; j >= 0; j--) {
    if (arr[j] < arr[i]) numbers.push(dy[j]);
  }

  dy[i] = Math.max(...numbers, 0) + 1;
}
console.log(Math.max(...dy));
