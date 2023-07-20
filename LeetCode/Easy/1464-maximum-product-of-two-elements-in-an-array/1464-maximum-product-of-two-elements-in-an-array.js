/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    nums.sort((a,b) => b-a)
    const [n1, n2] = nums.slice(0, 2);
    return (n1 - 1) * (n2 - 1)
};