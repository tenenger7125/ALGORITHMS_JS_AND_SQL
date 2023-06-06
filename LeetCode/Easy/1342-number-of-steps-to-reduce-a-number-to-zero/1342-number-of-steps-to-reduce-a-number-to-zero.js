/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    if (num === 0) return 0;
    let step = numberOfSteps(num % 2 === 0 ? num / 2 : num - 1);
    
    return step + 1;
};