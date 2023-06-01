/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function(encoded, first) {
    const origin = [first];
    
    for (let i=0; i<encoded.length; i++) {
        origin.push(origin[i] ^ encoded[i])
    }
    
    return origin;
};