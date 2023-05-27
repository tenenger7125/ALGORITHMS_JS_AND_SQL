/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
    const length = nums.length;
    const leftSum = Array(length).fill(0);
    const rightSum = Array(length).fill(0);
    
    for (let i=1; i<length; i++) {
        leftSum[i] = leftSum[i-1] + nums[i-1]
        rightSum[length-i-1] = rightSum[length-i] + nums[length-i]
    }
    
    return leftSum.map((left, idx) => Math.abs(left - rightSum[idx]))
};