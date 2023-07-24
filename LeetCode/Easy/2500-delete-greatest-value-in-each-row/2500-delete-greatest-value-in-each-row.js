/**
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function(grid) {
    let answer = 0;
    
    while (grid[0].length) {
        let entireMax = 0;
        
        grid = grid.map(row => {
            const rowMax = Math.max(...row);
            const rowMaxIdx = row.indexOf(rowMax);
            
            entireMax = Math.max(entireMax, rowMax)
            return [...row.slice(0, rowMaxIdx), ...row.slice(rowMaxIdx+1)]
        })

        answer += entireMax;
    }
    
    return answer;
};