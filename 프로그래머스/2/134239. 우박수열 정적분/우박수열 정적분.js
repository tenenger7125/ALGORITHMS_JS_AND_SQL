function solution(k, ranges) {
    const dy = Array.from({length: 1}).fill(0);
    const answer = [];
    let i = 1;
    
    dy[0] = k;
    
    while (dy[i-1] !== 1) {
        dy[i] = dy[i-1] % 2 === 0 ? dy[i-1] / 2 : dy[i-1] * 3 + 1;
        i++;
    }
    console.log(dy)
    
    const widths = Array.from({length: 1}).fill(0);
    
    for (let i=1; i<dy.length; i++) {
        widths[i] = (dy[i-1] + dy[i]) / 2 + widths[i-1] 
    }
    
    for (const range of ranges) {
        const [a, b] = [range[0], widths.length - 1 + range[1]];
        
        if (a > widths.length - 1 || b < 0 || a > b) {
            answer.push(-1)
            continue
        }
        
        const num = widths[b] - widths[a]

        answer.push(num < 0 ? -1 : num);
    }
    
    return answer;
}