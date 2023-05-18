function getGCD (num1, num2) {
    return num2 === 0 ? num1 : getGCD(num2, num1 % num2)
}

function isFinite (n) {
    while (n % 2 === 0) {
        n /= 2;
    }
    while (n % 5 === 0) {
        n /= 5;
    }
    return n === 1
}

function solution(a, b) {
    const gcd = getGCD(a, b)

    return isFinite(b / gcd) ? 1 : 2;
}