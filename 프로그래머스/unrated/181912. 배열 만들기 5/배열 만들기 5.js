function solution(intStrs, k, s, l) {
    return intStrs.map(intStr => +intStr.slice(s, s + l)).filter(num => num > k);
}