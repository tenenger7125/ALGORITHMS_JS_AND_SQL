/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function(nums) {
    let sum = 0;
    
    const dfs = (val, i) => {
        if (i === nums.length) return sum += val;
        
        dfs(val, i+1);
        dfs(val^nums[i], i+1)
    }
    
    dfs(0, 0)
    
    return sum
};