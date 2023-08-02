const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const inputs = fs.readFileSync(filePath).toString().split("\n");

const input = (() => {
  let index = 0;
  return () => inputs[index++];
})();

const t = +input();
for (let i = 0; i < t; i++) {
  const k = +input();
  const dy = Array(k + 6).fill(0);
  dy[1] = 1;
  dy[2] = 1;
  dy[3] = 1;
  dy[4] = 2;
  dy[5] = 2;

  for (let j = 6; j <= k; j++) {
    dy[j] = dy[j - 1] + dy[j - 5];
  }

  console.log(dy[k]);
}
