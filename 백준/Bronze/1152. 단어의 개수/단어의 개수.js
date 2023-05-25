const fs = require("fs");
const string = fs.readFileSync("dev/stdin").toString().trim();

console.log(string === "" ? 0 : string.split(" ").length);
