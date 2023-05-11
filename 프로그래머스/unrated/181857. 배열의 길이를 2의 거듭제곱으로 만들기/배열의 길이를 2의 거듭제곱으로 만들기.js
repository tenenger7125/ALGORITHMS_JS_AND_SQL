function solution(arr) {
    return [...arr, ...Array.from({length : 2 ** Math.ceil(Math.log2(arr.length)) - arr.length}).fill(0)];
}