function solution(arr, n = 0) {
    const nextArr = arr.map(num => num >= 50 && num % 2 === 0 ? num / 2 : num < 50 && num % 2 !== 0 ? num * 2 + 1 : num);

    if (arr.every((num, idx) => num === nextArr[idx])) return n
    
    return solution(nextArr, n+1);
}