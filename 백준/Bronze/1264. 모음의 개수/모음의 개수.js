const fs = require("fs");
const string_array = fs.readFileSync("dev/stdin").toString().trim().split("\n");

for (const str of string_array) {
  if (str === "#") continue;

  console.log(str.match(/[aeiou]/gi)?.length ?? 0);
}
