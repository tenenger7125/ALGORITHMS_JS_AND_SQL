function solution(i, j, k) {
    return Array.from({length: j-i+1}, (_, idx) => i + idx).reduce((acc, cur) => {
        return acc + (cur.toString().match(new RegExp(k, 'g'))?.length ?? 0)
    }, 0);
}