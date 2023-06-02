const fs = require("fs");
const [n, ...palindromes] = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

const palindrome = (x) => x === [...x].reverse().join("");

for (let i = 0; i < n; i++) {
  const str = palindromes[i];
  const length = str.length;
  let answer = 0;

  if (palindrome(str)) answer = 0;
  else {
    for (let i = 0; i < Math.floor(length / 2); i++) {
      if (str[i] !== str[length - i - 1]) {
        if ( palindrome(str.slice(0, i) + str.slice(i + 1)) || palindrome(str.slice(0, length - i - 1) + str.slice(length - i))) answer = 1;
        else answer = 2;
          
        break;
      }
    }
  }
    
  console.log(answer)
}
