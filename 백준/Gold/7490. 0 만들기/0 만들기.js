const fs = require("fs");
const [m, ...cases] = fs.readFileSync("dev/stdin").toString().trim().split("\n");

const answer = [];

for (let i = 0; i < m; i++) {
  const n = +cases[i];
  const result = [];

  function solution(level, number, expression) {
    if (level === +n) {
      if (eval(expression.replace(/\s/g, "")) === 0) result.push(expression);
      return;
    }

    solution(level + 1, number + 1, expression === "" ? `${number}` : `${expression} ${number}`);
    solution(level + 1, number + 1, expression === "" ? `${number}` : `${expression}+${number}`);
    solution(level + 1, number + 1, expression === "" ? `${number}` : `${expression}-${number}`);
  }

  solution(1, 2, "1");
  answer.push(result);
}

console.log(answer.map((res) => res.join("\n")).join("\n\n"));
