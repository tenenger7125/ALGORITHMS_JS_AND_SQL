function solution(n) {
    return [...n.toString()].reduce((acc, cur) => acc + +cur, 0);
}