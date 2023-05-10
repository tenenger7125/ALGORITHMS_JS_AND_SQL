function solution(n, k) {
    const answer = [];
    
    for (let i=1; i*k<=n; i++) {
        answer.push(i*k)
    }
    
    return answer;
}