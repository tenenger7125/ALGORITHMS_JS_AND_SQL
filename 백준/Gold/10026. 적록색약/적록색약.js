const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [n, ...board] = fs.readFileSync(filePath).toString().split("\n");

n = +n;
board = board.map((row) => row.split(""));

let visited = Array.from({ length: n }, () => Array(n).fill(false));

const [dy, dx] = [
  [-1, 0, 1, 0],
  [0, 1, 0, -1],
];

let normalCount = 0;
let redGreenWeaknessSectionCount = 0;

const dfs = (y, x, target) => {
  if (y >= n || y < 0 || x >= n || x < 0) return false;
  if (visited[y][x]) return false;
  if (board[y][x] !== target) return false;

  visited[y][x] = true;

  for (let d = 0; d < 4; d++) {
    dfs(y + dy[d], x + dx[d], target);
  }

  return true;
};

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    const result = dfs(i, j, board[i][j]);
    if (result) normalCount += 1;
  }
}

visited = Array.from({ length: n }, () => Array(n).fill(false));

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (board[i][j] === "R") board[i][j] = "G";
  }
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    const result = dfs(i, j, board[i][j]);
    if (result) redGreenWeaknessSectionCount += 1;
  }
}

console.log(normalCount, redGreenWeaknessSectionCount);
