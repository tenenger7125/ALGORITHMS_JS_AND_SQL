/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function(encoded, first) {
    const answer = [first];
    let left = first;
    
    for (let i=0; i<encoded.length; i++) {
        const origin = left ^ encoded[i];
        answer.push(origin)
        left = origin
    }
    
    return answer;
};