const fs = require('fs');
const inputs = fs.readFileSync('/dev/stdin').toString().split("\n");
const [curTime, cookMinutes] = [inputs[0].split(" ").map(n => +n), +inputs[1]];
const [curHours, curMinutes] = curTime;
const formatted = curHours * 60 + curMinutes + cookMinutes

console.log(Math.floor(formatted / 60) % 24, formatted % 60)