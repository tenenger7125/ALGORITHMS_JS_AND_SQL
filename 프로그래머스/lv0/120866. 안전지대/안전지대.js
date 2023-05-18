function solution(board) {
    // ↑ ↗ → ↘ ↓ ↙ ← ↖
    const [dx, dy] = [[0, 1, 1, 1, 0, -1, -1, -1], [-1, -1, 0, 1, 1, 1, 0, -1]];
    
    board.forEach((row, rowIdx) => row.forEach((col, colIdx) => {
        if (col === 1) {
            
            for (let i=0; i<8; i++) {
                const [mx, my] = [colIdx + dx[i], rowIdx + dy[i]]
                if (my > board.length - 1 || my < 0 || mx < 0 || mx > row.length) continue;
                
                board[my][mx] = board[my][mx] || 2
            }
        }
    }) )
    
    
    return board.reduce((acc, cur) => acc + cur.reduce((acc, cur) => acc + +(cur === 0), 0), 0)
}