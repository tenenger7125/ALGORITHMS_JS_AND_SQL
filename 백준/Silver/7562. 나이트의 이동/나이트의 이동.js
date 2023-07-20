const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [t, ...input] = fs.readFileSync(filePath).toString().split("\n");
const MAX = 301;
const [dy, dx] = [
  [-2, -1, 1, 2, 2, 1, -1, -2],
  [1, 2, 2, 1, -1, -2, -2, -1],
];

for (let i = 0; i < t; i++) {
  let [n, cp, tp] = input.slice(i * 3, (i + 1) * 3);
  n = +n; // n * n
  cp = cp.split(" ").map(Number); // [y, x]
  tp = tp.split(" ").map(Number); // [y, x]

  const [ty, tx] = tp;
  const queue = [cp];
  const visited = Array.from({ length: MAX }, () => Array(MAX).fill(0));

  if (tp[0] === cp[0] && tp[1] === cp[1]) {
    console.log(0);
    continue;
  }

  const bfs = () => {
    while (queue) {
      const [cy, cx] = queue.shift();

      if (visited[ty][tx]) return visited[ty][tx];

      for (let d = 0; d < 8; d++) {
        const [ny, nx] = [cy + dy[d], cx + dx[d]];

        if (ny < 0 || nx < 0 || ny >= n || nx >= n) continue;

        if (visited[ny][nx] === 0) {
          queue.push([ny, nx]);
          visited[ny][nx] = visited[cy][cx] + 1;
        }
      }
    }
  };

  console.log(bfs());
}
