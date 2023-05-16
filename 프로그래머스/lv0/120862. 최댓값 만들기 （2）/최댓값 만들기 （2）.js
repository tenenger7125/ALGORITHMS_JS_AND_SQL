function solution(numbers) {
    let answer = -Infinity;
    const dfs = (level, start, res) => {
        if (level === 2) return answer = Math.max(answer, res);
        
        for (let i=start; i<numbers.length; i++) {
            dfs(level+1, i+1, res * numbers[i])
        }
    }
    
    dfs(0, 0, 1)
    
    return answer;
}