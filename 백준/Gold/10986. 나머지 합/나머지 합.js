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
for (let i = 1; i <= n; i++) {
  dy[i] = dy[i - 1] + numbers[i - 1];
}
const remainder = Array(m).fill(0); // 나머지를 저장하는 배열

let count = 0;

for (let i = 0; i < n + 1; i++) {
  const remain = dy[i] % m;

  remainder[remain]++; // 나머지 저장
}

for (let i = 0; i < m; i++) {
  count += (remainder[i] * (remainder[i] - 1)) / 2;
}

console.log(count);
