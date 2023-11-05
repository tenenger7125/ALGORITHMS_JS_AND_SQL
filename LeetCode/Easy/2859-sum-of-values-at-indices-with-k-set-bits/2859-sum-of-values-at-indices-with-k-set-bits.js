/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumIndicesWithKSetBits = function(nums, k) {
    let sum = 0;
    
    for (let i=0; i<nums.length; i++) {
        const binary = i.toString(2);
        
        if ((binary.match(/1/g)?.length ?? 0) === k) sum += nums[i];
    }
    
    return sum;
};