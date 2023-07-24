/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {
    let count = 0
    
    for (let i=1; i<points.length; i++) {
        const [[cx, cy], [tx, ty]] = [points[i-1], points[i]]
        const absX = Math.abs(cx - tx);
        const absY = Math.abs(cy - ty);
        
        count += Math.min(absX, absY) + Math.abs(absX - absY);
    }
    
    return count;
};