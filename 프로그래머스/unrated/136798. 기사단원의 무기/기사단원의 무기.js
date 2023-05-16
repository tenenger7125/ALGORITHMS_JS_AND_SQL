function getDivisor (number) {
    const divisor = [];

    for (let i=1; i<=Math.sqrt(number); i++) {
        if (number % i === 0) {
            divisor.push(i)
            if (number / i !== i) divisor.push(number / i);
        }
    }
        
    return divisor
}

function solution(number, limit, power) {
    let answer = 0;
    
    for (let i=1; i<=number; i++) {
        const divisor = getDivisor(i).length;
        
        answer += (divisor <= limit ? divisor : power)
    }
    
    return answer;
}