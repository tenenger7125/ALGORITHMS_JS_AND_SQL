const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const inputs = fs.readFileSync(filePath).toString().split("\n");

const input = (() => {
  let line = 0;
  return () => inputs[line++];
})();

const [n, m, k, x] = input().split(" ").map(Number);
const graph = {};
const visited = new Array(n + 1).fill(-1);

for (let i = 1; i <= n; i++) {
  graph[i] = [];
}

for (let i = 0; i < m; i++) {
  const [a, b] = input().split(" ").map(Number);
  graph[a].push(b);
}

const bfs = (start) => {
  let queue = [start];

  visited[start] = 0;

  while (queue.length) {
    let nq = [];

    for (let i = 0; i < queue.length; i++) {
      const current = queue[i];

      for (const next of graph[current]) {
        if (visited[next] !== -1) continue;

        visited[next] = visited[current] + 1;
        nq.push(next);
      }
    }

    queue = nq.slice();
  }
};

bfs(x);

const answer = [];

for (let i = 1; i <= n; i++) {
  if (visited[i] === k) answer.push(i);
}

console.log(answer.length === 0 ? -1 : answer.join("\n"));
