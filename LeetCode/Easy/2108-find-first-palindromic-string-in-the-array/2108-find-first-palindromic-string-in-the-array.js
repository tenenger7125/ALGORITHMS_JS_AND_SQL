/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    return words.find(word => word === word.split("").reverse().join("")) || ""
};