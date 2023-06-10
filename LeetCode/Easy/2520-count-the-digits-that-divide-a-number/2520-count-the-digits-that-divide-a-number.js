/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
    return [...num.toString()].reduce((acc, cur) => {
        return acc + +(num % cur === 0)
    }, 0)
};