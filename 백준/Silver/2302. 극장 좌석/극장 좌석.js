const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const inputs = fs.readFileSync(filePath).toString().split("\n");

const input = (() => {
  let index = 0;
  return () => inputs[index++];
})();

const n = +input();
const m = +input();
const dy = Array(n + 1).fill(0);
const section = [];
dy[0] = 1;
dy[1] = 1;

const getSection = () => {
  let cur = 1;
  for (let i = 0; i < m; i++) {
    const vip = +input();
    section.push(vip - cur);
    cur = vip + 1;
  }
  section.push(n + 1 - cur);
};
getSection();

for (let i = 2; i <= n; i++) {
  dy[i] = dy[i - 1] + dy[i - 2];
}

let answer = 1;
for (let i = 0; i < section.length; i++) {
  answer *= dy[section[i]];
}
console.log(answer);
