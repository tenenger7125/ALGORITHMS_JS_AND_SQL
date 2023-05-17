function solution(n, m, section) {
    return section.reduce(([idx, cover], cur) => {
        return idx < cur ? [cur + m - 1, cover + 1] : [idx, cover];
    }, [-1, 0])[1]
}