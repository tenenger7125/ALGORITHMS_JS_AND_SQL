/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    const schema = nums.slice().sort((a,b) => a-b).reduce((acc, cur, idx) => {
        if (acc[cur] === undefined) acc[cur] = idx;
        return acc
    }, {})
    
    return nums.map(num => schema[num])
};