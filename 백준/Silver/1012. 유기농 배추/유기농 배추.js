const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [n, ...testcases] = fs.readFileSync(filePath).toString().split("\n");
const [dy, dx] = [
  [-1, 0, 1, 0],
  [0, 1, 0, -1],
];
let index = 0;
for (let i = 0; i < n; i++) {
  const [m, n, k] = testcases[index + i].split(" ").map(Number);
  const positions = testcases.slice(index + i + 1, index + i + k + 1);
  const board = Array.from({ length: n }, () => Array(m).fill(0));
  let count = 0;
  positions.forEach((position) => {
    const [x, y] = position.split(" ").map(Number);
    board[y][x] = 1;
  });
  index += k;

  const dfs = (x, y) => {
    if (board[y][x] === 0) return;

    board[y][x] = 0;

    for (let direct = 0; direct < 4; direct++) {
      const [my, mx] = [y + dy[direct], x + dx[direct]];

      if (my < 0 || my >= n || mx < 0 || mx >= m) continue;
      dfs(mx, my);
    }
  };

  positions.forEach((position) => {
    const [x, y] = position.split(" ").map(Number);

    if (board[y][x] === 1) {
      dfs(x, y, count);
      count++;
    }
  });
  console.log(count);
}
