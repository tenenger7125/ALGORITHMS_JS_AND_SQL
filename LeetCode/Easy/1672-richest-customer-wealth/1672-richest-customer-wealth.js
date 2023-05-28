/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    return accounts.reduce((acc, cur) => {
        return Math.max(acc, cur.reduce((acc, cur) => acc + cur, 0))
    }, 0)
};