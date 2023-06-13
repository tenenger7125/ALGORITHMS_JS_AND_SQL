const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const inputs = fs.readFileSync(file).toString().trim().split("\n");
const n = +inputs[0];
const foods = inputs.slice(1).map((food) => food.split(" ").map(Number));
const used = Array(n).fill(false);
let min = Infinity;

function solution(depth, s, b) {
  if (depth >= 1) min = Math.min(min, Math.abs(s - b));

  for (let i = 0; i < n; i++) {
    if (used[i]) continue;

    const [sour, bitter] = foods[i];
    used[i] = true;
    solution(depth + 1, s * sour, b + bitter);
    used[i] = false;
  }
}

solution(0, 1, 0);
console.log(min);
