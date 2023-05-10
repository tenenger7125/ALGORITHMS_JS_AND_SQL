function solution(arr, query) {
    return query.reduce((acc, cur, idx) => {
        return idx % 2 === 0 ? acc.slice(0, cur+1) : acc.slice(cur)
    }, arr)
}