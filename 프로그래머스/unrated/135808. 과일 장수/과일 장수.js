function solution(k, m, score) {
    return score.sort((a,b) => b-a).filter((_, i) => (i + 1) % m === 0).reduce((acc, cur) => {
        return acc + cur * m
    }, 0)
}

