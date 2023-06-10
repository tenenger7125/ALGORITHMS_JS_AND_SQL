/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    const schema = {
        type: 0,
        color: 1,
        name: 2
    }
    
    return items.reduce((acc, cur) => {
        return acc + +(cur[schema[ruleKey]] === ruleValue)
    }, 0)
};