const fs = require("fs");
const [n, ...inputs] = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

const arr = inputs
  .map((input) => input.split(" "))
  .map(([age, name]) => [+age, name]);

const schema = arr.reduce((acc, [age, name], idx) => {
  acc[name] = idx;
  return acc;
}, {});

const result = arr
  .sort((a, b) => {
    if (a[0] === b[0]) return schema[a[0]] - schema[b[0]];

    return a[0] - b[0];
  })
  .map((el) => el.join(" "))
  .join("\n");

console.log(result);
