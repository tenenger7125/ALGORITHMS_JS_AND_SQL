const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [t, ...input] = fs.readFileSync(filePath).toString().split("\n");
input = input.map((line) => line.split(" ").map(Number));
let index = 0;

for (let i = 0; i < t; i++) {
  const [v, e] = input[i + index];
  const [...connects] = input.slice(i + index + 1, i + index + 1 + e);

  let graph = {};
  for (let i = 1; i <= v; i++) graph[i] = [];
  for (const [start, end] of connects) {
    graph[start].push(end);
    graph[end].push(start);
  }

  const visited = Array(v + 1).fill(-1);
  index += e;

  const bfs = (start) => {
    const queue = [start];

    visited[start] = 0;

    while (queue.length) {
      const current = queue.shift();

      for (const next of graph[current]) {
        if (visited[next] !== -1) continue;

        visited[next] = (visited[current] + 1) % 2;
        queue.push(next);
      }
    }
  };

  const hasBiGraph = () => {
    for (const [start, end] of connects) {
      if (visited[start] === visited[end]) return false;
    }
    return true;
  };

  for (let i = 1; i <= v; i++) {
    if (visited[i] === -1) bfs(i);
  }

  console.log(hasBiGraph() ? "YES" : "NO");
}
