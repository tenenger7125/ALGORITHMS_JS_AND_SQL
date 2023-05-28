function solution(n) {
    let answer = 0;
    
    const dfs = (y, x, position) => {
        for (let i=0; i<position.length; i++) {
            const [py, px] = position[i];
            if (py === y || px === x || Math.abs(px - x) === Math.abs(py - y)) return;
        }   
        
        if (y === n-1) return answer++
        
        for (let i=0; i<n; i++) {
            
            dfs(y+1, i, [...position, [y, x]]);
        }
    }
    
    for (let i=0; i<n; i++) {
        dfs(0, i, [])
    }
    
    return answer;
}