// 여러 모범답안을 봤지만, 모범 답안과 다르게 구현했습니다.
function solution(n) {
    let answer = 0;
    
    // O(n)
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
    
    // O(n)
    for (let i=0; i<n; i++) {
        dfs(0, i, [])
    }
    
    return answer;
}