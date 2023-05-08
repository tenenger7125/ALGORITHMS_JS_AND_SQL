function solution(l, r) {
    const answer = [];
    const regex = /^[05]+$/;
    
    for (let i= Math.floor(l/5) || 1; i * 5<=r; i++) {
        regex.test(i * 5) && answer.push(i * 5);
    }
    
    return answer.length === 0 ? [-1] : answer;
}