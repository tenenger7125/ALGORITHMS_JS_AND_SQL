/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function(s) {
    let answer = '';
    for (let i=0; i<s.length; i++) {
        if (Number.isInteger(+s[i])) answer += String.fromCharCode(s[i-1].charCodeAt() + +s[i])
        else answer += s[i]
    }
    return answer;
};