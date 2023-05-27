const fs = require("fs");
const string_array = fs.readFileSync("dev/stdin").toString().trim().split("\n");

for (const str of string_array) {
  const [name, height, weight] = str.split(" ");

  if (name === "#") continue;

  const level = height > 17 || weight >= 80 ? "Senior" : "Junior";
  console.log(name, level);
}
