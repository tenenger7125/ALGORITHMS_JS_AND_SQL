const fs = require("fs");
const inputs = fs.readFileSync("dev/stdin").toString().trim().split(" ");
const [n, m] = inputs.map(Number);

const answer = [];
function solution(n, m, idx, arr) {
  if (arr.length === m) return answer.push(arr.join(" "));

  for (let i = idx; i <= n; i++) {
    solution(n, m, i, [...arr, i]);
  }
}

solution(n, m, 1, []);
console.log(answer.join("\n"));
