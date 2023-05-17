function pressKey (key) {
    switch (key) {
        case 'up': return [0, 1]
        case 'down': return [0, -1]
        case 'left': return [-1, 0]
        case 'right': return [1, 0]
        default: return [0, 0]
    }
}

function solution(keyinput, board) {
    const [boardX, boardY] = [Math.floor(board[0]/2), Math.floor(board[1]/2)]
    
    return keyinput.reduce(([x, y], cur) => {
        const [mx, my] = pressKey(cur)

        return (x + mx < -boardX || x + mx > boardX || y + my < -boardY || y + my > boardY) ? [x, y] : [x + mx, y + my]
    }, [0, 0])
}