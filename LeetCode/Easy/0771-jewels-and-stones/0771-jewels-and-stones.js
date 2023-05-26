/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    return stones.match(new RegExp(`[${jewels}]`, 'g'))?.length ?? 0
};