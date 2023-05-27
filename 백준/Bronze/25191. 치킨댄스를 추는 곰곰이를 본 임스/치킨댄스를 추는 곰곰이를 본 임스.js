const fs = require("fs");
const [chicken, beverage] = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [cola, beer] = beverage.split(" ").map(Number);
console.log(Math.min(chicken, Math.floor(cola / 2) + beer));
