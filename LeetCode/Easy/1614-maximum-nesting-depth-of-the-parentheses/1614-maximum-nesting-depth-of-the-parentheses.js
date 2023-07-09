/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let max = 0;
    let depth = 0;
    
    for (let i=0; i<s.length; i++) {
        if (s[i] === '(') depth++;
        else if (s[i] === ')') depth--;
        else;
        
        max = Math.max(max, depth)
    }
    return max;
};