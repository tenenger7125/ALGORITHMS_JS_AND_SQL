function solution(s) {
    return [...s].map((char, idx) => {
        const targetIdx = s.slice(0, idx).lastIndexOf(char);

        return targetIdx === -1 ? -1 : idx - targetIdx;
    })
}