/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    return [...(n + '')].reduce((acc, cur) => acc * cur, 1) - [...(n + '')].reduce((acc, cur) => acc + +cur, 0)
};