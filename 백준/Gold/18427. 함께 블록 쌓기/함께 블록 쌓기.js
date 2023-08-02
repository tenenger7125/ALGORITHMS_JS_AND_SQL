const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const inputs = fs.readFileSync(filePath).toString().split("\n");

const input = (() => {
  let index = 0;
  return () => inputs[index++];
})();

const [n, m, h] = input().split(" ").map(Number);
let dy = Array(h + 1).fill(0);
dy[0] = 1;

for (let i = 0; i < n; i++) {
  const blocks = input().split(" ").map(Number);
  const temp = [];

  for (let j = 0; j < h + 1; j++) {
    const acc = dy[j];
    if (!acc) continue;

    for (let k = 0; k < blocks.length; k++) {
      const block = blocks[k];

      temp.push([j + block, acc]);
    }
  }

  for (let i = 0; i < temp.length; i++) {
    const [height, value] = temp[i];
    dy[height] = (dy[height] + value) % 10007;
  }
}
console.log(dy[h]);
