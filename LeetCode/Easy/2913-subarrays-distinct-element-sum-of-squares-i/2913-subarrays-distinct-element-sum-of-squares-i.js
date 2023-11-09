/**
 * @param {number[]} nums
 * @return {number}
 */
var sumCounts = function(nums) {
    let sum = 0;
    
    for (let i=0; i<nums.length; i++) {
        for (let j=i; j<nums.length; j++) {
            const distinct = (new Set(nums.slice(i, j+1))).size;
            
            sum += distinct ** 2;
        }
    }
    
    return sum;
};