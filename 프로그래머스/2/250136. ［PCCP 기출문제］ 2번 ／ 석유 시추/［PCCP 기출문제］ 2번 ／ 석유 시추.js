function solution(land) {
    const [dx, dy] = [[0, 1, 0, -1], [-1, 0, 1, 0]];
    const [m, n] = [land[0].length, land.length]
    const visited = Array.from({length: n}, () => Array.from({length: m}).fill(false))
    const oilCols = Array.from({length: m}).fill(0);
    
    const bfs = (x, y) => {
        let size = 0;
        const stack = [[x, y]];
        const row_cols = new Set();
        
        if (land[y][x] === 0) return size;
        
        while (stack.length) {
            const [sx, sy] = stack.pop();
            
            if (visited[sy][sx]) continue;
            
            visited[sy][sx] = true;
            row_cols.add(sx);
            size += 1;

            for (let d=0; d<4; d++) {
                const [mx, my] = [sx + dx[d], sy + dy[d]];

                if (mx < 0 || mx >= m || my < 0 || my >= n) continue;
                if (visited[my][mx]) continue;
                if (land[my][mx] === 0) continue;

                stack.push([mx, my])
            }
        }
        
        for (const row_oil of row_cols) {
            oilCols[row_oil] += size
        }
    }
    

    for (let x=0; x<m; x++) {
        for (let y=0; y<n; y++) {
            if (land[y][x] === 0 || visited[y][x]) continue;
            
            bfs(x, y);
        }
    }

    return Math.max(...oilCols)
}