function solution(score) {
    return score.map(e1 => {
        return score.filter(e2 => (e1[0] + e1[1]) / 2 < (e2[0] + e2[1]) / 2).length + 1
    })
}

