/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    return heights.map((height, index) => [names[index], height]).sort((a,b) => b[1]-a[1]).map(([name]) => name);
};