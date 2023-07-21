/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function(s) {
    const shapReplaced = s.replace(/[0-9]{2}#/g, matches => String.fromCharCode('a'.charCodeAt() - 1 + parseInt(matches)));
    console.log(shapReplaced)
    const replaced = shapReplaced.replace(/[0-9]/g, matches => String.fromCharCode('a'.charCodeAt() - 1 + parseInt(matches)));
    return replaced
};