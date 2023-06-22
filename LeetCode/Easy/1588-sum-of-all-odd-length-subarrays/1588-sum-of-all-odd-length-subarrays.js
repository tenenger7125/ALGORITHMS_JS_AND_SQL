/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
    // i saw solution O(n) better then my solution O(n^3);
    const n = arr.length;
    return arr.reduce((acc, cur, idx) => {
        return acc + Math.ceil(((idx * (n - idx)) + (n - idx)) / 2) * cur
    }, 0)    
};