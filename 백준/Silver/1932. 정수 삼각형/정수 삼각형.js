const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const inputs = fs.readFileSync(filePath).toString().split("\n");

const input = (() => {
  let index = 0;
  return () => inputs[index++];
})();

const n = +input();
const triangle = [];
for (let i = 0; i < n; i++) {
  triangle.push(input().split(" ").map(Number));
}
const dy = Array.from({ length: n }, () => Array(n).fill(0));
dy[0][0] = triangle[0][0];

for (let i = 1; i < n; i++) {
  for (let j = 0; j < triangle[i - 1].length; j++) {
    for (let k = 0; k < 2; k++) {
      dy[i][j + k] = Math.max(dy[i][j + k], dy[i - 1][j] + triangle[i][j + k]);
    }
  }
}
console.log(Math.max(...dy.at(-1)));
