/**
 * @param {string} s
 * @return {string}
 */
var finalString = function(s) {
    const arr = [];
    
    for (const char of s) {
        if (char === 'i') arr.reverse();
        else arr.push(char);
    }
    
    return arr.join("")
};