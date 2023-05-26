/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    return operations.reduce((acc, cur) => {
        return acc += cur.match(/\++|\-+/)[0] === '--' ? -1 : 1
    }, 0)
};