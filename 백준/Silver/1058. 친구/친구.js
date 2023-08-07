const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const inputs = fs.readFileSync(filePath).toString().split("\n");

const input = (() => {
  let index = 0;
  return () => inputs[index++];
})();

const n = +input();
const graph = Array.from({ length: n + 1 }, () => Array(n + 1).fill(Infinity));
for (let start = 1; start <= n; start++) {
  graph[start][start] = 0;
}

for (let i = 0; i < n; i++) {
  const line = input().split("");
  for (let j = 0; j < n; j++) {
    if (line[j] === "Y") graph[i + 1][j + 1] = 1;
  }
}

for (let k = 1; k <= n; k++) {
  for (let start = 1; start <= n; start++) {
    for (let end = 1; end <= n; end++) {
      graph[start][end] = Math.min(graph[start][end], graph[start][k] + graph[k][end]);
    }
  }
}

let maxFriends = 0;
for (let i = 1; i <= n; i++) {
  const count = graph[i].reduce((acc, cur) => {
    return acc + +(0 < cur && cur <= 2);
  }, 0);

  maxFriends = Math.max(maxFriends, count);
}

console.log(maxFriends);
