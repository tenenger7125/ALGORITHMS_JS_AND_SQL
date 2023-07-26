const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const inputs = fs.readFileSync(filePath).toString().split("\n");

const input = (() => {
  let index = 0;
  return () => inputs[index++];
})();

const n = +input();
const numbers = input().split(" ").map(Number);
const dy = Array(n + 1).fill(0);
for (let i = 1; i <= n; i++) {
  dy[i] = dy[i - 1] + numbers[i - 1];
}

const m = +input();
let answer = [];

for (let i = 0; i < m; i++) {
  const [s1, s2] = input().split(" ").map(Number);

  answer.push(dy[s2] - dy[s1 - 1])
}

console.log(answer.join("\n"));
