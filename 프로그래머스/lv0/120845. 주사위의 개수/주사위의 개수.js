function solution(box, n) {
    return box.reduce((acc, cur) => {
        return acc * Math.floor(cur / n)
    }, 1)
}