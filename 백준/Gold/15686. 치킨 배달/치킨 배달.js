const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [conf, ...board] = fs
  .readFileSync(filePath)
  .toString()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

const [n, m] = conf;

const houses = [];
const chickens = [];

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (board[i][j] === 1) houses.push([i, j]);
    else if (board[i][j] === 2) chickens.push([i, j]);
    else;
  }
}

const selected = []; // dfs에서 사용되는 m개만큼 선택된 치킨집들
const visited = Array(chickens.length).fill(false);
const selectedCombinations = []; // 조합

const dfs = (l, s) => {
  if (l === m) {
    selectedCombinations.push(selected.slice());
  }

  for (let i = s; i < chickens.length; i++) {
    if (visited[i]) continue;
    visited[i] = true;
    selected.push(chickens[i]);
    dfs(l + 1, i + 1);
    visited[i] = false;
    selected.pop();
  }
};

dfs(0, 0);

const minDosiChickenDistance = selectedCombinations.reduce((minDosiChickenDistance, chickens) => {
  const dosiChickenDistnace = houses.reduce((chickenDistances, house) => {
    const [hy, hx] = house;

    const chickenDistance = chickens.reduce((minDistance, chicken) => {
      const [cy, cx] = chicken;

      const distance = Math.abs(hx - cx) + Math.abs(hy - cy);

      return Math.min(minDistance, distance);
    }, Infinity);

    return chickenDistances + chickenDistance;
  }, 0);
  return Math.min(minDosiChickenDistance, dosiChickenDistnace);
}, Infinity);

console.log(minDosiChickenDistance);
