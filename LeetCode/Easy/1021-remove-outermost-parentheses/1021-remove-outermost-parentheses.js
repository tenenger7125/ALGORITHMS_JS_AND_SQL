/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let check = 0;
    let stack = [];
    let result = '';
    
    
    for (const char of s) {
        if (char === '(') check++;
        else check--;
        
        stack.push(char);
        
        if (check === 0) {
            result += stack.slice(1, -1).join("")
            stack = [];
        }
    }
    
    return result
};