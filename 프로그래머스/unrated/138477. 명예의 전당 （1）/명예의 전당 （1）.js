function solution(k, score) {
    const honors = [];
    
    return score.map(s => {
        if (honors.length < k) honors.push(s);
        
        if (Math.min(...honors, s) !== s) {
            honors.pop();
            honors.push(s)
        }
        
        honors.sort((a,b) => b-a);
        return honors.at(-1)
    });
}