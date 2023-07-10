/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function(words) {
    const map = new Map();
    let count = 0;
    
    for (let i=0; i<words.length; i++) {
        const word = words[i].split("").reverse().join("");
        if (map.has(words[i])) count++;
        map.set(word)
    }
    
    return count;
};