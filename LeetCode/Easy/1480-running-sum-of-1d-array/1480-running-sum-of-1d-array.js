/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    const dp = Array.from({length: nums.length}).fill(0);
    
    dp[0] = nums[0]
    
    for (let i=1; i<nums.length; i++) {
        dp[i] = dp[i-1] + nums[i]
    }
    
    return dp
};