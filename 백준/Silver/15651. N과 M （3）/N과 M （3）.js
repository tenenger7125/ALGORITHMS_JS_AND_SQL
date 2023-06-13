const fs = require("fs");
const inputs = fs.readFileSync("dev/stdin").toString().trim().split(" ");
const [n, m] = inputs.map(Number);

const answer = [];
function solution(n, m, arr) {
  if (arr.length === m) return answer.push(arr.join(" "));

  for (let i = 1; i <= n; i++) {
    solution(n, m, [...arr, i]);
  }
}

solution(n, m, []);
console.log(answer.join("\n"));
