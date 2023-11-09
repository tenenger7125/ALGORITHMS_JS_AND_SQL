/**
 * @param {number[]} nums
 * @return {number}
 */
var sumCounts = function(nums) {
    let sum = 0;
    
    for (let i=0; i<nums.length; i++) {
        const map = new Map();
        
        for (let j=i; j<nums.length; j++) {
            if (!map.has(nums[j])) map.set(nums[j], 0);
            
            sum += map.size ** 2
        }
    }
    
    return sum;
};