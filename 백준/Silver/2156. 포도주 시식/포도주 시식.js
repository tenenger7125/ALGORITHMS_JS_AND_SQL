const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const inputs = fs.readFileSync(filePath).toString().split("\n");

const input = (() => {
  let index = 0;
  return () => inputs[index++];
})();

const n = +input();
const glasses = [];
for (let i = 0; i < n; i++) {
  glasses.push(+input());
}
const dy = Array(n + 3).fill(0);
dy[0] = glasses[0];
dy[1] = glasses[0] + glasses[1];
dy[2] = Math.max(glasses[2] + glasses[0], glasses[2] + glasses[1], glasses[1] + glasses[0]);

for (let i = 3; i < n; i++) {
  dy[i] = Math.max(glasses[i] + glasses[i - 1] + dy[i - 3], glasses[i] + dy[i - 2], dy[i - 1]);
}

console.log(dy[n - 1]);
