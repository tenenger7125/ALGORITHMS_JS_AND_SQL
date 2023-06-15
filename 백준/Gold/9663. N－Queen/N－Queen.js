const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const n = +fs.readFileSync(file).toString().trim();

const queens = [];
let count = 0;

function possible(y, x) {
  for (const [py, px] of queens) {
    if (px === x || Math.abs(py - y) === Math.abs(px - x)) return false;
  }
  return true;
}

function dfs(row) {
  if (row === n) count++;
  for (let i = 0; i < n; i++) {
    if (!possible(row, i)) continue;
    queens.push([row, i]);
    dfs(row + 1);
    queens.pop();
  }
}

dfs(0);
console.log(count);
