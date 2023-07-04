/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
var minBitFlips = function(start, goal) {
    let bit = start ^ goal;
    let step = 0;
    
    while (bit) {
        if (bit & 1) step++;
        bit >>= 1;
    }
    
    return step;
};