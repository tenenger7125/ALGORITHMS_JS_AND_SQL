/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {
    const str = [...num + ''].sort((a,b) => a-b).join("");
    return +(str[0] + str[2]) + +(str[1] + str[3])
};