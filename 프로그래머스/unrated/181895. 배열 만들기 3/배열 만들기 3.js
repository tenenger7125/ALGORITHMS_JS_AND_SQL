function solution(arr, intervals) {
    return intervals.reduce((acc, [a,b]) => {
        return [...acc, ...arr.slice(a,b+1)]
    }, []);
}