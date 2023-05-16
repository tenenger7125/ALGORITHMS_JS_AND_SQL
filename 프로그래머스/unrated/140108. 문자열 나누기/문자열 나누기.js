function solution(s) {
    let x = s[0];
    let count = 1;
    let answer = 0;
    
    for (let i=1; i<s.length; i++) {
        s[i] === x ? count++ : count--;
        
        if (count === 0) {
            answer++;
            x = s[i+1];
        };
    }
    
    return count !== 0 ? answer + 1 : answer;
}