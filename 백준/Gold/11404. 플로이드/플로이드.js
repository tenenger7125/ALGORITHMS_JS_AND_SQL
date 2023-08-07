const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const inputs = fs.readFileSync(filePath).toString().split("\n");

const input = (() => {
  let index = 0;
  return () => inputs[index++];
})();

const n = +input();
const m = +input();
const graph = Array.from({ length: n + 1 }, () => Array(n + 1).fill(Infinity));
for (let i = 0; i < m; i++) {
  const [start, end, cost] = input().split(" ").map(Number);
  graph[start][end] = Math.min(graph[start][end], cost);
}

for (let start = 1; start <= n; start++) {
  graph[start][start] = 0;
}

for (let k = 1; k <= n; k++) {
  for (let start = 1; start <= n; start++) {
    for (let end = 1; end <= n; end++) {
      graph[start][end] = Math.min(graph[start][end], graph[start][k] + graph[k][end]);
    }
  }
}

for (let start = 1; start <= n; start++) {
  let line = "";
  for (let end = 1; end <= n; end++) {
    line += graph[start][end] === Infinity ? 0 + " " : graph[start][end] + " ";
  }
  console.log(line);
}
