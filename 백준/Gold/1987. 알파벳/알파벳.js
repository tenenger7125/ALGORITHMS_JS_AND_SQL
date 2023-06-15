// 기존 코드가 계속 시간초과되서 다른 코드 붙여옵니다.
// 똑같은 알고리즘인데 안되네요
//const fs = require("fs");
//const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
//const [position, ...board] = fs.readFileSync(filePath).toString().split("\n");
//const [r, c] = position.split(" ");
//const [dy, dx] = [[-1, 0, 1, 0],[0, 1, 0, -1]];
//const visited = new Set();
//let max = 0;
//function dfs(y, x, count) {
  //for (let i = 0; i < 4; i++) {
    //const [my, mx] = [y + dy[i], x + dx[i]];
    //if (my < 0 || mx < 0 || my >= r || mx >= c || visited.has(board[my][mx])) {
      //max = Math.max(max, count);
      //continue;
    //}
    //visited.add(board[my][mx]);
    //dfs(my, mx, count + 1);
    //visited.delete(board[my][mx]);
  //}
//}
//visited.add(board[0][0]);
//dfs(0, 0, 1);
//console.log(max);

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [R, C] = input[0].split(" ").map(Number);
let board = new Array(R);
for (let i = 0; i < board.length; i++) {
  board[i] = input[i + 1].trim().split("");
}
let visit = new Array(26).fill(false);
let ans = 0;
let dx = [0, 0, 1, -1];
let dy = [1, -1, 0, 0];

function DFS(x, y, cnt) {
  ans = Math.max(ans, cnt);
  for (let i = 0; i < 4; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];
    if (nx >= 0 && ny >= 0 && nx < R && ny < C) {
      if (visit[board[nx][ny].charCodeAt() - 65] === false) {
        visit[board[nx][ny].charCodeAt() - 65] = true;
        DFS(nx, ny, cnt + 1);
        visit[board[nx][ny].charCodeAt() - 65] = false;
      }
    }
  }
}
visit[board[0][0].charCodeAt() - 65] = true;
DFS(0, 0, 1);
console.log(ans);
