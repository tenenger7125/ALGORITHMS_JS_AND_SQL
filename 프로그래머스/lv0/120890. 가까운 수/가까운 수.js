function solution(array, n) {
    return array.reduce((acc, cur) => {
        const diff1 = Math.abs(n - cur);
        const diff2 = Math.abs(n - acc);
        
        return diff1 < diff2 ? cur : diff1 === diff2 ? Math.min(cur, acc) : acc
    }, Number.MAX_SAFE_INTEGER)
}