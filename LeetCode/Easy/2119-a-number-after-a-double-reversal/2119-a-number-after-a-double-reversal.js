/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function(num) {
    const reverse1 = +[...num.toString()].reverse().join("");
    const reverse2 = +[...reverse1.toString()].reverse().join("");
    return reverse2 === num;
};