function solution(arr) {
    return arr.filter((n, i) => n !== arr[i + 1]);
}