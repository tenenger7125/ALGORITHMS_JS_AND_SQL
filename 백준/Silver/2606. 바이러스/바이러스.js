const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [n, k, ...pairs] = fs.readFileSync(filePath).toString().split("\n");

const graph = pairs.reduce((acc, cur) => {
  const [p1, p2] = cur.split(" ").map(Number);
  if (!acc[p1]) acc[p1] = [];
  if (!acc[p2]) acc[p2] = [];

  acc[p1].push(p2);
  acc[p2].push(p1);

  return acc;
}, {});
const visited = new Array(+n + 1).fill(0);
let count = 0;

const solution = (start) => {
  visited[start] = 1;
  count++;

  for (const node of graph[start]) {
    if (visited[node]) continue;

    solution(node);
  }
};

if (+n === 1) console.log(0);
else {
  solution(1);
  console.log(count - 1);
}
