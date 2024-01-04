/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function(n) {
    let results = 0;
    
    for (let i=0; i<n; i++) {
        const round = 1 + Math.floor(i / 7);
        
        results += round + (i % 7)
    }

    return results
};