/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfSquares = function(nums) {
    return nums.reduce((acc, cur, idx) => {
        return acc + (nums.length % (idx + 1) === 0 ? cur * cur : 0)
    }, 0)
};