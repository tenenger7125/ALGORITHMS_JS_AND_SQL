/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    nums.sort((a,b) => a-b);
    return nums.reduce((acc, cur, idx) => acc + (idx % 2 === 0 ? cur : 0), 0)
};