function getGCD (num1, num2) {
    return num2 > 0 ? getGCD(num2, num1 % num2) : num1
}

function solution(n) {
    if (n % 6 === 0) return n / 6;
    
    const gcd = getGCD(6, n);
    return (gcd * (n / gcd) * (6 / gcd)) / 6;
}