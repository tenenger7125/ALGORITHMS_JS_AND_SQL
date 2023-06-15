const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const inputs = fs.readFileSync(file).toString().trim().split("\n");

for (const input of inputs) {
  const [k, ...numbers] = input.split(" ").map(Number);
  const answer = [];

  const dfs = (depth, idx, array) => {
    if (depth === 6) return answer.push(array.join(" "));

    for (let i = idx; i < k; i++) {
      dfs(depth + 1, i + 1, [...array, numbers[i]]);
    }
  };
  dfs(0, 0, []);
  console.log(answer.join("\n"));
  console.log();
}
