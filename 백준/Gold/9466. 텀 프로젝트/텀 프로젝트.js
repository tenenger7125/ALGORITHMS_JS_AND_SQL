const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [t, ...input] = fs.readFileSync(filePath).toString().split("\n");

for (let i = 0; i < t; i++) {
  const n = +input[i * 2];
  const graph = [0, ...input[i * 2 + 1].split(" ").map(Number)];
  const visited = Array(n + 1).fill(false);
  const finished = Array(n + 1).fill(false);
  let count = 0;

  const dfs = (start) => {
    visited[start] = true;
    let next = graph[start];

    if (!visited[next]) dfs(next);
    else if (!finished[next]) {
      while (start !== next) {
        count++;
        next = graph[next];
      }
      count++;
    }
    finished[start] = true;
  };

  for (let start = 1; start <= n; start++) {
    if (!visited[start]) dfs(start);
  }

  console.log(n - count);
}
