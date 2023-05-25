const fs = require("fs");
const [n, ...cases] = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

for (let i = 0; i < n; i++) {
  const [count, ...students] = cases[i].split(" ").map(Number);

  const average = students.reduce((acc, cur) => acc + cur, 0) / count;
  const aboveAverageCount = students.reduce(
    (acc, cur) => acc + +(average < cur),
    0
  );

  console.log(((aboveAverageCount / count) * 100).toFixed(3) + "%");
}
