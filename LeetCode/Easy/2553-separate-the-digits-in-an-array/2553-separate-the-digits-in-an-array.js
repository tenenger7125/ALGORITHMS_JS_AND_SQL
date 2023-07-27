/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {
    return nums.map(num => num.toString().split("")).flat()
};