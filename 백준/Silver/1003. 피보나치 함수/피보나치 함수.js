const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const inputs = fs.readFileSync(filePath).toString().split("\n");

const input = (() => {
  let index = 0;
  return () => inputs[index++];
})();

const t = +input();
for (let i = 0; i < t; i++) {
  const x = +input();
  const dy = Array.from({ length: x + 2 }, () => [0, 0]);
  dy[0] = [1, 0];
  dy[1] = [0, 1];

  for (let j = 2; j <= x; j++) {
    dy[j] = [dy[j - 2][0] + dy[j - 1][0], dy[j - 2][1] + dy[j - 1][1]];
  }

  console.log(dy[x].join(" "));
}
