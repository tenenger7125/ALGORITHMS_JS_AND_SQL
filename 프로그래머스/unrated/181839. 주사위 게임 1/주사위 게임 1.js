function calculate (a, b) {
    const odd = +(a % 2 === 1) + +(b % 2 === 1)
    
    switch (odd) {
        case 2: return a ** 2 + b ** 2;
        case 1: return 2 * (a + b);
        default : return Math.abs(a - b);
    }
}

function solution(a, b) {
    return calculate(a,b);
}