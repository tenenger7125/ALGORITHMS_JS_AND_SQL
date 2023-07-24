/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {
    let current = points[0];
    let count = 0
    
    for (let i=1; i<points.length; i++) {
        const target = points[i];
        const [cx, cy] = current;
        const [tx, ty] = target;
        
        const absX = Math.abs(cx - tx);
        const absY = Math.abs(cy - ty);
        
        count += Math.min(absX, absY) + Math.abs(absX - absY);
        current = target;
    }
    
    return count;
};