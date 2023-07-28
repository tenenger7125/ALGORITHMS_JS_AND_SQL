const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const inputs = fs.readFileSync(filePath).toString().split("\n");

const input = (() => {
  let index = 0;
  return () => inputs[index++];
})();

const n = +input();
const board = [];
for (let i = 0; i < n; i++) {
  board.push(input().split(""));
}
const height = [];
for (let i = 0; i < n; i++) {
  height.push(input().split(" ").map(Number));
}
const [dy, dx] = [
  [-1, -1, 0, 1, 1, 1, 0, -1],
  [0, 1, 1, 1, 0, -1, -1, -1],
];

const startPosition = [];
const heightRange = [...new Set(height.flat())];
heightRange.sort((a, b) => a - b);
let houseCount = 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (board[i][j] === "P") startPosition.push(i, j);
    if (board[i][j] === "K") houseCount++;
  }
}

let [left, right] = [0, 0];

const bfs = (y, x) => {
  const visited = Array.from({ length: n }, () => Array(n).fill(false));
  const queue = [[y, x]];
  let count = 0;
  visited[y][x] = true;

  while (queue.length) {
    const [cy, cx] = queue.shift();

    for (let d = 0; d < 8; d++) {
      const [ny, nx] = [cy + dy[d], cx + dx[d]];

      if (ny < 0 || nx < 0 || ny >= n || nx >= n) continue;
      if (visited[ny][nx]) continue;
      if (heightRange[left] > height[ny][nx] || height[ny][nx] > heightRange[right]) continue;

      if (board[ny][nx] === "K") count++;

      visited[ny][nx] = true;
      queue.push([ny, nx]);
    }
  }

  return count;
};

const [y, x] = startPosition;
const startHeight = height[y][x];
let answer = Infinity;
while (left <= right && right < heightRange.length) {
  const [minHeight, maxHeight] = [heightRange[left], heightRange[right]];
  let count = 0;
  if (minHeight <= startHeight && startHeight <= maxHeight) {
    count = bfs(y, x);
  }

  if (count === houseCount) {
    answer = Math.min(answer, maxHeight - minHeight);
    left++;
  } else right++;
}
console.log(answer);
