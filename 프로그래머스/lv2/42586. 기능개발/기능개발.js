function solution(progresses, speeds) {
    const requiredDay = progresses.map((progress, idx) => Math.ceil((100 - progress) / speeds[idx]))
    const answer = [];
    let stack = [];
    
    for (let i=0; i<requiredDay.length; i++) {
        if (stack.length && stack[0] < requiredDay[i]) {
            answer.push(stack.length);
            stack = [];
        }
        
        stack.push(requiredDay[i]);
    }
    
    if (stack.length) answer.push(stack.length)
    
    return answer;
}