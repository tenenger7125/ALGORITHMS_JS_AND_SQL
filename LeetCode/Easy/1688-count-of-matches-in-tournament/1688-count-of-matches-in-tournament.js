/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function(n) {
    let count = 0;
    while (n > 1) {
        const nextTeams = n % 2 === 0 ? n / 2 : Math.ceil(n / 2);
        console.log(nextTeams)
        count += nextTeams + -(n % 2 !== 0);
        n = nextTeams;
        console.log(count)
    }
    
    return count
};