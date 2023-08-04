/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var countGoodRectangles = function(rectangles) {
    const mostSideRectangles = rectangles.map(([w, h]) => Math.min(w, h));
    const max = Math.max(...mostSideRectangles);
    
    return mostSideRectangles.filter(mostSide => max <= mostSide).length
};