const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim();

const groups = input.split("-");
let answer = 0;

for (let i = 0; i < groups.length; i++) {
  const cur = groups[i].split("+").reduce((acc, cur) => acc + +cur, 0);
  answer += i !== 0 ? -cur : cur;
}

console.log(answer);
