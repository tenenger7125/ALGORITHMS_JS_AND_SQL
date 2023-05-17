function solution(array) {
    return array.reduce((acc, cur, idx) => {
        return acc[0] < cur ? [cur, idx] : acc
    }, [-1, -1]);
}