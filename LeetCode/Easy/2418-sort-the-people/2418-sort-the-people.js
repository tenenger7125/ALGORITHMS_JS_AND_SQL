/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    return heights.map((height, index) => [height, index]).sort((a,b) => b[0]-a[0]).map(([height, index]) => names[index])
};