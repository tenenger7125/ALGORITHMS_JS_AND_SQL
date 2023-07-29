const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const inputs = fs.readFileSync(filePath).toString().split("\n");

const input = (() => {
  let index = 0;
  return () => inputs[index++];
})();

const [n, m] = input().split(" ").map(Number);
const prices = [];
const answer = [0, 0];
for (let i = 0; i < m; i++) {
  prices.push(+input());
}

prices.sort((a, b) => a - b);
for (let i = 0; i < m; i++) {
  const [price, total] = [prices[i], prices[i] * Math.min(m - i, n)];

  if (answer[1] < total) [answer[0], answer[1]] = [price, total];
}

console.log(answer.join(" "));
