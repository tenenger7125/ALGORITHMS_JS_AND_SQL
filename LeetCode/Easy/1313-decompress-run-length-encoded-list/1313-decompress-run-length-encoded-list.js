/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    const answer = [];
    
    for (let i=0; 2*i+1<nums.length; i++) {
        const [left, right] = [2*i, 2*i+1];
        
        const [freq, val] = [nums[left], nums[right]];
        
        for (let j=0; j<freq; j++) {
            answer.push(val)
        }
    }
    
    return answer;
};