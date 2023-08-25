/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function(words, s) {
     return words.reduce((str, char) => str += char[0], '') === s
};