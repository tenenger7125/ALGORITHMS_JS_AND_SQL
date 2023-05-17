function solution(s1, s2) {
    return s1.reduce((acc, cur) => acc + +(s2.includes(cur)), 0);
}