function solution(board) {
    const d = [[0, 1], [1, 0], [0, -1], [-1,  0]];
    const start = [0, 0]; // [x, y]
    const maxX = board[0].length;
    const maxY = board.length;
    
    
    for (let i=0; i<maxX; i++) {
        for (let j=0; j<maxY; j++) {
            if (board[j][i] === 'R') {
                start[0] = i;
                start[1] = j
                break;
            }
        }
    }
    
    const slip = (x, y, dx, dy) => {
        let [mx, my] = [x, y]
        
        while (true) {
            if (mx < 0 || mx >= maxX || my < 0 || my >= maxY || board[my][mx] === 'D') {
                mx -= dx;
                my -= dy;
                break;
            }
            
            mx += dx;
            my += dy;
        }
        
        return [mx, my]
    }
    
    const bfs = ([startX, startY]) => {
        const queue = [[startX, startY, 0]];
        const visited = Array.from({length: maxY}, () => Array.from({length: maxX}, () => false))
        
        while(queue.length) {
            const [x, y, count] = queue.shift();
            
            for (const [dx, dy] of d) {
                const [mx, my] = slip(x, y, dx, dy);
                
                if (visited[my][mx]) continue;
                
                if (board[my][mx] === 'G') return count + 1;
                else {
                    visited[my][mx] = true;
                    queue.push([mx, my, count + 1])
                }
            }
        }
        
        return null;
    }
    
    return bfs(start) || -1
}