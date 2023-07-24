/**
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function(grid) {
    grid = grid.map(row => row.sort((a,b)=>a-b));
    let answer = 0;
    
    while (grid[0].length) {
        let entireMax = 0;
        
        grid.forEach(row => {
            const rowMax = row.pop();
            entireMax = Math.max(entireMax, rowMax)
        })

        answer += entireMax;
    }
    
    return answer;
};