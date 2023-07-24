const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const inputs = fs.readFileSync(filePath).toString().split("\n");

const input = (() => {
  let line = 0;
  return () => inputs[line++];
})();

const [n, k, m] = input().split(" ").map(Number);
const graph = {};
const visited = Array(n * 2 + 1).fill(0);

for (let i = 1; i <= n + m; i++) {
  graph[i] = [];
}

for (let i = 1; i <= m; i++) {
  const stations = input().split(" ").map(Number);

  for (const station of stations) {
    graph[station].push(n + i);
    graph[n + i].push(station);
  }
}
const bfs = (start) => {
  const queue = [start];

  visited[start] = 1;

  while (queue.length) {
    const current = queue.shift();

    if (current === n) {
      visited[current]++;
      break;
    }

    for (const next of graph[current]) {
      if (visited[next]) continue;

      visited[next] = visited[current] + 1;
      queue.push(next);
    }
  }
};

bfs(1);
const count = Math.ceil(visited[n] / 2);

console.log(count || -1);
