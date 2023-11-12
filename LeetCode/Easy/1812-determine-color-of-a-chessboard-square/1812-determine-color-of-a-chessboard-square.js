/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function(coordinates) {
    const boards = Array.from({length: 9}).map((_, rowIdx) => Array.from({length: 9}, (__, colIdx) => {
        if (rowIdx === 0 || colIdx === 0) return;
        
        return (rowIdx + colIdx) % 2 === 0 ? 'b' : 'w'
    }));
    const [y, x] = coordinates.split("").map((coordinate, idx) => {
        if (idx === 0) return coordinate.charCodeAt() - 'a'.charCodeAt() + 1
        return coordinate;
    });

    return boards[y][x] === 'w'
};