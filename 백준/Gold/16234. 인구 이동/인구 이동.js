const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const inputs = fs.readFileSync(filePath).toString().split("\n");

const input = (() => {
  let index = 0;
  return () => inputs[index++];
})();

const [n, l, r] = input().split(" ").map(Number);
const board = [];
for (let i = 0; i < n; i++) {
  board.push(input().split(" ").map(Number));
}
const [dy, dx] = [
  [-1, 0, 1, 0],
  [0, 1, 0, -1],
];

const bfs = (y, x, index, union) => {
  const queue = [[y, x]];
  const united = [[y, x]];
  let sum = board[y][x];
  let flag = 0;
  union[y][x] = index;

  while (queue.length) {
    const [cy, cx] = queue.shift();

    for (let d = 0; d < 4; d++) {
      const [ny, nx] = [cy + dy[d], cx + dx[d]];

      if (ny < 0 || ny >= n || nx < 0 || nx >= n) continue;
      if (union[ny][nx]) continue;

      const diff = Math.abs(board[cy][cx] - board[ny][nx]);
      if (diff < l || diff > r) continue;

      union[ny][nx] = index;
      sum += board[ny][nx];
      united.push([ny, nx]);
      queue.push([ny, nx]);
      flag = 1;
    }
  }

  // united 한 것 중에서 같은 숫자끼리 합쳐서 나눈다.
  for (const [y, x] of united) {
    board[y][x] = Math.floor(sum / united.length);
  }

  return flag;
};

let totalCount = 0;
while (true) {
  const union = Array.from({ length: n }, () => Array(n).fill(0));
  let index = 1;
  let flag = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (union[i][j]) continue;
      const result = bfs(i, j, index++, union);

      flag = Math.max(flag, result);
    }
  }

  if (!flag) break;
  totalCount++;
}

console.log(totalCount);
