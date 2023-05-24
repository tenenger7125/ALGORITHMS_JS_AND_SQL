function solution(numbers) {
    const stack = [];
    const answer = Array(numbers.length).fill(-1);
    
    for (let i=0; i<numbers.length; i++) {
        while (numbers.length && numbers[stack.at(-1)] < numbers[i]) {
            answer[stack.pop()] = numbers[i]
        }
        
        stack.push(i)
    }
    
    return answer
}