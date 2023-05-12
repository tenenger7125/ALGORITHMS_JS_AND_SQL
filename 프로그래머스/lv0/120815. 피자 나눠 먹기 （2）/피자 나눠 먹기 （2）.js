function getGCD (n1, n2) {
    return n2 > 0 ? getGCD(n2, n1 % n2) : n1
}

function solution(n) {
    return n / getGCD(6, n)
}