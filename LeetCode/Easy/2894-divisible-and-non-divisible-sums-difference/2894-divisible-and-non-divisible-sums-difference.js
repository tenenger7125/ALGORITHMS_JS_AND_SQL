/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function(n, m) {
    let sum = 0;
    
    for (let i=1; i<=n; i++) {
        sum += (i % m === 0 ? -1 : 1) * i
    }
    
    return sum
};