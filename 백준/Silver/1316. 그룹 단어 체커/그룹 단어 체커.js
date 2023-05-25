const fs = require("fs");
const [n, ...string] = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

let answer = n;

for (let i = 0; i < n; i++) {
  const map = new Map();
  const str = string[i];

  for (let j = 0; j < str.length; j++) {
    const cur = str[j];

    if (map.has(cur)) {
      answer--;
      break;
    }

    while (cur === str[j]) {
      map.set(str[j], 1);
      j++;
    }
    j--;
  }
}

console.log(answer);
