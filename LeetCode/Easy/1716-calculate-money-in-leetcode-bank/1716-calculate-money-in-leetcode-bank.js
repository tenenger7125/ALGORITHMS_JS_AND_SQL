/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function(n) {
    let mondayMoney = 1;
    let results = 0;
    
    while (n > 0) {
        for (let i=0; i<(n > 7 ? 7 : n); i++) {
            results += mondayMoney + i
        }
        n -= 7;
        mondayMoney++;
    }

    return results
};