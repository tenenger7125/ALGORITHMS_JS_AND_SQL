const fs = require("fs");
const [n, ...string] = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

function check(str) {
  const set = new Set(str[0]);

  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] !== str[i + 1]) {
      if (set.has(str[i + 1])) return false;

      set.add(str[i + 1]);
    }
  }

  return true;
}

let answer = 0;

for (let i = 0; i < n; i++) {
  const str = string[i];
  if (check(str)) answer++;
}

console.log(answer);
