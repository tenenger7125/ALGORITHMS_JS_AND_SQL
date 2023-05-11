function solution(strArr) {
    return Math.max(...Array.from({length: Math.max(...strArr.map(str => str.length))}, (_, idx) => strArr.reduce((acc, cur) => cur.length === idx + 1 ? acc + 1 : acc, 0)));
}