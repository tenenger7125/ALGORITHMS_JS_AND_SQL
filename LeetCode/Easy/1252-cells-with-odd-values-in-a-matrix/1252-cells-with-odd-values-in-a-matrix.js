/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function(m, n, indices) {
    const arr = Array.from({length: m}, () => Array(n).fill(0));
    
    for (const [row, col] of indices) {
        for (let i=0; i<n; i++) {
            arr[row][i]++;
        }
        
        for (let i=0; i<m; i++) {
            arr[i][col]++;
        }
    }
    
    return arr.flat().filter(num => num % 2 === 1).length
};