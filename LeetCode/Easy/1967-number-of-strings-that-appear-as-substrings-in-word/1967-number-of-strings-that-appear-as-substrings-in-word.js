/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
var numOfStrings = function(patterns, word) {
    
    return patterns.reduce((count, pattern) => count + +(new RegExp(pattern).test(word)), 0)
};