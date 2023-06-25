const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const inputs = fs
  .readFileSync(filePath)
  .toString()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

const [n, m] = inputs[0];
const pairs = inputs.slice(1, n);
const wanted = inputs.slice(n);
const graph = [...new Array(n + 1)].map(() => []);

pairs.forEach(([n1, n2, cost]) => {
  graph[n1].push([n2, cost]);
  graph[n2].push([n1, cost]);
});

const visited = Array(n + 1).fill(false);

const dfs = (start, end, sum) => {
  if (start === end) return console.log(sum);

  for (const [next, cost] of graph[start]) {
    if (visited[next]) continue;

    visited[start] = true;
    dfs(next, end, sum + cost);
    visited[start] = false;
  }
};

for (const [start, end] of wanted) {
  visited[start] = true;
  dfs(start, end, 0);
  visited[start] = false;
}
