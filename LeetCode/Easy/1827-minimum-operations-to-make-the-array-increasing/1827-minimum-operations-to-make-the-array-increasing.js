/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    let count = 0;
    
    for (let i=1; i<nums.length; i++) {
        if (nums[i-1] < nums[i]) continue;
        
        const diff = Math.abs(nums[i-1] - nums[i]) + 1;
        count += diff;
        nums[i] += diff
    }
    
    return count
};