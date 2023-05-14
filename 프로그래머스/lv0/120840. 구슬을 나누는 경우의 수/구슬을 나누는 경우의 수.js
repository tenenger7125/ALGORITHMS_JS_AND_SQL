function solution(balls, share) {
    let answer = 0;
    
    const dfs = (l, s) => {
        if (l === share) return answer += 1;
        
        for (let i=s; i<balls; i++) {
            dfs(l+1, i+1)
        }
    }
    
    dfs(0, 0)
    
    return answer;
}