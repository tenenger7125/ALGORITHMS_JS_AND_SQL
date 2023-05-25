  const fs = require("fs");
  const [armor, armorBreakPercent] = fs
    .readFileSync("/dev/stdin")
    .toString()
    .split(" ")
    .map((n) => +n);;

  console.log(+((armor * (100 - armorBreakPercent)) / 100 < 100));