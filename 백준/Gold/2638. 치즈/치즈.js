const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const inputs = fs.readFileSync(filePath).toString().split("\n");

const input = (() => {
  let index = 0;
  return () => inputs[index++];
})();

const [n, m] = input().split(" ").map(Number);
const cheese = [];
for (let i = 0; i < n; i++) {
  cheese.push(input().split(" ").map(Number));
}
const [dy, dx] = [
  [-1, 0, 1, 0],
  [0, 1, 0, -1],
];

const melt = () => {
  let finish = true;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (cheese[i][j] >= 3) {
        cheese[i][j] = 0;
        finish = false;
      } else if (cheese[i][j] === 2) cheese[i][j] = 1;
    }
  }

  return finish;
};

const bfs = () => {
  const queue = [[0, 0]];
  const visited = Array.from({ length: n }, () => Array(m).fill(false));
  visited[0][0] = true;

  while (queue.length) {
    const [cy, cx] = queue.shift();

    for (let d = 0; d < 4; d++) {
      const [ny, nx] = [cy + dy[d], cx + dx[d]];
      if (ny < 0 || ny >= n || nx < 0 || nx >= m) continue;
      if (visited[ny][nx]) continue;

      if (cheese[ny][nx] >= 1) cheese[ny][nx]++;
      else {
        queue.push([ny, nx]);
        visited[ny][nx] = true;
      }
    }
  }
};

let count = 0;
while (true) {
  bfs();
  if (melt()) break;
  count++;
}

console.log(count);
