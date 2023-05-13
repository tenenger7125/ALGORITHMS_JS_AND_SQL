function solution(number) {
    var answer = 0;
    const visit = []
    
    function dfs (l, s, sum) {
        if (l === 3) {
            if (sum === 0) answer++
            return;
        }
        
        for (let i=s; i<number.length; i++) {
            dfs(l+1, i+1, sum + number[i]);
        }
    }
    
    dfs(0, 0, 0)
    
    return answer;
}