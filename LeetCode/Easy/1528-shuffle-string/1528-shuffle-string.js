/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    const array = Array(s.length)
    
    for (let i=0; i<s.length; i++) {
        array[indices[i]] = s[i]
    }
    
    return array.join("")
};