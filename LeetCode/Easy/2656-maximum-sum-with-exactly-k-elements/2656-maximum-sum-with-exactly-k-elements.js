/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function(nums, k) {
    let sum = 0;
    nums.sort((a,b) => a-b);
    for (let i=0; i<k; i++) {
        const max = nums.pop();
        sum += max;
        nums.push(max + 1);
    }
    return sum;
};