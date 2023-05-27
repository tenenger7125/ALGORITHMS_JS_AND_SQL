function solution(maps) {
    const copy_maps = maps.map(row => row.split(""));
    const [dy, dx] = [[-1, 0, 1, 0], [0, 1, 0, -1]];
    const answer = [];
    
    const dfs = (i, j) => {
        if (i < 0 || j < 0 || i >= copy_maps.length || j >=copy_maps[0].length || copy_maps[i][j] === 'X') return 0;
        
        let now = +copy_maps[i][j];
        
        copy_maps[i][j] = 'X';
        
        for (let dir=0; dir<4; dir++) {
            now += dfs(i + dy[dir], j + dx[dir])
        }
        
        return now;
    }
    
    for (let i=0; i<copy_maps.length; i++) {
        for (let j=0; j<copy_maps[i].length; j++) {
            if (copy_maps[i][j] !== 'X') {
                
                answer.push(dfs(i, j))
            }
        }
    }
    
    
    return answer.length ? answer.sort((a,b) => a-b) : [-1];
}