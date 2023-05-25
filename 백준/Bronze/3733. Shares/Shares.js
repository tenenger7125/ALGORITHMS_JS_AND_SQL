  const fs = require("fs");
  const inputs = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

  for (const input of inputs) {
    const [n, s] = input.split(" ");
    console.log(Math.floor(+s / (+n + 1)));
  }