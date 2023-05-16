function solution(t, p) {
    let answer = 0;
    
    for (let i=0; i<=t.length-p.length; i++) {
        answer += +t.slice(i, i+p.length) <= +p ? 1 : 0
    }
    
    return answer
}