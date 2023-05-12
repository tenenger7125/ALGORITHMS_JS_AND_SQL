function solution(n) {
    const limit = n ** 2;
    const answer = Array.from({length: n}, () => Array(n).fill(0));
    const dx = [1, 0, -1, 0];
    const dy = [0, 1, 0, -1];
    let [x, y] = [0, 0];
    let dir = 0;
    let count = 1;
    
    while (count <= limit) {
        const [nx, ny] = [x + dx[dir], y + dy[dir]]
        
        if ((x === 0 && y === 0) || answer[y][x] === 0) answer[y][x] = count++;
        
        if (nx === n || ny === n || nx === -1 || ny === -1 || answer[ny][nx]) dir = (dir + 1) % 4;
        else [x, y] = [nx, ny];
    }
    
    return answer;
}