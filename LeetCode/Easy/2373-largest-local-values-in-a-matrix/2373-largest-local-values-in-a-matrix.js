/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function(grid) {
    const [dy, dx] = [[-1,-1,0,1,1,1,0,-1,0],[0,1,1,1,0,-1,-1,-1,0]];
    const maxLocalSize = Array.from({length: grid.length-2});
    
    return maxLocalSize.reduce((acc, cur, col) => {
        return [...acc, maxLocalSize.reduce((acc, cur, row) => {
            return [...acc, Math.max(...dy.map((y, i) => grid[col+y+1][row+dx[i]+1]))]
        }, [])];
    }, [])
};