function solution(before, after) {
    return +(![...before].reduce((acc, cur) => acc.replace(cur, ''), after));
}