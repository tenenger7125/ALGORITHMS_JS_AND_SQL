/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
    return nums.reduce((acc, cur, i) => {
        return [...acc.slice(0, index[i]), cur, ...acc.slice(index[i])]
    } ,[])
};