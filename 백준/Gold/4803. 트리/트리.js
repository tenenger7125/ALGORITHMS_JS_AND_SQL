const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const inputs = fs
  .readFileSync(filePath)
  .toString()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

let testCase = 0;
for (let i = 0; i < inputs.length; i++) {
  testCase++;
  const [n, m] = inputs[i];
  if (n === 0 && m === 0) break;

  const graph = Array.from({ length: n + 1 }, () => []);
  const visited = Array(n + 1).fill(0);
  let count = 0;

  for (let j = 0; j < m; j++) {
    i++;
    const [node1, node2] = inputs[i];
    graph[node1].push(node2);
    graph[node2].push(node1);
  }

  const hasCycle = (start, prev) => {
    visited[start] = 1;

    for (const next of graph[start]) {
      if (visited[next] && next !== prev) return true;
      if (!visited[next] && hasCycle(next, start)) return true;
    }

    return false;
  };
  for (let start = 1; start <= n; start++) {
    const isCycle = hasCycle(start, 0);
    count = isCycle ? count : count + 1;
  }

  let result = `Case ${testCase}: `;
  if (count === 0) result += "No trees.";
  else if (count === 1) result += "There is one tree.";
  else result += `A forest of ${count} trees.`;
  console.log(result);
}
