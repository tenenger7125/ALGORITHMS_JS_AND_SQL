const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const inputs = fs.readFileSync(filePath).toString().split("\n");

const input = (() => {
  let index = 0;
  return () => inputs[index++];
})();

const n = +input();
const board = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));
const k = +input();
let applePosition = [];
for (let i = 0; i < k; i++) {
  applePosition.push(input().split(" ").map(Number));
}
const l = +input();
const redirection = [];
for (let i = 0; i < l; i++) {
  const [time, direct] = input().split(" ");
  redirection.push([+time, direct]);
}

const [dy, dx] = [
  [0, 1, 0, -1],
  [1, 0, -1, 0],
];
let d = 0;

const turn = (direct) => {
  if (direct === "D") d = d === 3 ? 0 : d + 1;
  else d = d === 0 ? 3 : d - 1;
};

const bfs = () => {
  const queue = [[1, 1]];
  let body = [[1, 1]];
  let time = 0;

  while (queue.length) {
    time += 1;

    const [y, x] = queue.shift();
    const [ny, nx] = [y + dy[d], x + dx[d]];
    let eat = false;

    body.push([ny, nx]);

    if (ny < 1 || ny > n || nx < 1 || nx > n) return time;
    if (body.slice(0, -1).some(([y, x]) => y === ny && x === nx)) return time;

    applePosition = applePosition.filter(([y, x]) => {
      if (!(y === ny && x === nx)) return true;

      eat = true;
      return false;
    });

    if (!eat) body.shift();

    queue.push(body.at(-1));

    if (redirection.length) {
      const [redirectTime, direct] = redirection[0];

      if (time === redirectTime) {
        redirection.shift();
        turn(direct);
      }
    }
  }
};

console.log(bfs());
