const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const fanEmoji = ":fan:";

console.log(`${fanEmoji.repeat(3)}
${fanEmoji}:${input}:${fanEmoji}
${fanEmoji.repeat(3)}
`);