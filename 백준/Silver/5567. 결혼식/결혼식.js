const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const inputs = fs.readFileSync(filePath).toString().split("\n");

const input = (() => {
  let index = 0;
  return () => inputs[index++];
})();

const n = +input();
const m = +input();
const visited = Array(n + 1).fill(false);
const graph = {};

for (let i = 1; i <= n; i++) {
  graph[i] = [];
}

for (let i = 0; i < m; i++) {
  const [p1, p2] = input().split(" ").map(Number);

  graph[p1].push(p2);
  graph[p2].push(p1);
}

const bfs = (start) => {
  const queue = [{ person: start, depth: 0 }];

  visited[start] = true;

  while (queue.length) {
    const { person: current, depth } = queue.shift();

    if (depth === 2) break;

    for (const next of graph[current]) {
      if (visited[next]) continue;

      visited[next] = true;
      queue.push({ person: next, depth: depth + 1 });
    }
  }
};

bfs(1);

console.log(visited.filter((visit) => visit).length - 1);
