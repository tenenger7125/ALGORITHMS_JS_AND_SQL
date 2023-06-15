/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) { 
    return edges[1].includes(edges[0][0]) ? edges[0][0] : edges[0][1];
};