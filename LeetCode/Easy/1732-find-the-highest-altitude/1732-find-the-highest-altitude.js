/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    return gain.reduce(({sum, max}, cur) => {
        const nextSum = sum + cur;
        return {sum:nextSum, max:Math.max(nextSum, max)}
    }, {sum:0, max:0}).max
};