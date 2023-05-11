function solution(arr) {
    return +arr.every((row, rowIdx) => row.every((col, colIdx) => {
        return arr[rowIdx][colIdx] === arr[colIdx][rowIdx]
    }));
}