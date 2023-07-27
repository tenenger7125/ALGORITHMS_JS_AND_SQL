const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const inputs = fs.readFileSync(filePath).toString().split("\n");

const input = (() => {
  let index = 0;
  return () => inputs[index++];
})();

const [n, m] = input().split(" ").map(Number);
const array = Array.from({ length: 1 }, () => Array(m).fill(0));
for (let i = 0; i < n; i++) {
  array.push([0, ...input().split(" ").map(Number)]);
}

const dy = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= m; j++) {
    dy[i][j] = array[i][j] + dy[i - 1][j] + dy[i][j - 1] - dy[i - 1][j - 1];
  }
}

const k = +input();

for (let l = 0; l < k; l++) {
  const [i, j, x, y] = input()
    .split(" ")
    .map((num) => num);

  const result = dy[x][y] - dy[x][j - 1] - dy[i - 1][y] + dy[i - 1][j - 1];
  console.log(result);
}
