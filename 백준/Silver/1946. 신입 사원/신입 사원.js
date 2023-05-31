const fs = require("fs");
const [cases, ...inputs] = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

let idx = 0;

for (let i = 0; i < cases; i++) {
  const n = +inputs[idx];
  const newIdx = idx + n + 1;
  const applicants = inputs
    .slice(idx + 1, newIdx)
    .map((applicant) => applicant.split(" ").map(Number))
    .sort((a, b) => a[0] - b[0]);
  let min = Infinity;

  idx = newIdx;

  const result = applicants.reduce((acc, [x, y]) => {
    const pastMin = min;
    min = Math.min(min, y);

    return acc + +(x === 1 || y < pastMin);
  }, 0);
  console.log(result);
}
