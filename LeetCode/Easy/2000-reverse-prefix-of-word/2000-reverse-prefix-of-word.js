/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    const regExp = new RegExp(`.*?${ch}`);
    return word.replace(regExp, match => match.split("").reverse().join(""))
};