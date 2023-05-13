function solution(n) {
    return Array.from({length: n}).reduce((acc, _, idx) => {
        return acc + ((idx + 1) % 2 === 0 ? (idx + 1) : 0)
    }, 0);
}