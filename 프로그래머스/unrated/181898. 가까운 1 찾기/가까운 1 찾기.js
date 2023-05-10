function solution(arr, idx) {
    return arr.findIndex((n, i) => i >= idx && n);
}