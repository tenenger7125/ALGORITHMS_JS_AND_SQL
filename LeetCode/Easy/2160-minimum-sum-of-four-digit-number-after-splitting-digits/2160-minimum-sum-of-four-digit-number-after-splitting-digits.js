/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {
    const str = num.toString().split("").sort((a,b) => a-b);
    return +(str[0] + str[2]) + +(str[1] + str[3])
};