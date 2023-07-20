const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [n, k] = fs.readFileSync(filePath).toString().split(" ").map(Number);

const MAX = 100001;
const queue = [n];
const dy = Array(MAX).fill(0);

const bfs = () => {
  while (queue.length) {
    const current = queue.shift();

    if (current === k) return dy[current];

    for (const next of [current - 1, current + 1, current * 2]) {
      if (next < 0 || next >= MAX) continue;

      if (dy[next] === 0) {
        dy[next] = dy[current] + 1; // Math.min은 사용하지 않아도 된다.
        queue.push(next);
      }
    }
  }
};

const distance = bfs();
console.log(distance);
