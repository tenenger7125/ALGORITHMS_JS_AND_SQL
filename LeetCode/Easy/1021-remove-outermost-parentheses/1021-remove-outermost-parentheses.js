/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let check = 0;
    let result = '';
    
    for (const char of s) {
        if (check === 0 && char === '(') {
            check++;
            continue;
        }
        
        check += char === '(' ? 1 : -1
        
        if (check !== 0) result += char
    }
    
    return result
};