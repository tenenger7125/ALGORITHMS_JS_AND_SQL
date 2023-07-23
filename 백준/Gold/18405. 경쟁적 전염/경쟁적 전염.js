const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const inputs = fs.readFileSync(filePath).toString().split("\n");

const input = (() => {
  let line = 0;
  return () => inputs[line++];
})();

const [n, k] = input().split(" ").map(Number);
const board = [];

for (let i = 0; i < n; i++) {
  board.push(input().split(" ").map(Number));
}
const [s, x, y] = input().split(" ").map(Number);
const [dy, dx] = [
  [-1, 1, 0, 0],
  [0, 0, -1, 1],
];

const bfs = () => {
  const virus = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] !== 0) virus.push({ type: board[i][j], time: 0, y: i, x: j });
    }
  }
  virus.sort((a, b) => a.type - b.type);

  while (virus.length) {
    const { type, time, y, x } = virus.shift();

    if (time === s) break;

    for (let d = 0; d < 4; d++) {
      const [ny, nx] = [y + dy[d], x + dx[d]];

      if (ny < 0 || nx < 0 || ny >= n || nx >= n) continue;
      if (board[ny][nx] !== 0) continue;

      board[ny][nx] = type;
      virus.push({ type, time: time + 1, y: ny, x: nx });
    }
  }
};

bfs();

console.log(board[x - 1][y - 1]);
