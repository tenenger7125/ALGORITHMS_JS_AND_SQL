function solution(board) {
    const flatBoard = board.reduce((acc, cur) => [...acc, ...cur])
    const playerOCount = flatBoard.reduce((acc, cur) => acc + +(cur === 'O'), 0);
    const playerXCount = flatBoard.reduce((acc, cur) => acc + +(cur === 'X'), 0);
    
    // O의 개수와 X의 개수의 차이는 1개 이하여야한다.
    if (playerOCount - playerXCount >= 2) return 0;
    
    // X의 개수는 O의 개수를 넘지 않아야한다.
    if (playerOCount < playerXCount) return 0
    
    const gameOver = (y, x) => {
        const player = board[y][x];
        
        if (board[y][0] === player && board[y][0] === board[y][1] && board[y][1] === board[y][2] && board[y][0] === board[y][2]) return player;
        if (board[0][x] === player &&  board[0][x] === board[1][x] && board[1][x] === board[2][x] && board[0][x] === board[2][x]) return player;
        

        if (board[0][0] === player && board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] === board[2][2]) return player;
        if (board[0][2] === player && board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[0][2] === board[2][0]) return player;
        
        
        return ''
    }

    for (let i=0; i<3; i++) {
        for (let j=0; j<3; j++) {
            if (board[i][j] === '.') continue;
            
            // O나 X 중 먼저 3개를 빙고시킨 경우에 종료된다.
            const player = gameOver(i, j);
            
            // 만약 종료된 player가 O인 경우, O의 개수는 X의 개수보다 무조건 1개 커야한다.
            if (player === 'O' && playerOCount <= playerXCount) {
                return 0;
            }
            
            // 만약 종료된 player가 X인 경우, X의 개수는 O의 개수와 같아야한다.
            if (player === 'X' && playerOCount > playerXCount) {
                return 0;
            }
        }
    }
    
    return 1
}

