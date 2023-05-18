function solution(numlist, n) {
    return numlist.map((num, idx) => [Math.abs(n-num), num]).sort((a,b) => {
        if (a[0] === b[0]) return b[1] - a[1];
        return a[0] - b[0]
    }).map(el => el[1])
}