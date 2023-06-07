const fs = require("fs");
const n = +fs.readFileSync("dev/stdin").toString().trim();

const answer = [];
const visited = Array(n + 1).fill(false);

function solution(level, arr) {
  if (level === n) answer.push(arr.join(" "));

  for (let i = 1; i <= n; i++) {
    if (visited[i]) continue;

    visited[i] = true;
    solution(level + 1, [...arr, i]);
    visited[i] = false;
  }
}

solution(0, []);

console.log(answer.join("\n"));
