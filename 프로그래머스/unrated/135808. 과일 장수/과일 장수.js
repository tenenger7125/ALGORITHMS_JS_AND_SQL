function solution(k, m, score) {
    score.sort((a,b) => b-a);
    
    const answer = [];
    
    for (let i=0; i<=Math.floor(score.length / m) - 1; i++) {
        answer.push(score.slice(i * m, (i+1) * m))
    }
    
    return answer.reduce((acc, cur) => {
        return acc + Math.min(...cur) * cur.length
    },0);
}