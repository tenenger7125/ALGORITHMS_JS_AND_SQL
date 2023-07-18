const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [line, ...board] = fs.readFileSync(filePath).toString().split("\n");

const [dy, dx] = [
  [-1, 0, 1, 0],
  [0, 1, 0, -1],
];
const [n, m] = line.split(" ").map(Number);
board = board.map((row) => row.split(" ").map(Number));
const temp = JSON.parse(JSON.stringify(board));
let visited = Array.from({ length: n }, () => Array(m).fill(false));
let answer = -Infinity;

const getCount = () => {
  let score = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (temp[i][j] === 0) score++;
    }
  }

  return score;
};

const wall = (count) => {
  if (count === 3) {
    // temp 업데이트

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        temp[i][j] = board[i][j];
      }
    }

    // virus spread
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (temp[i][j] === 2) virus(i, j);
      }
    }
    // maxCount calculate
    answer = Math.max(answer, getCount());
    visited = Array.from({ length: n }, () => Array(m).fill(false));
    return;
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (board[i][j] !== 0) continue;

      board[i][j] = 1;
      wall(count + 1);
      board[i][j] = 0;
    }
  }
};

const virus = (y, x) => {
  if (y < 0 || x < 0 || y >= n || x >= m) return;
  if (visited[y][x] || temp[y][x] === 1) return;

  temp[y][x] = 2;
  visited[y][x] = true;

  for (let d = 0; d < 4; d++) {
    virus(y + dy[d], x + dx[d]);
  }
};

wall(0);

console.log(answer);
