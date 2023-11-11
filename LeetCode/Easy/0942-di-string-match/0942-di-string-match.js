/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function(s) {
    const result = [];
    let [left, right] = [0, s.length];
    
    for (let i=0; i<s.length; i++) {
        if (s[i] === 'I') result.push(left++);
        else result.push(right--);
    }
    
    return [...result, left];
};