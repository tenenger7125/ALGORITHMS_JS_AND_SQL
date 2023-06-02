/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let balanced = 0;
    let matched = 0;
    
    for (let i=0; i<s.length; i++) {
        balanced += s[i] === 'R' ? 1 : -1;
        
        if (balanced === 0) matched++;
    }
    
    return matched
};