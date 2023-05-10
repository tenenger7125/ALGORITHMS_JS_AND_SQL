function solution(arr, k) {
    return arr.map(num => k % 2 === 0 ? num + k : num * k);
}