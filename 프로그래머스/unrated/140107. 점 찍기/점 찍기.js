function solution(k, d) {
    let answer = 0;
    
    for (let i=0; i<=d; i+=k) {
        const rangeY = Math.sqrt(d ** 2 - i ** 2);
        
        answer += Math.floor(rangeY / k) + 1
    }
    
    return answer
}