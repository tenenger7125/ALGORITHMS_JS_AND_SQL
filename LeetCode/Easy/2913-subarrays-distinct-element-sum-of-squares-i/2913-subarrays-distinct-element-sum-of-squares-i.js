/**
 * @param {number[]} nums
 * @return {number}
 */
var sumCounts = function(nums) {
    const result = {};
    
    for (let i=0; i<nums.length; i++) {
        for (let j=i; j<nums.length; j++) {
            const distinct = (new Set(nums.slice(i, j+1))).size;
            
            if (!result[distinct]) result[distinct] = 0;
            result[distinct]++;
        }
    }
    
    return Object.entries(result).reduce((acc, [distinct, count]) => acc + (distinct ** 2) * count, 0);
};