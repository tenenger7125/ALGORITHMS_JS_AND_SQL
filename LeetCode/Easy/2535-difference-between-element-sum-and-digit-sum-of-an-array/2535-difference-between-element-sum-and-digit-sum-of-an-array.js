/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    return Math.abs(nums.reduce((acc, cur) => acc + cur, 0) - nums.reduce((acc, cur) => {
        return acc + [...cur.toString()].reduce((acc, cur) => acc + +cur, 0)
    }, 0))
};