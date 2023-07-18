const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [n, ...input] = fs.readFileSync(filePath).toString().split("\n");

const graph = [0, ...input.map(Number)];
const visited = Array(+n).fill(false);
const finished = Array(+n).fill(false);
const result = [];

const dfs = (start) => {
  visited[start] = true;
  let next = graph[start];

  if (!visited[next]) dfs(next);
  else if (visited[next] && !finished[next]) {
    while (next !== start) {
      result.push(next);
      next = graph[next];
    }
    result.push(next);
  }
  finished[start] = true;
};

for (let i = 1; i <= n; i++) {
  if (!visited[i]) dfs(i);
}

console.log(result.length);
result.sort((a, b) => a - b).forEach((n) => console.log(n));
