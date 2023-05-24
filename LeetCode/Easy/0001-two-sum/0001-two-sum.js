/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map();
    
    for (let i=0; i<nums.length; i++) {
        const search = target - nums[i];
        if (map.has(search)) return [map.get(search), i];
        
        map.set(nums[i], i)
    }
    
    return null;
};