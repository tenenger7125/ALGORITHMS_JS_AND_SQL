const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const inputs = fs.readFileSync(filePath).toString().split("\n");
const k = +inputs[0];
const inequality = inputs[1].split(" ");
const visited = Array(10).fill(0);
let [min, max] = [Infinity, -Infinity];

const solution = (depth, str) => {
  if (depth === k + 1) {
    min = Math.min(min, str).toString().padStart(depth, "0");
    max = Math.max(max, str);
    return;
  }

  for (let i = 0; i < 10; i++) {
    if (visited[i]) continue;

    if (str === "") {
      visited[i] = 1;
      solution(depth + 1, `${i}`);
      visited[i] = 0;
      continue;
    }

    if (eval(`${str.at(-1)} ${inequality[depth - 1]} ${i}`)) {
      visited[i] = 1;
      solution(depth + 1, str + `${i}`);
      visited[i] = 0;
    }
  }
};

solution(0, "");
console.log(max, min);
