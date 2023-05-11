function solution(board, k) {
    var answer = 0;
    return board.reduce((acc, cur, colIdx) => {
        return acc + cur.reduce((acc, cur, rowIdx) => {
            return acc + ((colIdx + rowIdx) <= k ? cur : 0)
        }, 0)
    },0);
}