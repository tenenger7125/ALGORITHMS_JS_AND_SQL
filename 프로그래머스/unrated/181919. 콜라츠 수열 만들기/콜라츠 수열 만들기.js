function solution(n) {
    const answer = [];
    
    while(n > 1) {
        answer.push(n);
        n = n % 2 === 0 ? n / 2 : n * 3 + 1
    }
    
    return [...answer, n];
}