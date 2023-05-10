function solution(arr, queries) {
    var answer = [];
    return queries.reduce((acc, [s, e]) => {
        return acc.map((num, idx) => s <= idx && idx <= e ? num+1 : num)
    }, arr);
}