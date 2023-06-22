/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
    let answer = 0;
    
    for (let i=1; i<=arr.length; i+=2) {
        for (let j=0; j<arr.length && j+i<=arr.length; j++ ){
            answer += arr.slice(j, j + i).reduce((acc, cur) => acc + cur, 0)
        }
    }
    
    return answer;
};