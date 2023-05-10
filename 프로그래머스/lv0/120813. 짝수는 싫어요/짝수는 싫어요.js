function solution(n) {
    var answer = [];
    return Array.from({length: n}, (_, i) => i+1).filter(num => num % 2 !== 0);
}