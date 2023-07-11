const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

const n = +input[0];
const board = [];
for (let i = 1; i <= n; i++) {
  board.push(input[i].split("").map(Number));
}

const [dy, dx] = [
  [-1, 0, 1, 0],
  [0, 1, 0, -1],
];

const result = [];
let number = 0;

const dfs = (y, x) => {
  if (y < 0 || y >= n || x < 0 || x >= n) return 0;
  if (board[y][x] === 0 || board[y][x] === -1) return 0;

  let result = 1;
  board[y][x] = -1;

  for (let d = 0; d < 4; d++) {
    result += dfs(y + dy[d], x + dx[d]);
  }

  return result;
};

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (board[i][j] === 1) {
      result.push(dfs(i, j));
      number++;
    }
  }
}
console.log(number);
result.sort((a, b) => a - b).forEach((count) => console.log(count));