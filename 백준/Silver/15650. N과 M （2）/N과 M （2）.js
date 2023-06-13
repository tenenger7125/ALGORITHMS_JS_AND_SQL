const fs = require("fs");
const inputs = fs.readFileSync("dev/stdin").toString().trim().split(" ");
const [n, m] = inputs.map(Number);

const visited = Array(n + 1).fill(false);
const answer = [];
function solution(n, m, idx, arr) {
  if (arr.length === m) return answer.push(arr.join(" "));

  for (let i = idx; i <= n; i++) {
    if (visited[i]) continue;

    visited[i] = true;
    solution(n, m, i, [...arr, i]);
    visited[i] = false;
  }
}

solution(n, m, 1, []);
console.log(answer.join("\n"));
