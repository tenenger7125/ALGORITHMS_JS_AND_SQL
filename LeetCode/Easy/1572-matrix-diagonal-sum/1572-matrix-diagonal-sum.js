/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    const n = mat.length;
    
    return mat.reduce((acc,cur,i) => {
        return acc + mat[i][i] + (i !== n-1-i ? mat[i][n-1-i] : 0)
    }, 0);
};