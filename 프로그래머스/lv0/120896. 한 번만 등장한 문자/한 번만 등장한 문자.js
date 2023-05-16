function solution(s) {
    return [...s].filter(c => s.match(new RegExp(c, 'g')).length === 1).sort().join("") || s;
}