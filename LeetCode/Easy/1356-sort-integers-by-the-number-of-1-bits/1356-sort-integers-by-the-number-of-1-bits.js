/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
    return arr.sort((a,b) => {
        const aBinaryOneCount = a.toString(2).match(/1/g)?.length ?? 0;
        const bBinaryOneCount = b.toString(2).match(/1/g)?.length ?? 0;
        
        return (aBinaryOneCount - bBinaryOneCount) || a - b;
    })
};