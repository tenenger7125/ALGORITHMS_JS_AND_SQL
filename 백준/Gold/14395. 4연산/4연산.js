const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [s, t] = fs.readFileSync(filePath).toString().split(" ").map(Number);

const MAX = 10 ** 9;
const visited = {};

const dfs = (start) => {
  const queue = [[start, start, ""]];

  while (queue.length) {
    if (visited[t] !== undefined) return;

    const [prev, current, operator] = queue.shift();

    if (visited[current] !== undefined) continue;
    if (current < 0 || current > MAX) continue;
    if (visited[current] === undefined) visited[current] = (visited[prev] ?? "") + operator;

    queue.push([current, current * current, "*"]);
    queue.push([current, current + current, "+"]);
    queue.push([current, current - current, "-"]);
    if (current !== 0) queue.push([current, current / current, "/"]);
  }
};

dfs(s);
console.log(visited[t] ? visited[t] : visited[t] === "" ? 0 : -1);
