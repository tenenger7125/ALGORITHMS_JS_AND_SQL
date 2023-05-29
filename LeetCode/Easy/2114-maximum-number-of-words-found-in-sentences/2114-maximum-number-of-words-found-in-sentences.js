/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    return sentences.reduce((acc, sentence) => {
        return Math.max(acc, sentence.split(" ").length)
    }, 0)
};