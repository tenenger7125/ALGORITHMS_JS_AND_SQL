/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function(n, start) {
    let bits = 0;
    
    for (let i=0; i<n; i++) {
        bits ^= start + 2 * i;
    }
    
    return bits
};