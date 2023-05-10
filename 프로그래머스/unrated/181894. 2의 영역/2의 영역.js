function solution(arr) {
    const [start, end] = [arr.indexOf(2), arr.lastIndexOf(2)];
    return start === -1 && end === -1 ? [-1] : arr.slice(start, end+1);
}