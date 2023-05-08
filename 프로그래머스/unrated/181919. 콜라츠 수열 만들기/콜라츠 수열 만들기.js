function solution(n, arr = []) {
    arr.push(n);
    
    if (n === 1) return arr;
    return solution(n % 2 === 0 ? n / 2 : n * 3 + 1, arr);
}