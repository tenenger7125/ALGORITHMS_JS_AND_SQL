const fs = require("fs");
const inputs = fs.readFileSync("dev/stdin").toString().trim().split("\n");

const [n, ...meetings] = [
  +inputs[0],
  ...inputs.slice(1).map((meeting) => meeting.split(" ").map(Number)),
];

meetings.sort((a, b) => {
  return a[1] === b[1] ? a[0] - b[0] : a[1] - b[1];
});

let current = 0;
let count = 1;
for (let i = 1; i < n; i++) {
  if (meetings[current][1] <= meetings[i][0]) {
    current = i;
    count++;
  }
}

console.log(count);
