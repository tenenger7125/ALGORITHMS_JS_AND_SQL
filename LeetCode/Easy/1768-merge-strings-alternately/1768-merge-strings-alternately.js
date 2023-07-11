/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let idx = 0;
    let merged = '';
    
    while (word1.length > idx && word2.length > idx) {
        merged += word1[idx] + word2[idx];
        idx++;
    }
    
    while (word1.length > idx) {
        merged += word1[idx];
        idx++;
    }
    
    while (word2.length > idx) {
        merged += word2[idx];
        idx++;
    }
    
    return merged
};