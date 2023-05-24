  const fs = require("fs");
  const [lines, ...board] = fs.readFileSync("/dev/stdin").toString().split("\n");
  const [h, w] = lines.split(" ");
  const line = ["WBWBWBWB", "BWBWBWBW"];
  const answer = [];

  for (let i = 0; i <= h - 8; i++) {
    for (let j = 0; j <= w - 8; j++) {
      let whiteLineCount = 0;
      let blackLineCount = 0;

      for (let k = 0; k < 8; k++) {
        for (let l = 0; l < 8; l++) {
          const square = board[i + k][j + l];
          if (line[k % 2][l] === square) whiteLineCount++;
          if (line[(k + 1) % 2][l] === square) blackLineCount++;
        }
      }
      answer.push(whiteLineCount, blackLineCount);
    }
  }

  console.log(Math.min(...answer));