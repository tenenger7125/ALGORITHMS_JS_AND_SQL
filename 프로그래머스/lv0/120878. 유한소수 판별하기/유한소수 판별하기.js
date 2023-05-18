function getGCD (num1, num2) {
    return num2 === 0 ? num1 : getGCD(num2, num1 % num2)
}

function isFinite (n) {
    for (let i=2; i<=n; i++) {
        if (n % i === 0) {
            if (i !== 2 && i !== 5) return false;
            
            while (n % i === 0) {
                n /= i
            }
        }
    }
    
    return true
    
}

function solution(a, b) {
    const gcd = getGCD(a, b)

    return isFinite(b / gcd) ? 1 : 2;
}