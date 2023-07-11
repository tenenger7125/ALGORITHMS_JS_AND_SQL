/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {
    nums.sort((a,b) => b-a)
    const [n1, n2, n3, n4] = [nums.at(0), nums.at(1), nums.at(-2), nums.at(-1)];
    return n1 * n2 - n3 * n4
};