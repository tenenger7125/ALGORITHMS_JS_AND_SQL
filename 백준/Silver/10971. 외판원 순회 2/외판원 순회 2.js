const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [m, ...fee_arr] = fs.readFileSync(file).toString().trim().split("\n");
const n = +m;
const fee_graph = fee_arr.map((fee) => fee.split(" ").map(Number));
const visited = Array(n).fill(false);
let min = Infinity;

function solution(depth, start, fee) {
  if (depth === n - 1 && fee_graph[start][0] !== 0) {
    // 출발했던 도시로 돌아와야하기 때문에 첫번째 도시로 이동하는 비용을 추가해야한다.
    min = Math.min(min, fee + fee_graph[start][0]);
    return;
  }

  for (let end = 0; end < n; end++) {
    if (visited[end] || fee_graph[start][end] === 0) continue;

    visited[end] = true;
    solution(depth + 1, end, fee + fee_graph[start][end]);
    visited[end] = false;
  }
}

visited[0] = true;
solution(0, 0, 0);

console.log(min);
